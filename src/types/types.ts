//@ts-ignore
export interface UseFetchOptions<T> {
	url: string;
	method?: string;
	headers?: Record<string, string>;
	body?: string | Record<string, any>;
}

export interface UseFetchResponse<T> {
	data: T | null;
	error: Error | null;
	isLoading: boolean;
}
