export default interface IStreamService<T, I> {
	getStreams(categoryId: string): Promise<T>;
	getStream(streamId: string, param?: any): Promise<I>;
}