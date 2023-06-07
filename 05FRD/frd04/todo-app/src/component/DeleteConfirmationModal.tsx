import React from "react";
import { Button, Modal } from "react-bootstrap";

interface DeleteConfirmationModalProps {
  name: string;
  isShow: boolean;
  onDelete: () => void;
  onHide: () => void;
}

export default function DeleteConfirmationModal(
  props: DeleteConfirmationModalProps
) {
  return (
    <Modal show={props.isShow} onHide={props.onHide}>
      <Modal.Header>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Do you confirm to delete item {props.name} ??</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Cancel
        </Button>
        <Button variant="primary" onClick={props.onDelete}>
          Confirm Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
