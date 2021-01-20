import React, { useState, useContext } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import ClipLoader from "react-spinners/ClipLoader";
import { HeartContext } from "../libs/HeartContext";
import "./homePage.css";

function Login() {
  const { setIsLogin, loading, setLoading } = useContext(HeartContext);
  const [modalLogIn, setModalLogIn] = useState(false);
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

    
    
  const openModalLogIn = () => setModalLogIn(true);

  const handleClose = () => setModalLogIn(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    //   const response = await axios.post(
    //     "http://localhost:5000/api/user/login",
    //     {
    //       email: email,
    //       password: password,
    //     }
    //   );

    //   const logIn = await axios.post(
    //     "http://localhost:5000/api/user/login",
    //     {
    //       email: email,
    //       password: password,
    //     }
    //   );
    //   if (logIn.status === 200) {
    //     localStorage.setItem("token", response.data);
    //   }
      setModalLogIn(false);
      setIsLogin(true)
    //   history.push("/");
    //   const reload = window.location.reload();
  };

  return (
    <>
      <Button
        className="modal-button btn btn-secondary my-2 my-sm-0 mx-3"
        type="button"
        onClick={openModalLogIn}
      >
        {" "}
        Log In{" "}
      </Button>
      {/* <ClipLoader loading={loading} /> */}
      <Modal show={modalLogIn} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Log In</Modal.Title>
          <Button variant="light" onClick={handleClose} type="button">
            x
          </Button>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                required
                onChange={(event) => setEmail(event.target.value)}
              />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                required
                onChange={(event) => setPassword(event.target.value)}
              />
            </Form.Group>
            <Button
              onClick={handleSubmit}
              className="button-log-sign"
              type="submit"
            >
              Log In{" "}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Login;
