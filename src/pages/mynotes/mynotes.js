import React, { useEffect, useState } from "react";
import { Button, Card, Badge, Accordion } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import MainScreen from "../../components/MainScreen";
import "./mynotes.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { listNotes } from "../../actions/notesAction";
import Loading from "../../components/loading";
import ErrorMessage from "../../components/errorMessage";

const Mynotes = () => {
  const dispatch = useDispatch();

  const noteList = useSelector((state) => state.noteList);
  const { loading, notes, error } = noteList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
    }
  };

  // const [notes, setNotes] = useState([]);

  // const fetchNotes = async () => {
  //   const { data } = await axios.get("http://localhost:5000/api/notes");
  //   setNotes(data);
  // };
  const history = useHistory();

  useEffect(() => {
    //fetchNotes();
    dispatch(listNotes());
    if (!userInfo) {
      history.push("/");
    }
  }, [dispatch, history, userInfo]);

  return (
    <MainScreen tittle={`Welcome Back ${userInfo && userInfo.name}.....`}>
      <Link to="createnote">
        <Button variant="primary">Create New Note</Button>
      </Link>
      {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
      {loading && <Loading />}
      {notes?.map((note) => (
        <Accordion className="actcls">
          <Accordion.Item eventKey="0">
            <Card style={{ marginTop: "10px" }}>
              <Card.Header style={{ display: "flex" }}>
                <span
                  style={{
                    color: "black",
                    textDecoration: "none",
                    flex: 1,
                    cursor: "pointer",
                    alignSelf: "center",
                    fontSize: "18px",
                  }}
                  className="spnss"
                >
                  <Accordion.Header eventKey="0">
                    {note.tittle}
                  </Accordion.Header>
                </span>

                <div>
                  <Button variant="primary" href={`./note/${note._id}`}>
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    className="mx-2"
                    onClick={() => deleteHandler(note._id)}
                  >
                    Delete
                  </Button>
                </div>
              </Card.Header>
              <Accordion.Body>
                <Card.Body>
                  <h4>
                    <Badge bg="success">Category - {note.category}</Badge>
                  </h4>
                  <blockquote className="blockquote mb-0">
                    <p>{note.content}</p>
                    <footer className="blockquote-footer">
                      {note.title}{" "}
                      <cite title="Source Title">
                        {note.createdAt.substring(0, 10)}
                      </cite>
                    </footer>
                  </blockquote>
                </Card.Body>
              </Accordion.Body>
            </Card>
          </Accordion.Item>
        </Accordion>
      ))}
    </MainScreen>
  );
};

export default Mynotes;
