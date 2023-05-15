import React, { useState } from "react";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Todo } from "./Todo";
import { addNewTodo } from "../redux/actions";
import { useDispatch } from "react-redux";

function Home() {
  const dispatch = useDispatch();
  const [data, setData] = useState("");
  console.log(data);

  const submitData = () => {
    dispatch(addNewTodo(data));
    setData("");
  };
  return (
    <>
      <div className="container">
        <section className="mt-3 text-center">
          <h3
            className="mb-5 mt-5 shadow p-3"
            style={{ background: "#9b00fa", color: "white" }}
          >
            What's the plan for today ?
          </h3>
          <div className="todo col-lg-5 mx-auto d-flex justify-content-between align-item-center">
            <input
              name="task"
              value={data}
              onChange={(e) => setData(e.target.value)}
              className="form-control shadow-sm p-3 "
              required
            />
            <Button
              variant="contained"
              onClick={() => submitData()}
              className="mx-2 "
              style={{ background: "#fa0087" }}
            >
              <AddIcon />
            </Button>
          </div>
          <Todo />
        </section>
      </div>
    </>
  );
}

export default Home;
