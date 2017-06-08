import test from 'ava';

test('returns productId defined in it\'s current scope', t => {
  const blockLetProductId = () => {
    let productId = 12;
    {
      let productId = 2000;
    }
    return productId;
  }

  t.is(blockLetProductId(), 12);
});

test('returns undefined due to block scoping', t => {
  const blockVarProductId = () => {
    {
      let productId = 2000;
    }
    return productId;
  }

  const error = t.throws(() => {
    blockVarProductId();
  }, ReferenceError);
  t.is(error.message, 'productId is not defined');
});
