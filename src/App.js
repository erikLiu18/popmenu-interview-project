import React from 'react';
import './App.css';
import {Menu, Navbar,} from './index.js';
import menu from './data.json';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
// import { saveAs } from 'file-saver'

function App() {

  console.log(menu)

  const [openAdd, setOpenAdd] = React.useState(false);
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState(0.0);
  const [description, setDescription] = React.useState("");
  const [url, setUrl] = React.useState("");
  const [render, setRender] = React.useState(false);

  const handleClickOpen_ADD = () => {
    console.log(menu)
    setOpenAdd(true);
  };

  const handleClose_ADD = () => {
    setOpenAdd(false);
  };

  const handleFinish_ADD = () => {
    if (name !== "" && price > 0 && description !== "" && url !== "") {
      menu.push({
          id: '' + (menu.length + 1),
          title: name,
          description: description,
          price: price,
          url: url
      });
      setOpenAdd(false);
    }
  };

  const handleDelete = (itemId) => {
    menu = menu.filter(item => item.id !== itemId)
    setRender(!render)
  }

  return (
    <div className="App">
      <Navbar />
      <div className="App--title">
        <h1 className="App--titleText">Our Menu</h1>
        <button class="App--btn" onClick={handleClickOpen_ADD}>Create</button>
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
                label="Name"
                fullWidth
                variant="outlined"
                onChange={e => setName(e.target.value)}
              />
              <TextField
                margin="normal"
                id="price"
                label="Price"
                fullWidth
                variant="outlined"
                onChange={e => setPrice(e.target.value)}
              />
              <TextField
                margin="normal"
                id="description"
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
              }}>Finished</Button>
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
