import { useEffect, useState } from 'react';
import QuizzGrid from '../QuizzGrid/QuizzGrid';

const Home = () => {
  let [quizzs, setQuizzs] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/quizzs")
      .then(response => response.json())
      .then(data => setQuizzs(data))
      .catch(error => console.log(error))
  }, [])

  return (
      <QuizzGrid quizzs={quizzs} />    
  )
}

export default Home;
