/**
 * Map filter
 */
export class FilteredMap {
  static get [Symbol.species]() {
    return Map;
  }

  /**
   *
   * @param {Map<any,any>[]} source
   * @param {boolean filter(<any>)} filter
   */
  constructor(source, filter) {
    this.source = source;
    this.filter = filter;
  }

  set(key, value) {
    if (this.filter(value)) {
      return this.source.set(key, value);
    }
  }

  *keys() {
    for (const key of this.source.keys()) {
      if (this.source.has(key)) {
        const item = this.source.get(key);

        if (this.filter(item)) {
          yield key;
        }
      }
    }
  }

  *values() {
    for (const value of this.source.values()) {
      if (this.filter(value)) {
        yield value;
      }
    }
  }

  *entries() {
    for (const entry of this.source.entries()) {
      if (this.filter(entry[1])) {
        yield entry;
      }
    }
  }

  *[Symbol.iterator]() {
    yield* this.entries();
  }

  get [Symbol.toStringTag]() {
    return this.source[Symbol.toStringTag];
  }

  forEach(callbackfn, thisArg) {
    for (const [key, value] of this.entries()) {
      callbackfn.call(thisArg, value, key, this);
    }
  }

  clear() {
    this.source.clear();
  }

  delete(key) {
    return this.get(key) !== undefined && this.source.delete(key);
  }

  has(key) {
    if (this.source.has(key)) {
      const item = this.source.get(key);

      if (this.filter(item)) {
        return true;
      }
    }

    return false;
  }

  get(key) {
    const item = this.source.get(key);

    if (item !== undefined && this.filter(item)) {
      return item;
    }
  }

  get size() {
    let n = 0;

    for (const value of this.values()) {
      if (this.filter(value)) {
        n++;
      }
    }
    return n;
  }
}
