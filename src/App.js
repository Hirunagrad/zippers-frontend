import "./App.css";
import Footer from "./components/Footers/footers";
import Navbar from "./components/Header/header";
import Landingpage from "./pages/mainpage/landingpage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landingpage />
      <Footer />
    </div>
  );
}

export default App;
