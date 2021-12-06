import { useState } from "react";
import { Button,  Container, Form } from "react-bootstrap";

const AddQuizz = () => {

  const [state, setState] = useState({
    val: "",
  })

  const onSubmit = () => {
    console.log(state.val);
  };

  return (
  <Container fluid className="mt-5 p-5">
      <Form.Group>
        <Form.Control
          className="text"
          as="textarea"
          // rows="3"
          placeholder="Quizz"
          value={state.val}
          onChange={e => setState({ val: e.target.value })}
          type="text"
        />
        <Button
          className="mt-2 btnFormSend"
          variant="outline-success"
          onClick={onSubmit}
        >
          Send Quizz
        </Button>
      </Form.Group>
    </Container>
    );
}

export default AddQuizz;


