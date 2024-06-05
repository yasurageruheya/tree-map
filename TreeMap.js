class TreeMap
{
	/**
	 *
	 * @param value {any}
	 * @param [parent] {TreeMap}
	 */
	constructor(value, parent)
	{
		this.value = value;
		this.children = new Map();
		this.parent = parent;
	}

	has(key) { return this.children.has(key); }
	get(key) { return this.children.get(key); }
	set(key, value) { this.children.set(key, new TreeMap(value, this)); }
	remove(key) { this.children.delete(key); }
}