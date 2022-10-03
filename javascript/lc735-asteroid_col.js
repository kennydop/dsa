var asteroidCollision = function (asteroids) {
  if (asteroids.length < 2) return asteroids;
  var stack = [];
  const length = asteroids.length;
  for (let i = 0; i < length; i++) {
    var e = asteroids[i];
    while (stack.length > 0 && e < 0 && stack[stack.length - 1] > 0) {
      var colRes = stack[stack.length - 1] + e;
      if (colRes < 0) {
        stack.pop();
      } else if (colRes > 0) {
        e = 0;
      } else {
        stack.pop();
        e = 0;
      }
    }
    if (e !== 0) {
      stack.push(e);
    }
  }
  return stack;
};

console.log(asteroidCollision([5, 10, -5]));
