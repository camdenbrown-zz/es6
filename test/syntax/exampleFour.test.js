import test from 'ava';

test('returns productId that is defined to its scope', t => {
  const countProductIds = () => {
    let productId = 42;
    for (let productId = 0; productId < 10; productId++){

    }
    return productId;
  }

  t.is(countProductIds(), 42);
});

test('returns the end of the loop due a closure being formed over "i" which will continue to update "i"', t => {
  let updateFunctions = [];
  for (var i = 0; i < 2; i++){
    updateFunctions.push(function () { return i; })
  }

  t.is(updateFunctions[0](), 2);
});

test('each iteration gets its own value of "i" to execute upon', t => {
  let updateFunctions = [];
  for (let i = 0; i < 2; i++){
    updateFunctions.push(function () { return i; })
  }

  t.is(updateFunctions[0](), 0);
});
