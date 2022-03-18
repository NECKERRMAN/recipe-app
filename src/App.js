import './App.css';
import Category from './components/Category';
import Pages from './pages/Pages';
import { BrowserRouter, Link } from 'react-router-dom';
import Search from './components/Search';
import styled from 'styled-components';
import { GiKnifeFork } from 'react-icons/gi';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Nav>
            <GiKnifeFork />
            <Logo to={'/'}> Deliciousss</Logo>
          </Nav>
        <Search />
        <Category />
        <Pages />
        </BrowserRouter>
      </div>
      <Footer />
    </>

  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 500;
  font-family: 'Lobster Two', cursive;
  margin-left: 2rem;
`;

const Nav = styled.div`
  padding: 4rem 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg{
    font-size: 2rem; 
  }

`

export default App;
