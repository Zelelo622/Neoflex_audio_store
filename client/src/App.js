import "./assets/styles/App.css";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="container-page">
        <Header />
        <main>
          <AppRouter />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
