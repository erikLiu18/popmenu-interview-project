import React from 'react';
import './Card.css';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


export default function Card({id, title, description, price, url, onDelete}) {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDelete = () => {
        onDelete(id);
        setOpen(false);
    }

    console.log(id);
    return (
        <div className="card">
            {/* <img className="card--img" alt="" src={require('../../images/item_images/' + id + '.jpeg')}/> */}
            <img className="card--img" alt="" src={url} onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src="https://cdn.dribbble.com/users/220914/screenshots/3896419/shake_shack_dribble.jpg?compress=1&resize=400x300";
            }}/>
            <div className="card--title">
                <h3>{title}</h3>
                <p>${price}</p>
            </div>
            <p className="card--desc">{description}</p>
            <div>
                <IconButton aria-label="delete" size="small" onClick={handleClickOpen}>
                    <DeleteIcon fontSize="inherit" />
                </IconButton>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                    {"Delete Food Item"}
                    </DialogTitle>
                    <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure you want to delete {title}?
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleClose}>No</Button>
                    <Button onClick={handleDelete} autoFocus>
                        Yes
                    </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    );
}