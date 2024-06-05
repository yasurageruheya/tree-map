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

	/**
	 *
	 * @param key {any}
	 * @return {boolean}
	 */
	has(key) { return this.children.has(key); }

	/**
	 *
	 * @param key {any}
	 * @return {TreelikeMap}
	 */
	get(key) { return this.children.get(key); }

	/**
	 *
	 * @param key {any}
	 * @param value {any}
	 * @return {Map<TreelikeMap>}
	 */
	set(key, value) { return this.children.set(key, new TreelikeMap(value, this)); }

	/**
	 *
	 * @param key {any}
	 * @return {boolean}
	 */
	remove(key) { return this.children.delete(key); }

	/**
	 *
	 * @return {number}
	 */
	get size() { return this.children.size; }
}

module.exports = TreelikeMap;