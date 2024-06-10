export default class Account {
	constructor(
		readonly url: string,
		readonly username: string,
		readonly password: string,
		readonly message: string,
		readonly auth: number,
		readonly created_at: string,
		readonly exp_date: string,
		readonly is_trial: string,
		readonly max_connections: string,
		readonly status: string,
		readonly active_coins: number,
		readonly allowed_output_formats: string[],
	) { }

	static create(
		url: string,
		username: string,
		password: string,
		message: string,
		auth: number,
		created_at: string,
		exp_date: string,
		is_trial: string,
		max_connections: string,
		status: string,
		active_coins: number,
		allowed_output_formats: string[]
	) {
		return new Account(url, username, password, message, auth, created_at, exp_date, is_trial, max_connections, status, active_coins, allowed_output_formats);
	}

}