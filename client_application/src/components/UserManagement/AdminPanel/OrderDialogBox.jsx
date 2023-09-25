import * as React from "react";
import PropTypes from "prop-types";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";

export default function OrderDetailsModal(props) {
  const { onClose, order, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Ordered Item Details</DialogTitle>
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-label="mailbox folders"
      >
        <ListItem  button divider>
          <ListItemText primary="Item" />
          <ListItemText primary="Quantity"/>
        </ListItem>
        {Object.entries(order.orderedItem[0]).map(([itemName, quantity]) => (
          <ListItem key={itemName} button divider>
            <ListItemText primary={itemName} />
            <ListItemText primary={quantity} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

OrderDetailsModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};
