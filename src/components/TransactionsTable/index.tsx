import { ReactNode } from 'react';

import { Container } from './styles';



function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> Desenvolvimento de website </td>
            <td> R$ 12.000,00 </td>
            <td> Venda </td>
            <td> 12/04/2021 </td>
          </tr> 
          <tr>
            <td> Hamburger </td>
            <td> -R$ 19.00 </td>
            <td> Alimentação </td>
            <td> 10/04/2021 </td>
          </tr>
        </tbody> 
      </table>

    </Container>
  );
};

export default TransactionsTable;
