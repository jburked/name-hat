import React, { useState, useEffect } from "react";
import Cookie from "universal-cookie";
// import hat from "./sunhat.png";
import "./Form.css";
import { useAtom } from "jotai";
import { itemListAtom } from "./Atoms";
import { getBGFromSeason, getHatFromSeason, pObject } from "./types";

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
import List from "@material-ui/core/List";
import Switch from "@material-ui/core/Switch";
import { ListItemSecondaryAction } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { red } from "@material-ui/core/colors";
import { setTimeout } from "timers";

const style = { justifyContent: "center" };
const coinStyle = { justifyContent: "center", padding: 25 };
const backgroundImage = getBGFromSeason();
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
    backgroundImage: backgroundImage,
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
const hat = getHatFromSeason();
const Form = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [coinOpen, setCoinOpen] = useState(false);
  const [openThree, setOpenThree] = useState(false);
  const [name, setName] = useState("");
  const [list, setList] = useAtom(itemListAtom);
  const [pops, setPops] = useState<pObject>();

  useEffect(() => {
    const cookies = new Cookie();
    if (cookies.get("toolTip") === "no") {
      setOpenThree(false);
    } else {
      cookies.set("toolTip", "no", { path: "/" });
      setOpenThree(true);
    }
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const handleCoinClose = () => {
    setCoinOpen(false);
  };

  const handleCloseThree = () => {
    setOpenThree(false);
  };

  const onDraw = () => {
    const tempList = list.filter((ites) => ites.inTheMix !== false);

    if (tempList && tempList.length > 2) {
      console.log("Picking from this list : ", tempList);
      setPops({
        displayTitle: "THE HAT HAS DECIDED",
        displayButtonText: "DO IT AGAIN!",
        displayChosenItem:
          tempList[Math.floor(Math.random() * tempList.length)].value,
      });
      setOpen(true);
    } else if (tempList && tempList.length === 2) {
      setCoinOpen(true);
    } else {
      setPops({
        displayTitle: "Hat needs more",
        displayButtonText: "We all make mistakes.",
        displayChosenItem: "...",
      });
      setOpen(true);
    }
  };

  const [checked, setChecked] = React.useState([1]);

  const handleToggle = (value: number) => () => {
    setList(() =>
      list.map((item, indx) =>
        value === indx ? { ...item, inTheMix: !item.inTheMix } : item
      )
    );

    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const showHatContents = () => {
    if (
      (list.length === 0 && localStorage.length > 0) ||
      localStorage.length > list.length
    ) {
      setList(() => JSON.parse(localStorage.getItem("list")!));
    }
    if (list.length >= 1) {
      return (
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <h4>What's in the hat?</h4>
          <List className={classes.root}>
            {list.map((i, index) => (
              <ListItem key={`${i.value}-${index}`}>
                <ListItemText
                  id={`${i.value}-${index}-text`}
                  primary={i.value}
                />
                <ListItemSecondaryAction>
                  <Switch
                    edge="end"
                    onChange={handleToggle(index)}
                    checked={i.inTheMix}
                    color="primary"
                    inputProps={{
                      "aria-labelledby": `switch-list-label-${i.value}`,
                    }}
                  />
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => {
                      if (list.length === 1) {
                        localStorage.clear();
                        setList([]);
                      } else {
                        localStorage.setItem(
                          "list",
                          JSON.stringify(
                            list.filter((aye) => aye.value !== i.value)
                          )
                        );
                        const deleteList = list.filter(
                          (aye) => aye.value !== i.value
                        );
                        setList(deleteList);
                      }
                    }}
                  >
                    <DeleteIcon style={{ color: red[500] }} />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </Grid>
      );
    }
  };

  const [coinDivClass, setCoinDivClass] = useState("");

  return (
    <div>
      <Grid container component="main" style={{ flexWrap: "nowrap" }}>
        <CssBaseline />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <form
              className={classes.form}
              noValidate
              onSubmit={(e) => {
                e.preventDefault();
                if (
                  list.some(
                    (el) => el.value.toLowerCase() === name.toLowerCase()
                  )
                ) {
                  setPops({
                    displayTitle: "Check your list",
                    displayButtonText: "We all make mistakes.",
                    displayChosenItem: name + " is already in the hat",
                  });
                  setOpen(true);
                } else if (name === "" || !name.replace(/\s/g, "").length) {
                  setPops({
                    displayTitle: "Whoa whoa whoa",
                    displayButtonText: "We all make mistakes.",
                    displayChosenItem: "Please, enter some text.",
                  });
                  setOpen(true);
                } else {
                  const t = [...list, { value: name, inTheMix: true }];
                  localStorage.setItem("list", JSON.stringify(t));
                  setList(t);
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
                placeholder="Type words and stuff here "
                onChange={(e) => setName(e.currentTarget.value)}
              />
              <div className={classes.buttHolder}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.butts}
                >
                  Throw it in!
                </Button>

                <Button
                  type="reset"
                  fullWidth
                  variant="contained"
                  color="secondary"
                  className={classes.butts}
                  onClick={() => {
                    localStorage.clear();
                    setList([]);
                  }}
                >
                  Dump it out!
                </Button>

                <Button
                  type="button"
                  fullWidth
                  variant="contained"
                  className={classes.specialbutt}
                  onClick={() => setOpenThree(true)}
                >
                  Lost?
                </Button>
              </div>
            </form>
          </div>
        </Grid>
        <Grid item xs={false} sm={4} md={7} className={classes.image}>
          <div className="Hat-box">
            <div className="Hat-box-inner">
              {
                <img
                  src={hat}
                  className={hat === "./winterHat.png" ? "Winter-hat" : "Hat"}
                  alt="logo"
                  onClick={() => onDraw()}
                />
              }
            </div>
          </div>
        </Grid>
        {showHatContents()}
      </Grid>
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {pops && pops.displayTitle}
          </DialogTitle>
          <DialogContent style={style}>
            <DialogContentText id="alert-dialog-description">
              {pops && pops.displayChosenItem}
            </DialogContentText>
          </DialogContent>
          <DialogActions style={style}>
            <Button onClick={handleClose} color="primary" autoFocus>
              {pops && pops.displayButtonText}
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
            <DialogContentText
              id="alert-dialog-description"
              color="textPrimary"
            >
              <div>
                Here is how Picky Hat works:
                <ul>
                  <li>
                    Add some things to Picky Hat. Names, restaurants, games,
                    etc...
                  </li>
                  <li>
                    Toggle switch to remove/add items you want to be picked.
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
        <div>
          <Dialog
            open={coinOpen}
            onClose={handleCoinClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              HAT HAS DECIDED...
            </DialogTitle>
            <DialogContent style={coinStyle}>
              <DialogContentText id="alert-dialog-description">
                ...you should flip a coin instead.
              </DialogContentText>

              <div
                id="coin"
                className={coinDivClass}
                onClick={(e) => {
                  e.preventDefault();
                  var flipResult = Math.random();
                  setTimeout(() => {
                    if (flipResult <= 0.5) {
                      setCoinDivClass("heads");
                    } else {
                      setCoinDivClass("tails");
                    }
                  }, 50);
                }}
              >
                <div className="side-a"></div>
                <div className="side-b"></div>
              </div>
            </DialogContent>
            <DialogActions style={style}>
              <Button onClick={handleCoinClose} color="primary" autoFocus>
                Enough of this.
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default Form;
