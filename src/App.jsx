import "./App.css";
import Cards from "./components/Cards/Cards";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main className="my-4">
        <Cards></Cards>
      </main>
    </>
  );
}

export default App;
