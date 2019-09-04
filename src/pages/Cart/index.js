import React from 'react';
import {MdRemoveCircleOutline, MdAddCircleOutline, MdDelete} from 'react-icons/md';
import {useDispatch, useSelector} from 'react-redux';
import * as CartActions from '../../store/modules/cart/actions';
import {Container, ProductTable, Total} from './styles';
import {formatPrice} from '../../util/format';

function Cart() {

  const total = useSelector(state => formatPrice(state.cart.reduce((t, product) => {
    return t + product.price * product.amount;
  }, 0)));

  const cart = useSelector(state => state.cart.map(product => ({
    ...product,
    subTotal: formatPrice(product.price * product.amount)
  })));

  const hookDispach = useDispatch();

  function increment(product){
    hookDispach(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product){
    hookDispach(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {cart.map(product =>(
            <tr key={String(product.id)}>
              <td>
                <img src={product.image} alt="" />
              </td>
              <td>
                <strong>{product.title}</strong>
                <span>{product.priceFormated}</span>
              </td>
              <td>
                <div>
                  <button type="button" onClick={() => decrement(product)}>
                    <MdRemoveCircleOutline size={20} color="#7159c1" />
                  </button>
                  <input type="number" readOnly value={product.amount} />
                  <button type="button" onClick={() => increment(product)}>
                    <MdAddCircleOutline size={20} color="#7159c1" />
                  </button>
                </div>
              </td>
              <td>
                <strong>{product.subTotal}</strong>
              </td>
              <td>
                <button type="button">
                  <MdDelete
                    size={20}
                    color="#7159c1"
                    onClick={() => hookDispach(CartActions.removeFromCart(product.id))}
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>
      <footer>
        <button type="button">Finalizar Pedido</button>
        <Total>
          <span>TOTAL</span>
          <strong>{total}</strong>
        </Total>
      </footer>
    </Container>
  );
}

export default Cart;
