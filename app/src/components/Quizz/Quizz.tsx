import { useState } from "react"
import { Button, Card, Col, Modal, Row } from "react-bootstrap"

const Quizz = (props: any) => {
  const { questions } = props.quizz
  const [correctAnswers, setCorrectAnswers] = useState([])
  const [show, setShow] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)

  const handleClose = () => {
    localStorage.setItem("score", score.toString())
    setShow(false)
    setShowResult(false)
    setCurrentQuestion(0)
    setScore(0)
  }

  const handleShow = () => {
    setShow(true)
  }

  const handleSubmit = (e: any) => {
    if (questions[currentQuestion].correct_answers[e.target.value] === "true") {
      setScore(score + 1)
    } else {
      // @ts-ignore
      setCorrectAnswers([...correctAnswers, currentQuestion])
      setScore(score - 1)
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResult(true)
    }
  }

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >

        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {
              showResult ?
                `Total Score : ${score} (last score: ${localStorage.getItem("score")})` :
                `${props.quizz.name} -  ${currentQuestion} / ${questions.length}`
            }
          </Modal.Title>
        </Modal.Header>
        <Card>
          <Card.Body>
            <Card.Title>
              {!showResult ? questions[currentQuestion].question : 'Thank you for playing!'}
            </Card.Title>
            <Row>
              {!showResult ?
                <>
                  <Col>
                    <div className="d-grid gap-2">
                      <Button variant="outline-secondary" size="lg" onClick={handleSubmit} value="answer_a">
                        {questions[currentQuestion].answers["answer_a"]}
                      </Button>
                      <Button variant="outline-secondary" size="lg" onClick={handleSubmit} value="answer_c">
                        {questions[currentQuestion].answers["answer_c"]}
                      </Button>
                    </div>
                  </Col>
                  <Col>
                    <div className="d-grid gap-2">
                      <Button variant="outline-secondary" size="lg" onClick={handleSubmit} value="answer_b">
                        {questions[currentQuestion].answers["answer_b"]}
                      </Button>
                      <Button variant="outline-secondary" size="lg" onClick={handleSubmit} value="answer_d">
                        {questions[currentQuestion].answers["answer_d"]}
                      </Button>
                    </div>
                  </Col>
                </> :
                <Col>
                  <p className="text-danger p-3">{
                    correctAnswers.map(
                      (fail, idx) => <li key={idx}> <b>{questions[fail].question}</b> : <ul>{questions[fail].explanation}</ul> </li>
                    )}
                  </p>
                </Col>}
            </Row>
          </Card.Body>
        </Card>
      </Modal>

      <Col>
        <Card bg="dark" text="light" onClick={handleShow}>
          <Card.Header>{props.quizz.name}</Card.Header>
          <Card.Body>
            <Card.Text>{props.quizz.description}</Card.Text>
          </Card.Body>
        </Card>
      </Col>

    </>
  )
}

export default Quizz