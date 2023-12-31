import { useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import "./HomeMainbar.css"
import QuestionsList from './QuestionsList'

const Mainbar = () => {

    const location = useLocation()
    const user = 1;
    const navigate = useNavigate()

    const questionsList = useSelector(state => state.questionsReducer)
    // console.log(questionsList )
    // const location = useLocation()

    // var questionsList = [{ 
    //     _id: 1,
    //     upVote: 3,
    //     downVote: 2,
    //     noOfAnswers: 2,
    //     questionTitle: "What the hell?",
    //     questionBody: "It meant to be",
    //     questionTags: ["java", "node js", "react js", "mongo db", "express js"],
    //     userPosted: "mano",
    //     userId: 1,
    //     askedOn: "jan 1",
    //     answer: [{
    //         answerBody:"Answer",
    //         userAnswered:'Kumar',
    //         answeredOn:"jan 2",
    //         userId: 2,
    //     }]
    // },{ 
    //     _id: 2,
    //     upVote: 3,
    //     downVote: 2,
    //     noOfAnswers: 0,
    //     questionTitle: "What the hell?",
    //     questionBody: "It meant to be",
    //     questionTags: ["javascript", "R", "python"],
    //     userPosted: "mano",
    //     userId: 1,
    //     askedOn: "jan 1",
    //     answer: [{
    //         answerBody:"Answer",
    //         userAnswered:'Kumar',
    //         answeredOn:"jan 2",
    //         userId: 2,
    //     }]
    // },{ 
    //     id: 3,
    //     upVote: 3,
    //     downVote: 2,
    //     noOfAnswers: 0,
    //     questionTitle: "What the hell?",
    //     questionBody: "It meant to be",
    //     questionTags: ["javascript", "R", "python"],
    //     userPosted: "mano",
    //     userId: 1,
    //     askedOn: "jan 1",
    //     answer: [{
    //         answerBody:"Answer",
    //         userAnswered:'Kumar',
    //         answeredOn:"jan 2",
    //         userId: 2,
    //     }]
    // }]

  
  
  const checkAuth = () => {
    if(user === null){
        alert("login or signup to ask a question")
        navigate('/Auth')
      }else{
        navigate('/AskQuestion')
      }
  }
    return (
        <div className="main-bar">
            <div className="main-bar-header">
                { location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1> }
                <button onClick={checkAuth} className="ask-btn">Ask Question</button>
            </div>
            <div>
              {
                questionsList.data === null ? 
                    <h1>Loading...</h1>
                : <>
                    <p>{questionsList.data.length} questions</p>
                    <QuestionsList questionsList={questionsList.data}/>
                  </>
            }
            </div>
        </div>
    )
}

export default Mainbar
