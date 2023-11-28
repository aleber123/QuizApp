import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";


import Question from "./Question";



const App = () => {
  const [QuizData,setQuizData] = useState ([]);

  useEffect(()=>{
  const url = "http://webbred2.utb.hb.se/~fewe/api/api.php?data=quiz";
  fetch(url).then(response=>response.json()).then(data=>{
    data.map(
      p => p.all_answers = [p.correct_answer, ...p.incorrect_answers]);
    console.log(data);
    setQuizData(data);
  })  
}, []);
  return (
    <div>
      
<Question data={QuizData[0]}></Question>
    </div >

  );
}

export default App;

