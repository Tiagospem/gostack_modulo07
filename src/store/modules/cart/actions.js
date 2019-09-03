export function addToCart(product) {
  return {
    type: '@cart/add',
    product,
  }
}

export function removeFromCart(id){
  return {
    type: '@cart/remove',
    id
  }
}
