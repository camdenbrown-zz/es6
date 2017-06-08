import test from 'ava';

const letProductId = () => {
  return productId;
  let productId = 12;
}

const varProductId = () => {
  return productId;
  var productId = 12;
}

test('productId returns a reference error due to not using hoisting', t => {
  const error = t.throws(() => {
    letProductId();
  }, ReferenceError);
  t.is(error.message, 'productId is not defined');
});

test('productId will be defined', t => {
  t.is(varProductId(), undefined);
});
