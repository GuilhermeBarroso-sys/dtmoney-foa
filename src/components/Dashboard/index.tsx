import Sumary from "../Sumary";
import TransactionsTable from "../TransactionsTable";

import { Container } from "./styles";

function Dashboard() {
  return (
    <Container>
      <Sumary />
      <TransactionsTable />
    </Container>
  );
}

export default Dashboard;
