export default interface IUseCase<I, O> {
	execute(param?: I): Promise<O>;
}