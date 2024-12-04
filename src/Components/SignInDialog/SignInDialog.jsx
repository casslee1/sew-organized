import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import SignIn from '../signIn/SignIn'
import { PropTypes } from "prop-types";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const renderButton = () => {
    if ((props.buttonVariant) === 'contained') {
      return (
        <Button variant="contained" sx={{background:'#ff5938'}} onClick={handleClickOpen}>
          Get Started
        </Button>
      );
    } else if ((props.buttonVariant) === 'text') {
      return  (
        <Button 
            variant="text"
            sx={{
              color: '#1976d2',
              textTransform: 'none',
              padding: 0,
              alignSelf: "center",
              '&:hover': {
                backgroundColor: 'transparent', 
                textDecoration: 'underline',
              },
            }} 
            onClick={handleClickOpen}>
            Sign Up
          </Button>
        );
    }
  };

  return (
    <React.Fragment>
      {renderButton()}
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
            <SignIn />
        </DialogContent>
        </BootstrapDialog>
    </React.Fragment>
  );
}

CustomizedDialogs.propTypes = {
  buttonVariant: PropTypes.string
}