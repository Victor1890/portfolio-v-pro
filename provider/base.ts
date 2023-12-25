import axios, { AxiosHeaders, AxiosInstance, AxiosRequestConfig, HeadersDefaults, RawAxiosRequestHeaders } from 'axios'

class Base {
	private readonly axios: AxiosInstance

	constructor(
		api: string,
		headers: RawAxiosRequestHeaders | AxiosHeaders | Partial<HeadersDefaults> = {},
		config: AxiosRequestConfig = {}
	) {
		this.axios = axios.create({
			baseURL: api,
			withCredentials: true,
			headers: { ...config.headers, ...headers },
			...(config || {}),
		})
	}

	private params(params: Record<string, any>): string {
		return Object.keys(params)
			.map((key) => {
				let value = params[key]
				value = typeof value == typeof {} ? JSON.stringify(value) : value
				return `${key}=${value}`
			})
			.join('&')
	}

	private getMessage(error: { response?: any; message?: string }): string {
		const response = error.response

		const conditionError = response && response.data && response.data.error
		const conditionWithMessage = response && response.data && response.data.message

		if (conditionWithMessage) return response.data.message
		if (conditionError) return response.data.error.message

		return `${error.message}`
	}

	protected get<T = unknown>(
		url: string,
		params: Record<string, any> = {},
		config: AxiosRequestConfig = {}
	): Promise<T> {
		return new Promise((resolve, reject) => {
			const _isParam = Object.keys(params).length > 0
			this.axios
				.get<T>(`${url}${_isParam ? `?${this.params(params)}` : ''}`, config)
				.then((res) => resolve(res.data))
				.catch((error) => {
					const message = this.getMessage(error)

					return reject({ message })
				})
		})
	}

	protected _download(url: string, params: Record<string, any> = {}, config: AxiosRequestConfig = {}): Promise<any> {
		return new Promise((resolve, reject) => {
			const _isParam = Object.keys(params).length > 0
			this.axios
				.get(`${url}${_isParam ? `?${this.params(params)}` : ''}`, config)
				.then((res) => resolve(res))
				.catch((error) => {
					const message = this.getMessage(error)

					return reject({ message })
				})
		})
	}

	protected post<T = unknown>(url: string, data: object = {}, config: AxiosRequestConfig = {}): Promise<any> {
		return new Promise((resolve, reject) => {
			this.axios
				.post<T>(url, data, config)
				.then((res) => resolve(res.data))
				.catch((error) => {
					const message = this.getMessage(error)
					let data = error?.response?.data || {}
					data = data?.error || data || {}
					return reject({ message, ...data })
				})
		})
	}

	protected update<T = unknown>(url: string, data: object = {}, config: AxiosRequestConfig = {}): Promise<any> {
		return new Promise((resolve, reject) => {
			this.axios
				.patch<T>(url, data, config)
				.then((res) => resolve(res.data))
				.catch((error) => {
					const message = this.getMessage(error)

					return reject({ message })
				})
		})
	}

	protected delete<T>(url: string, config: AxiosRequestConfig = {}, data: object = {}): Promise<any> {
		return new Promise((resolve, reject) => {
			this.axios
				.delete<T>(url, {
					...(config && config),
					data,
				})
				.then((res) => resolve(res.data))
				.catch((error) => {
					const message = this.getMessage(error)
					return reject({ message })
				})
		})
	}

	protected cancelToken = axios.CancelToken.source()

	protected cancelRequest(message: string) {
		this.cancelToken.cancel(message)
	}
}

export default Base
