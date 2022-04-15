import React from 'react';
import './App.css';
import {Menu, Navbar,} from './index.js';
import data from './data.json';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
// import { saveAs } from 'file-saver'

function App() {

  // console.log(menu)
  const [menu, setMenu] = React.useState(data.map((x) => x));

  const [openAdd, setOpenAdd] = React.useState(false);
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState(0.0);
  const [description, setDescription] = React.useState("");
  const [url, setUrl] = React.useState("");
  const [render, setRender] = React.useState(false);

  const handleClickOpen_ADD = () => {
    // console.log(menu)
    setOpenAdd(true);
  };

  const handleClose_ADD = () => {
    setOpenAdd(false);
  };

  const handleFinish_ADD = () => {
    // if (name !== "" && price !== "" && description !== "" && url !== "") {
      setMenu(menu.concat({
          id: '' + (parseInt(menu[menu.length-1].id) + 1),
          title: name,
          description: description,
          price: price,
          url: url
      }));
      setOpenAdd(false);
    // }
  };

  const handleDelete = (itemId) => {
    setMenu(menu.filter(item => item.id !== itemId));
    setRender(!render);
  }

  return (
    <div className="App">
      <Navbar />
      <div className="App--title">
        <h1 className="App--titleText">Our Menu</h1>
        <button className="App--btn" data-testid="add-button" onClick={handleClickOpen_ADD}>Create</button>
        <Dialog open={openAdd} onClose={handleClose_ADD}>
          <DialogTitle>Create New Item</DialogTitle>
          <DialogContent>
            <DialogContentText>
              You are creating a new food item!
            </DialogContentText>
            <div>
              <TextField
                autoFocus
                margin="normal"
                id="name"
                inputProps={{ "data-testid": "name-field" }}
                label="Name"
                fullWidth
                variant="outlined"
                onChange={e => setName(e.target.value)}
              />
              <TextField
                margin="normal"
                id="price"
                inputProps={{ "data-testid": "price-field", "type": "number"}}
                label="Price"
                fullWidth
                variant="outlined"
                onChange={e => setPrice(e.target.value)}
              />
              <TextField
                margin="normal"
                id="description"
                inputProps={{ "data-testid": "description-field" }}
                multiline
                rows={4}
                label="Description"
                fullWidth
                variant="outlined"
                onChange={e => setDescription(e.target.value)}
              />
              <TextField
                margin="normal"
                id="url"
                inputProps={{ "data-testid": "url-field" }}
                label="Image URL"
                fullWidth
                variant="outlined"
                onChange={e => setUrl(e.target.value)}
              />
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose_ADD}>Cancel</Button>
            <Button onClick={() => {
                handleFinish_ADD();
              }}
              data-testid="finish-button"
              >Finish</Button>
          </DialogActions>
        </Dialog>
      </div>
      <Menu data={menu} onDelete={handleDelete}/>
    </div>
  );
}

export default App;

/* <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </header> */
