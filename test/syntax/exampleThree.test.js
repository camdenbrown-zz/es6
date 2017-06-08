import test from 'ava';

test('returns what has been compiled even though productId is set back to null', t => {
  function updateProductId(){
    productId = 12;
  }
  let productId = null;
  updateProductId();

  t.is(productId, 12);
});
