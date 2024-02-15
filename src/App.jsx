import Chart from "./components/Chart/Chart";
import GraphAndList from "./components/GraphAndList/GraphAndList";
import Header from "./components/Header/Header";
import Sales from "./components/Sales/Sales";
import SalesThree from "./components/Sales/SalesThree";
import SalesTwo from "./components/Sales/SalesTwo";
import SideBar from "./components/SideBar/SideBar";
import AvgSales from "./components/Total/AvgSales";
import TotalSales from "./components/Total/TotalSales";
import TotalTransactionCount from "./components/Total/TotalTransactionCount";
import TotalValue from "./components/Total/TotalValue";

function App() {
  return (
    <div className="relative">
      <Header />
      <SideBar />
      <TotalValue num="71,028" unit="EGP" name="Total Value" precent="2%" />
      <TotalSales num="20,000" unit="m³" name="Total Sales" precent="50 m³" />
      <AvgSales num="20,000" unit="m³" name="Avg Sales" precent="50 m³" />
      <TotalTransactionCount
        num="1567"
        name={
          <>
            Total Transaction
            <br />
            Count
          </>
        }
        precent="20"
      />
      <GraphAndList />
      <Chart />
      <Sales />
      <SalesTwo />
      <SalesThree />
    </div>
  );
}

export default App;
