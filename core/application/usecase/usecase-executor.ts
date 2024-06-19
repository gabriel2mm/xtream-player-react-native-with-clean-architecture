import IUseCase from "@core/domain/interface/usecase/usecase.interface";

export default class UsecaseExecutor<I, O> {
	execute<T extends IUseCase<I, O>>(UseCaseClass: new (...args: any[]) => T, service: any, input: I): Promise<O> {
		const useCaseInstance = new UseCaseClass(service);
		return useCaseInstance.execute(input);
	}
}