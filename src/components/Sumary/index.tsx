import Income from  '../../assets/income.svg'
import OutCome from  '../../assets/outcome.svg'
import Total from  '../../assets/total.svg';
import { Container } from './styles';




function Sumary() {
  return (
    <Container>
    <div>
      <header>
        <p>Entradas</p>
        <img src={Income} alt="Entradas" />
      </header>
      <strong>R$ 17.400,00</strong>
    </div>

    <div>
      <header>
        <p>Saídas</p>
        <img src={OutCome} alt="Saidas" />
      </header>
      <strong>R$ 17.400,00</strong>
    </div>

    <div className = "highlight-background">
      <header>
        <p>Total</p>
        <img src={Total} alt="Total" />
      </header>
      <strong>R$ 17.400,00</strong>
    </div>
    </Container>
  );
};

export default Sumary;
