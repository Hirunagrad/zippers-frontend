import React, { useEffect, useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import MainScreen from "../../components/MainScreen";
import { Link } from "react-router-dom";
import ErrorMessage from "../../components/errorMessage";
import axios from "axios";
import Loading from "../../components/loading";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../actions/userActions";

export const RegisterScreen = ({ history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [pic, setPic] = useState(
    "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
  );
  const [message, setMessage] = useState(null);
  const [picMessage, setPicMessage] = useState(null);
  //const [loading, setLoading] = useState(false);
  //const [error, setError] = useState(false);

  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      history.push("/mynotes");
    }
  }, [history, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("password do not match");
    } else {
      dispatch(register(name, email, password, pic));
    }

    // if (password !== confirmPassword) {
    //   setMessage("password Do not Match");
    // } else {
    //   setMessage(null);
    //   try {
    //     const config = {
    //       headers: { "Content-type": "application/json" },
    //     };

    //     setLoading(true);

    //     const { data } = await axios.post(
    //       "https://noteapps.herokuapp.com/api/userms/",
    //       { name, pic, email, password },
    //       config
    //     );

    //     setLoading(false);
    //     localStorage.setItem("userInfo", JSON.stringify(data));
    //     setError(null);
    //   } catch (error) {
    //     setError(error.response.data.message);
    //     setLoading(false);
    //   }
    // }

    // console.log(email);
  };

  const postDetails = (pics) => {
    if (!pics) {
      return setPicMessage("please select the Image");
    }
    setPicMessage(null);
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "notezipper");
      data.append("cloud_name", "hirunagrad");
      fetch("https://api.cloudinary.com/v1_1/hirunagrad/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data.url);
          setPic(data.url.toString());
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return setPicMessage("please select an Image");
    }
  };

  return (
    <div>
      <MainScreen>
        <h2>Sign Up</h2>
        <div className="loginContainer">
          <Form onSubmit={submitHandler}>
            {loading && <Loading />}
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter name"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="confirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setconfirmPassword(e.target.value)}
              />
            </Form.Group>
            <br />

            <Form.Group controlId="pic" className="mb-3">
              <Form.Label>Default file input example</Form.Label>
              <Form.Control
                onChange={(e) => postDetails(e.target.files[0])}
                type="file"
                label="Upload Profile Picture"
                custom
              />
            </Form.Group>

            {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
            {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
            {picMessage && (
              <ErrorMessage variant="danger">{picMessage}</ErrorMessage>
            )}

            <Button variant="primary" type="submit">
              Register
            </Button>
          </Form>
          <Row className="py-3">
            <Col>
              Have an Account ? <Link to="/login">Login</Link>
            </Col>
          </Row>
        </div>
      </MainScreen>
    </div>
  );
};
