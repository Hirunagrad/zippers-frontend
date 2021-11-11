import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import ErrorMessage from "../../components/errorMessage";
import Loading from "../../components/loading";
import MainScreen from "../../components/MainScreen";
import "./loginScreen.css";
import { login } from "../../actions/userActions";

const LoginScreen = ({ history }) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  //const [error, seterror] = useState(false);
  //const [loading, setloading] = useState(false);

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push("/mynotes");
    }
  }, [history, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();

    dispatch(login(email, password));
    /*try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      setloading(true);
      const { data } = await axios.post(
        "https://noteapps.herokuapp.com/api/userms/login",
        {
          email,
          password,
        },
        config
      );
      console.log(data);
      localStorage.setItem("userInfo", JSON.stringify(data));
      setloading(false);
    } catch (error) {
      seterror(error.response.data.message);
      setloading(false);
    } */
  };

  return (
    <div>
      <MainScreen tittle="">
        <Container className="mar">
          <div className="frms">
            {loading && <Loading />}
            <Form onSubmit={submitHandler}>
              <h1>Login</h1>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                />
              </Form.Group>
              {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
            <br />
            <Row>
              <Col>
                dont have an Account ? <Link to="/register">Register here</Link>
              </Col>
            </Row>
            <br />
            <br />
            <br />
            <br />
          </div>
        </Container>
      </MainScreen>
    </div>
  );
};

export default LoginScreen;
