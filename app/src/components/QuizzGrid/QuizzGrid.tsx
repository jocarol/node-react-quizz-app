import { Col, Container, Row, Spinner } from "react-bootstrap";
import Quizz from "../Quizz/Quizz";



const Grid = (props: any) => {
  return (<>

    <Container>
      <Row className="mt-5">
        <Col>
          <h1 className="text-center h1-custom ">Select a quizz</h1>
        </Col>
      </Row>
    </Container>

    <Container className="text-center">
      <Row xs={1} md={3} className="g-5 mt-5">
        {props.quizzs.map((quizz: any, idx: number) => (
          <div key={idx}>
            <Quizz quizz={quizz} />
          </div>
        ))}
      </Row>
    </Container>
    
  </>);
};

const loading = () => {
  return (<>
    <Container>
      <Row className="mt-5">
        <Col>
          <Spinner animation={'border'}></Spinner>
        </Col>
      </Row>
    </Container>
  </>
  );
};


const QuizzGrid = (props: any) => {
  return (<>
    {props.quizzs.length > 0 ? <Grid quizzs={props.quizzs} /> : loading()}
  </>
  );
};

export default QuizzGrid;
