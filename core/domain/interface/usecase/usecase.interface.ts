export default interface IUseCase<I, O> {
	execute(...args: I[]): Promise<O>;
}