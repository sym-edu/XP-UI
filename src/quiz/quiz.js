import React, { useState } from 'react';
// import Logo from '../img-imports/SYM_Logo_Circle.svg';
import { Link } from "react-router-dom";
import { TbRobot } from "react-icons/tb";
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { FaRegPlayCircle } from "react-icons/fa";
import { FaPenAlt } from 'react-icons/fa';
import "./quiz.css";
// import Chatbot from '../chatbot/chatbot.js'
import Header from '../components/Header';

export default function QuizComponent() {

	// const [showChatbot, setShowChatbot] = useState(false);

	// const toggleChatbot = () => {
	//   setShowChatbot(!showChatbot);
	// };

	const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
		{
			questionText: 'Who was the first man to land on Moon?',
			answerOptions: [
				{ answerText: 'Neil Armstrong', isCorrect: true },
				{ answerText: 'Abraham Lincoln', isCorrect: false },
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'Who invented the Helicopter',
			answerOptions: [
				{ answerText: 'Manvendra Singh', isCorrect: false },
				{ answerText: 'Igor Sikorsky', isCorrect: true },
				{ answerText: 'Brad Pitt', isCorrect: false },
				{ answerText: 'Hada', isCorrect: false },
			],
		},
		{
			questionText: 'What is the PH value of the human body?',
			answerOptions: [
				{ answerText: '9.2 tp 9.8', isCorrect: false },
				{ answerText: '7.0 to 7.8', isCorrect: true },
				{ answerText: '6.1 to 6.3', isCorrect: false },
				{ answerText: '5.4 to 5.6', isCorrect: false },
			],
		},
		{
			questionText: 'Who was the first President of India?',
			answerOptions: [
				{ answerText: 'Ratatouille', isCorrect: false },
				{ answerText: 'DR. B. R. Ambedkar', isCorrect: false },
				{ answerText: 'DR. Rajendra Prasad', isCorrect: true },
				{ answerText: 'Wonder Women', isCorrect: false },
			],
		},
		{
			questionText: 'Who is the richest man in the world?',
			answerOptions: [
				{ answerText: 'Bernard Arnault & family', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: false },
			],
		},
		{
			questionText: 'Which color is formed when you mix black and white?',
			answerOptions: [
				{ answerText: 'Green', isCorrect: false },
				{ answerText: 'Black', isCorrect: false },
				{ answerText: 'White', isCorrect: false },
				{ answerText: 'Grey', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='quiz-container'>
			{/* <div className='nav'>
        <div className='nav-left'>
                  <img src={Logo} alt='sym-logo' className='nav-logo'/>
        <h3 className='nav-logo-h3'>Hello,Learner!</h3>
        </div>
        <ul className='nav-center'>
          <li className='nav-center-1'>
             <Link to='/profile'> 
              <span className='profile-span'>Profile</span>
              </Link>
          </li>
          <li className='nav-center-2'>
            <Link to='/landingpage'>
              <span>My Dashboard</span>
              </Link>
          </li>
          <li className='nav-center-3'>
            <span className='chatbot-span' onClick={ toggleChatbot }> Chatbot</span>
                  { showChatbot && <Chatbot />}
          </li>
		  </ul>
          <div className='nav-right'>
            <Link to='/helper'>
              <button className='help-button'>
                <span className='help-button-text'>Need Help ?</span>
                </button>
            </Link>
            </div>
        </div> */}
			<Header />
			<div className='sidebar-quiz'>
				<div className="courses-sidebar">
					<br />
					<br />
					<h2>
						Curriculum
					</h2>
					<button className='sidebar-btn-1'>
						<div className="button-text">
							<span>1. Intro to Finance</span>
							<FaRegPlayCircle />
						</div>
						<progress id="ProgressBar" value="78" max="100" title=""></progress>
					</button>
					<button>
						<div className="button-text">
							<span>2. Stock and Investing</span>
							<FaRegPlayCircle />
						</div>
						<progress id="ProgressBar" value="78" max="100" title=""></progress>
					</button>
					<Link to='/quiz'>
						<button>
							<div className="button-text">
								<span>3. Quiz 1</span>
								<FaPenAlt />
							</div>
							<progress id="ProgressBar" value="78" max="100" title=""></progress>
						</button>
					</Link>
					<button>
						<div className="button-text">
							<span>4. Financing</span>
							<FaRegPlayCircle />
						</div>
						<progress id="ProgressBar" value="78" max="100" title=""></progress>
					</button>
					<button>
						<div className="button-text">
							<span>5. Banking</span>
							<FaRegPlayCircle />
						</div>
						<progress id="ProgressBar" value="78" max="100" title=""></progress>
					</button>
					<button>
						<div className="button-text">
							<span>6. Quiz 2</span>
							<FaPenAlt />
						</div>
						<progress id="ProgressBar" value="78" max="100" title=""></progress>
					</button>
				</div>
				<div className='quii'>
					{showScore ? (
						<div className='score-section'>
							You scored {score} out of {questions.length}
						</div>
					) : (
						<>
							<div className='question-section'>
								<div className='question-count'>
									<span>Question {currentQuestion + 1}</span>/{questions.length}
								</div>
								<div className='question-text'>{questions[currentQuestion].questionText}</div>
							</div>
							<div className='answer-section'>
								{questions[currentQuestion].answerOptions.map((answerOption) => (
									<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
								))}
							</div>
						</>
					)}
				</div>
			</div>
		</div>
	);
}