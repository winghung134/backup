import "bootstrap/dist/css/bootstrap.min.css"; // Add this line
import 'bootstrap-icons/font/bootstrap-icons.css';

import {Modal,Button} from "react-bootstrap"

export interface DeleteModalType{
    name:string,
    isShown:boolean,
    onDelete:()=>void,
    onHide:()=>void
}


export default function DeleteModal(item:DeleteModalType){
    return(
    <Modal show={item.isShown} onHide={item.onHide}>
    <Modal.Header>
      <Modal.Title>Delete Item Confirmation</Modal.Title>
    </Modal.Header>

    <Modal.Body>
      Do you confirm to delete item "
      <span className="text-primary">{item.name}</span>"?
      <br />
      <i className="text-danger">This action cannot be reversed.</i>
    </Modal.Body>

    <Modal.Footer>
      <Button variant="secondary" onClick={item.onHide}>
        Cancel
      </Button>

      <Button variant="danger" onClick={item.onDelete}>
        Confirm Delete
      </Button>
    </Modal.Footer>
  </Modal>


)}