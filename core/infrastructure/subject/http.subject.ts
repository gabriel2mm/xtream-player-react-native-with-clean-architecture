import IHttpObserver from "@core/domain/interface/observer/http-observer.interface";

/**
 * A subject class responsible for notifying observers about HTTP-related events.
 */
export default class HttpSubject {

	private observers: IHttpObserver[] = [];

	// Private constructor to prevent direct instantiation
	private constructor() { }

	private static instance: HttpSubject;

	/**
	 * Returns the Singleton instance of HttpSubject.
	 * @returns The Singleton instance of HttpSubject.
	 * */
	static getInstance(): HttpSubject {
		if (!this.instance) this.instance = new HttpSubject();
		return this.instance;
	}

	/**
	 * Adds an observer to the list of observers.
	 * @param observer The observer to add.
	 * */
	addObserver(observer: IHttpObserver): void {
		this.observers.push(observer);
	}

	/**
	 * Notifies all observers about an HTTP-related event.
	 * @param url The URL associated with the event.
	 * @param config Optional additional configuration for the event.
	 * */
	notifyObservers(url: string, config?: any): void {
		this.observers.forEach(observer => observer.update(url, config));
	}
}