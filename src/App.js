import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/footers";
import Navbar from "./components/Header/header";
import CreateNote from "./pages/CreateNote/CreateNote";
import loginScreen from "./pages/loginscreen/loginScreen";
import Landingpage from "./pages/mainpage/landingpage";
import Mynotes from "./pages/mynotes/mynotes";
import {
  RegisterScreen,
  registerScreen,
} from "./pages/registerscreen/registerScreen";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Route path="/" component={Landingpage} exact />
        <Route path="/mynotes" component={Mynotes} />
        <Route path="/login" component={loginScreen} />
        <Route path="/createnote" component={CreateNote} />
        <Route path="/register" component={RegisterScreen} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
