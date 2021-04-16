import React, { useState } from "react";
import hat from "./upsideDownHat.png";
import "./Form.css";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const style = { justifyContent: "center" };

const Form = () => {
  const [name, setName] = useState("");
  const [chosenOne, setChosenOne] = useState("");
  const [list, setList] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onDraw = () => {
    if (list && list.length > 2) {
      setChosenOne(list[Math.floor(Math.random() * list.length)]);
      setTitle("THE HAT HAS DECIDED");
      handleClickOpen();
      setList([]);
    } else if (list && list.length === 2) {
      setTitle("Why don't you flip a coin?");
      handleClickOpen();
    } else {
      setChosenOne("We need some names in the hat first!");
      setTitle("HOW DARE YOU!");
      handleClickOpen();
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (list.includes(name)) {
          setTitle("Check your list");
          setChosenOne(name + " is already in the hat");
          handleClickOpen();
        } else {
          setList(list.concat(name));
          setName("");
        }
      }}
    >
      <div className="col-container">
        <div className="col-75">
          <input
            type="name"
            value={name}
            placeholder="Put that name in this hat  "
            onChange={(e) => setName(e.currentTarget.value)}
          />
        </div>
        <div className="col-75">
          <input type="submit"></input>
          <button type="reset" onClick={() => setList([])}>
            CLEAR
          </button>
        </div>
      </div>
      <div>
        <ul className="List-container">
          {list.map((name) => (
            <li key={name}>
              <button
                className="name"
                onClick={() => setList(list.filter((n) => n !== name))}
              >
                <span>{name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="Hat-box">
        <div className="Hat-box-inner">
          {<img src={hat} className="Hat" alt="logo" onClick={onDraw} />}
        </div>
      </div>

      <div>
        {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          Open alert dialog
        </Button> */}
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
          <DialogContent style={style}>
            <DialogContentText id="alert-dialog-description">
              {chosenOne}
            </DialogContentText>
          </DialogContent>
          <DialogActions style={style}>
            <Button onClick={handleClose} color="primary" autoFocus>
              DO IT AGAIN!
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </form>
  );
};

export default Form;
