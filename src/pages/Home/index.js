import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {MdAddShoppingCart} from 'react-icons/md';
import * as CartActions from '../../store/modules/cart/actions';
import {ProductList} from './styles';
import api from '../../services/api';
import { formatPrice } from '../../util/format'

function Index() {

  const amount = useSelector(state => state.cart.reduce((am, product) => {
    am[product.id] = product.amount;
    return am;
  }, {}));

  const hookDispach = useDispatch();

  const [products, setProducts] = useState([]);

  // executa uma unica vez qd o componente for montado
  useEffect(() => {
    async function loadProducts(){
      const response = await api.get('products');
      const data = response.data.map(product => ({
        ...product,
        priceFormated: formatPrice(product.price)
      }));
      setProducts(data);
    }
    loadProducts();
  }, []);

  function handleAddProduct(id) {
    hookDispach(CartActions.addToCartRequest(id));
  }
  return (
    <ProductList>
      {products.map(product => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.priceFormated}</span>
          <button type="button" onClick={() => handleAddProduct(product.id)}>
            <div>
              <MdAddShoppingCart size={16} color="#fff" />
              {' '}
              {amount[product.id] || 0}
            </div>
            <span>Adicionar ao Carrinho</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
}
export default Index;
