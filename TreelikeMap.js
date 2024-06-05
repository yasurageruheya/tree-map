class TreelikeMap
{
	/**
	 *
	 * @param [value] {any}
	 * @param [parent] {TreelikeMap}
	 */
	constructor(value="", parent)
	{
		/** @type {any} */
		this.value = value;
		/** @type {Map<TreelikeMap>} */
		this.children = new Map();
		/** @type {TreelikeMap} */
		this.parent = parent;
	}

	has(key) { return this.children.has(key); }
	get(key) { return this.children.get(key); }
	set(key, value) { this.children.set(key, new TreelikeMap(value, this)); }
	remove(key) { this.children.delete(key); }
	get size() { return this.children.size; }
}

module.exports = TreelikeMap;