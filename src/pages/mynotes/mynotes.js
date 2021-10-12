import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainScreen from "../../components/MainScreen";
import notes from "../Data/notes";
import "./mynotes.css";

const Mynotes = () => {
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
    }
  };

  return (
    <MainScreen tittle="Welcome Hiruna Gayashan">
      <Link to="createnote">
        <Button variant="primary">Create New Note</Button>
        {notes.map((note) => (
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
                {note.title}
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
          </Card>
        ))}
      </Link>
    </MainScreen>
  );
};

export default Mynotes;
