import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBarMy from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
    <NavBarMy/>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
