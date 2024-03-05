class BaseStorage<T> {
	protected memory: Map<string, T | T[]>

	constructor() {
		this.memory = new Map<string, T[]>()
	}

	protected get(key: string): T | T[] | undefined {
		return this.memory.get(key)
	}

	protected set(key: string, value: T | T[]): void {
		this.memory.set(key, value)
	}

	protected has(key: string): boolean {
		return this.memory.has(key)
	}

	protected clear(): void {
		this.memory.clear()
	}

	protected delete(key: string): boolean {
		return this.memory.delete(key)
	}
}

export default BaseStorage
