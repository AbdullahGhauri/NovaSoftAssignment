import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import data from './questions.json';

var questionNumber = 0
const Quiz = (qNmumber) =>{
  console.log(qNmumber)
  
var rating = 0
if(data.difficulty == "easy"){
  rating = 1
}
else if(data.difficulty == "medium"){
  rating = 2
}
else if(data.difficulty == "hard"){
  rating = 3
}
var progressValue = (qNmumber/20)*100
  return(
    
    <>
  
  <progress value={progressValue} max="100" className="quizProgressBar"/>
  
  <div className="body">
  <h2>Question Number {qNmumber+1} of 20</h2>
  
  <h6>Entertaiment Board Exam</h6>

    <h4>{data[qNmumber].question}</h4>

    <Rater total={5} rating={rating} />

    <Container>
      <Row xs="2">
        <Col className="button1"><button onClick={() => selectOption(data[qNmumber].correct_answer,qNmumber)}>{data[qNmumber].correct_answer}</button></Col>
        <Col className="button1"><button onClick={() => selectOption(data[qNmumber].incorrect_answers[0],qNmumber)}>{data[qNmumber].incorrect_answers[0]}</button></Col>
        <Col className="button1"><button onClick={() => selectOption(data[qNmumber].incorrect_answers[1],qNmumber)}>{data[qNmumber].incorrect_answers[1]}</button></Col>
        <Col className="button1"><button onClick={() => selectOption(data[qNmumber].incorrect_answers[2],qNmumber)}>{data[qNmumber].incorrect_answers[2]}</button></Col>
      </Row>
     
    </Container>
    <progress value="30" max="100" className="progressBar"/>
  </div>
  </>
  )
}

const correct = () =>{
  
  var temp = localStorage.getItem("qNumber")
  temp++
  localStorage.setItem("qNumber",temp),
    <div className="correct">
    <h1>Correct</h1>
    <button onClick={() => Quiz(questionNumber)}>Next Question</button>
  </div>
 
}
const wrong = () =>{
  <div className="wrong">
    <h1>Wrong</h1>
  </div>
}

const selectOption = (e,i)=>{
  console.log("------------"+e)
  if(e === data[i].correct_answer){
    console.log("ok")
    Quiz(questionNumber)
    correct()


    console.log("---question number "+temp)
  }
  else{
    console.log("sorry")
    wrong()
  }
}
localStorage.setItem("qNumber",questionNumber)
ReactDOM.render(

 
  Quiz(questionNumber),
  document.getElementById('root')
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
