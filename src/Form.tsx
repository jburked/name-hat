import React, { useState, useEffect } from "react";
import { FixedSizeList, ListChildComponentProps } from "react-window";
import Cookie from "universal-cookie";
import hat from "./sunhat.png";
import "./Form.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import HelpIcon from "@material-ui/icons/Help";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";

const style = { justifyContent: "center" };

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  image: {
    backgroundImage: "url(./springBG.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  butts: {
    margin: theme.spacing(3, 0, 2),
  },
  specialbutt: {
    marginTop: "100%",
  },
  buttHolder: {
    margin: theme.spacing(0, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const Form = () => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [chosenOne, setChosenOne] = useState("");
  const [list, setList] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
  const [openTwo, setOpenTwo] = useState(false);
  const [openThree, setOpenThree] = useState(false);
  const [title, setTitle] = useState("");
  const [buttonWords, setButtonWords] = useState("");

  useEffect(() => {
    const cookies = new Cookie();
    if (cookies.get("toolTip") === "no") {
      setOpenThree(false);
    } else {
      cookies.set("toolTip", "no", { path: "/" });
      setOpenThree(true);
    }
  }, []);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseTwo = () => {
    setOpenTwo(false);
  };
  const handleCloseThree = () => {
    setOpenThree(false);
  };
  const onDraw = () => {
    if (list && list.length >= 2) {
      setChosenOne(list[Math.floor(Math.random() * list.length)]);
      setTitle("THE HAT HAS DECIDED");
      setButtonWords("DO IT AGAIN!");
      handleClickOpen();
      setList([]);
    } else {
      setChosenOne("Hat can't pick from nothing");
      setTitle("...");
      setButtonWords("We all make mistakes.");
      handleClickOpen();
    }
  };

  const showHatContents = () => {
    if (list.length > 0) {
      return (
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <h4>What's in the hat?</h4>
          <List className={classes.root}>
            {list.map((name) => (
              <li key={name}>
                <ul>
                  <ListItem>
                    <ListItemText primary={name} />
                  </ListItem>
                </ul>
              </li>
            ))}
          </List>
        </Grid>
      );
    }
  };

  return (
    <div>
      <Grid container component="main" style={{ flexWrap: "nowrap" }}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image}>
          <div className="Hat-box">
            <div className="Hat-box-inner">
              {<img src={hat} className="Hat" alt="logo" onClick={onDraw} />}
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <form
              className={classes.form}
              noValidate
              onSubmit={(e) => {
                e.preventDefault();
                if (list.includes(name)) {
                  setTitle("Check your list");
                  setChosenOne(name + " is already in the hat");
                  setButtonWords("We all make mistakes.");
                  handleClickOpen();
                  setName("");
                } else if (!name) {
                  setTitle("Whoa whoa whoa");
                  setChosenOne("You can't put nothing in this hat.");
                  setButtonWords("We all make mistakes.");
                  handleClickOpen();
                } else {
                  setList(list.concat(name));
                  setName("");
                }
                e.currentTarget.autofocus = true;
              }}
            >
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="name"
                autoFocus
                type="name"
                className="inputText"
                value={name}
                placeholder="Hat knows best "
                onChange={(e) => {
                  setName(e.currentTarget.value);
                }}
              />
              <div className={classes.buttHolder}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.butts}
                >
                  Put it in that hat!
                </Button>

                <Button
                  type="reset"
                  fullWidth
                  variant="contained"
                  color="secondary"
                  className={classes.butts}
                  onClick={() => setList([])}
                >
                  Empty that hat!
                </Button>

                <Button
                  type="button"
                  fullWidth
                  variant="contained"
                  className={classes.specialbutt}
                  onClick={() => setOpenThree(true)}
                >
                  <HelpIcon />
                </Button>
              </div>
            </form>
          </div>
        </Grid>
        {showHatContents()}
      </Grid>

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
              {buttonWords}
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={openTwo}
          onClose={handleCloseTwo}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
          <DialogContent style={style}>
            <DialogContentText id="alert-dialog-description">
              {chosenOne}
            </DialogContentText>
            <div id="coin">
              <div className="side-a"></div>
              <div className="side-b"></div>
            </div>
            <h1>Click on coin to flip</h1>
          </DialogContent>
          <DialogActions style={style}>
            <Button onClick={handleCloseTwo} color="primary" autoFocus>
              {buttonWords}
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <div>
        <Dialog
          open={openThree}
          onClose={handleCloseThree}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Welcome to Picky Hat!"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <div>
                Here is how Picky Hat works:
                <ul>
                  <li>
                    Add some things to Picky Hat. Names, restaurants, games,
                    etc...
                  </li>
                  <li>Hover over Picky Hat to shake it up.</li>
                  <li>
                    Click Picky Hat and it will pick the{" "}
                    <span
                      style={{
                        textDecoration: "underline",
                        fontStyle: "italic",
                      }}
                    >
                      very best
                    </span>{" "}
                    choice
                  </li>
                  <li>"Empty the Hat" to clear the hats contents.</li>
                  <li>
                    To remove an item individually, simply click on that item.
                  </li>
                </ul>
              </div>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseThree} color="primary" autoFocus>
              Got it!
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default Form;
