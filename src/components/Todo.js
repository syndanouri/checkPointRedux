import React, { useContext } from "react";
import { useState } from "react";

import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import DoneIcon from "@mui/icons-material/Done";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { removeTodo, updateTodo } from "../redux/actions";
import { DeleteContext } from "./context/ContextProvider";
import { useDispatch, useSelector } from "react-redux";

export const Todo = () => {
  const dispatch = useDispatch();
  // show modal state
  const [showEye, setShowEye] = useState(false);
  const [show, setShow] = useState(false);
  const [todos, setTodos] = useState([]);

  // setValue state
  const [showEyeValue, setShowEyeValue] = useState("");

  const [update, setUpdate] = useState("");

  const [ind, setInd] = useState("");
  const handleClosed = () => setShow(false);
  const handleClose = () => setShowEye(false);
  const handleShow = (ele) => {
    setShow(true);
    setUpdate(ele);
  };
  //const handleShow = () => setShow(true);
  const { User_data } = useSelector((state) => state.todoReducers);
  console.log(User_data);

  const { dlttask, setDlettask } = useContext(DeleteContext);

  // delete function
  const remove = (id) => {
    dispatch(removeTodo(id));
    setDlettask(true);
  };

  // update function
  const usertask_update = () => {
    dispatch(updateTodo(update, ind));
    handleClosed();
  };

  return (
    <>
      <div className="todo_data col-lg-5 mx-auto mt-3">
        {User_data.map((element, index) => {
          return (
            <>
              <div
                className="todo_container shadow-sm p-3 mb-2 rounded d-flex justify-content-between align-items-center"
                key={index}
                style={{ background: "#dcdde1", boxShadow: "" }}
              >
                <li style={{ listStyle: "none" }}>{element}</li>
                <div className="edit_dlt col-lg-3 py-2 d-flex justify-content-between align-items-center">
                  <ModeEditIcon
                    style={{ color: "#3c40c6", cursor: "pointer" }}
                    onClick={() => {
                      handleShow(element);
                      setInd(index);
                    }}
                  />
                  <DeleteIcon
                    style={{ color: "red", cursor: "pointer" }}
                    onClick={() => remove(index)}
                  />
                  <RemoveRedEyeIcon
                    onClick={() => {
                      setShowEye(true);
                      setShowEyeValue(element);
                    }}
                    style={{ color: "#1dd1a1", cursor: "pointer" }}
                  />
                  <DoneIcon style={{ color: "#a7a7a7", cursor: "pointer" }} />
                </div>
              </div>
            </>
          );
        })}

        <Modal show={showEye}>
          <h3 className="text-center p-3">{showEyeValue}</h3>

          <Modal.Footer style={{ textAlign: "center" }}>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Update Modal */}
        <Modal show={show} onHide={handleClosed}>
          <h3 className="text-center mt-2">Update Todo</h3>
          <Modal.Header>
            <div className="todo col-lg-5 mx-auto d-flex justify-content-between align-item-center">
              <input
                name="task"
                value={update}
                onChange={(e) => setUpdate(e.target.value)}
                className="form-control shadow-sm p-3  "
              />
            </div>
          </Modal.Header>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClosed}>
              Close
            </Button>
            <Button variant="primary" onClick={() => usertask_update()}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};
