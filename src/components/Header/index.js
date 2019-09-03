import React from 'react';
import {Link} from 'react-router-dom';
import {MdShoppingBasket} from 'react-icons/md';
import {Container, Cart} from './styles';
import Logo from '../../assets/images/logo.svg';


function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={Logo} alt="Rocketshoes" />
      </Link>
      <Cart to="/">
        <div>
          <strong>Meu Carrinho</strong>
          <span>3 itens</span>
        </div>
        <MdShoppingBasket size={36} color="#fff" />
      </Cart>
    </Container>
  );
}

export default Header;
