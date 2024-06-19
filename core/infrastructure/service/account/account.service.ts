import Account from "@core/domain/entity/account/account";
import AccountContext from "../../context/account.context";
import LoginResult from "@core/application/dtos/login-result.dto";
import LoginFailureException from "@core/domain/exceptions/login-failure.exception";
import { AxiosResponse } from "axios";
import ParametersInvalidException from "@core/domain/exceptions/parameters-invalid.exception";
import HttpSubject from "../../subject/http.subject";
import IAccountService from "@core/domain/interface/account/account-service.interface";
import IHttpCacheClient from "@core/domain/interface/adapter/http-cache.adapter";
import IHttpClient from "@core/domain/interface/adapter/http.interface";

/**
 * A service class responsible for handling account-related operations.
 */
export default class AccountService implements IAccountService {

	/**
	 * Creates an instance of AccountService.
	 * @param http The HTTP client used for making requests.
	 * @param httpCacheClient The HTTP cache client used for caching requests.
	 * */
	constructor(private readonly http: IHttpClient, private readonly httpCacheClient: IHttpCacheClient) { }

	/**
	 * Logs in the user and returns the account information.
	 * @param url - The base URL for the login request.
	 * @param username - The username of the account.
	 * @param password - The password of the account.
	 * @throws LoginFailureException if the login fails.
	 * @returns The account information.
	 * */
	async login(url: string, username: string, password: string) {
		if (!url || !username || !password)
			throw new ParametersInvalidException("Login parameters invalid");

		const response = await this.httpCacheClient
			.useQuery<AxiosResponse<LoginResult, any>>(
				"account",
				() => this.http.get<AxiosResponse<LoginResult, any>>(url + `/player_api.php?username=${username}&password=${password}`)
			);

		if (response.status >= 200 && response.status < 300) {
			const account = Account.create(
				url,
				username,
				password,
				response.data?.user_info?.message,
				response.data?.user_info?.auth,
				response.data?.user_info?.created_at,
				response.data?.user_info?.exp_date,
				response.data?.user_info?.is_trial,
				response.data?.user_info?.max_connections,
				response.data?.user_info?.status,
				response.data?.user_info?.active_coins,
				response.data?.user_info?.allowed_output_formats
			);

			HttpSubject.getInstance().notifyObservers(`${account.url}/player_api`, { params: { username: account.username, password: account.password } });
			AccountContext.getInstance().setAccount(account);
			return account;
		}

		throw new LoginFailureException();
	}
}