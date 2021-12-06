import { Modal } from "react-bootstrap";

const QuizzModal = (props: any) => {

  return (
    <Modal
      show={props.show}
      onHide={props.handleClose}
      backdrop="static"
      keyboard={false}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        {/* @ts-ignore */}
        <Modal.Title>{props.name}</Modal.Title>
      </Modal.Header>
    </Modal>
  );
};

export default QuizzModal;