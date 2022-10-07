class TimeMap {
  constructor() {
    this.map = {};
  }
  set(key, value, timestamp) {
    if (this.map[key] === undefined) {
      this.map[key] = [];
    }
    this.map[key].push([value, timestamp]);
  }
  get(key, timestamp) {
    const arr = this.map[key];
    var res = "";
    if (arr === undefined) return res;
    var i = 0,
      j = arr.length - 1;
    while (i <= j) {
      var mid = Math.floor((i + j) / 2);
      const arrts = arr[mid][1];
      if (arrts === timestamp) {
        res = arr[mid][0];
        i = j + 1;
      } else if (arrts > timestamp) {
        j = mid - 1;
      } else {
        res = arr[mid][0];
        i = mid + 1;
      }
    }
    return res;
  }
}

var zz = new TimeMap();
console.log(zz.set("foo", "bar", 1));
console.log(zz.get("foo", 1));
console.log(zz.get("foo", 3));
console.log(zz.set("foo", "bar2", 4));
console.log(zz.get("foo", 4));
console.log(zz.get("foo", 5));
