import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/footers";
import Navbar from "./components/Header/header";
import Landingpage from "./pages/mainpage/landingpage";
import Mynotes from "./pages/mynotes/mynotes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Route path="/" component={Landingpage} exact />
        <Route path="/mynotes" component={Mynotes} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
