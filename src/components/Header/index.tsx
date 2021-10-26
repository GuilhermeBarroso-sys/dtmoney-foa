import LogoImg from '../../assets/logo.svg'
import { Container, Content } from './styles';


function Header() {
  return (
    <Container>
      <Content>
      <img src={LogoImg} alt="Logo da dtmoney" />
      <button type="button">
        Nova Transação
      </button>
      </Content>
    </Container>
 
  );
};

export default Header;
