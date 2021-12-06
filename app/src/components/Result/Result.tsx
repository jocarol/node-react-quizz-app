import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { Col, Container, Row } from 'react-bootstrap';

const Result = (props: any) => {
  return (


/**
 * With React Bootstrap, create a container component that will contain 2 vertically and horizontally aligned rows.
 * First row will contain 2 centered columns. Those columns will fill the entire screen width and height.
 * Second row will contain a button each.
 * 
 */

// 
    
    <Container className="vh-100">
      <Row>
        <h2>Score = {props.score}</h2>
        <Col className="text-center">
          <FontAwesomeIcon icon={faRedoAlt} size="5x"/>
          <h2>New game</h2>
        </Col >
        <Col className="text-center">
          <FontAwesomeIcon icon={faPlusCircle} size="5x"/>
          <h2>Add a quizz</h2>
        </Col>
      </Row>
    </Container>
  );
};

<FontAwesomeIcon icon={faRedoAlt} />

export default Result;
