import test from 'ava';

const blockLetProductId = () => {
  let productId = 12;
  {
    let productId = 2000;
  }
  return productId;
}

const blockVarProductId = () => {
  {
    let productId = 2000;
  }
  return productId;
}

test('returns productId defined in it\'s current scope', t => {
  t.is(blockLetProductId(), 12);
});

test('returns undefined due to block scoping', t => {
  const error = t.throws(() => {
    blockVarProductId();
  }, ReferenceError);
  t.is(error.message, 'productId is not defined');
});
