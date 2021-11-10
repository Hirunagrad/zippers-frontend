import { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/footers";
import Navbar from "./components/Header/header";
import CreateNote from "./pages/CreateNote/CreateNote";
import SingleNote from "./pages/CreateNote/SingleNote";
import loginScreen from "./pages/loginscreen/loginScreen";
import Landingpage from "./pages/mainpage/landingpage";
import Mynotes from "./pages/mynotes/mynotes";
import ProfileScreen from "./pages/profile/profileScreen";

import {
  RegisterScreen,
  registerScreen,
} from "./pages/registerscreen/registerScreen";

function App() {
  const [search, setSearch] = useState("");

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar setSearch={setSearch} />
        <Route path="/" component={Landingpage} exact />
        <Route path="/mynotes" component={Mynotes} search={search} />
        <Route path="/login" component={loginScreen} />
        <Route path="/createnote" component={CreateNote} />
        <Route path="/note/:id" component={SingleNote} />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/profile" component={ProfileScreen} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
