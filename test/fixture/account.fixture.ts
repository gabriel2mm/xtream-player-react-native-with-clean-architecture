import LoginParams from "@core/application/dtos/login-params.dto";
import LoginResult from "@core/application/dtos/login-result.dto";
import Account from "@core/domain/entity/account";

export const accountFixture = new Account("http://url.com", "username", "passowrd", "", 1, "1683243026", "1717985669", "0", "2", "Active", 0, ['m3u8', 'ts', 'rtmp']);
export const loginResult = new LoginResult(accountFixture, {});
export const loginParams = new LoginParams("http://url.com", "username", "passowrd");