class Base {
	private readonly api: string
	private readonly headers: HeadersInit

	constructor(api: string, headers: HeadersInit = {}) {
		this.api = api
		this.headers = headers
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

	private async getMessage(response: Response): Promise<string> {
		const data = await response.json()
		const conditionError = data && data.error
		const conditionWithMessage = data && data.message

		if (conditionWithMessage) return data.message
		if (conditionError) return data.error.message

		return `${response.statusText}`
	}

	protected async get<T = unknown>(
		url: string,
		params: Record<string, any> = {},
		headers: HeadersInit = {}
	): Promise<T> {
		const _isParam = Object.keys(params).length > 0
		const response = await fetch(`${this.api}${url}${_isParam ? `?${this.params(params)}` : ''}`, {
			headers: { ...this.headers, ...headers },
		})

		if (!response.ok) {
			throw new Error(await this.getMessage(response))
		}

		return response.json()
	}

	protected async post<T = unknown>(url: string, data: Record<string, any> = {}): Promise<T> {
		const response = await fetch(`${this.api}${url}`, {
			method: 'POST',
			headers: this.headers,
			body: JSON.stringify(data),
		})

		if (!response.ok) {
			throw new Error(await this.getMessage(response))
		}

		return response.json()
	}

	protected async update<T = unknown>(url: string, data: Record<string, any> = {}): Promise<T> {
		const response = await fetch(`${this.api}${url}`, {
			method: 'PATCH',
			headers: this.headers,
			body: JSON.stringify(data),
		})

		if (!response.ok) {
			throw new Error(await this.getMessage(response))
		}

		return response.json()
	}

	protected async delete<T = unknown>(url: string): Promise<T> {
		const response = await fetch(`${this.api}${url}`, {
			method: 'DELETE',
			headers: this.headers,
		})

		if (!response.ok) {
			throw new Error(await this.getMessage(response))
		}

		return response.json()
	}
}

export default Base
