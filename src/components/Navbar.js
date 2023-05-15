import React, { useContext, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { DeleteContext } from "./context/ContextProvider";
import Alert from "react-bootstrap/Alert";

function Navbar() {
  const [show, setShow] = useState(true);

  const { dlttask, setDlettask } = useContext(DeleteContext);
  console.log(dlttask);
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ background: "#7b00fa" }}>
          <Toolbar>
            <Typography
              variant="h4"
              component="div"
              sx={{ flexGrow: 1 }}
              style={{ textAlign: "center" }}
            >
              TO-DO App
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      {dlttask ? (
        <Alert
          variant="danger"
          onClose={() => setDlettask(false)}
          dismissible
          className="text-center"
        >
          <Alert.Heading>Your Todo Remove Succesfully</Alert.Heading>
        </Alert>
      ) : (
        ""
      )}
    </>
  );
}

export default Navbar;
