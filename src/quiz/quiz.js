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
			questionText: 'The Prime Minister is elected by members of?',
			answerOptions: [
				{ answerText: 'Assembly', isCorrect: false },
				{ answerText: 'Panchayat', isCorrect: false },
				{ answerText: 'Lok Sabha', isCorrect: true },
				{ answerText: 'Rajya Sabha', isCorrect: false },
			],
		},
		{
			questionText: 'Who appoints Cabinet Ministers?',
			answerOptions: [
				{ answerText: 'The Prime Minister', isCorrect: true },
				{ answerText: 'The President', isCorrect: false },
				{ answerText: 'Speaker of Lok Sabha', isCorrect: false },
				{ answerText: 'Speaker of Rajya Sabha', isCorrect: false },
			],
		},
		{
			questionText: 'Regulation of education comes under which Ministry?',
			answerOptions: [
				{ answerText: 'Human Resource Development', isCorrect: true },
				{ answerText: 'Information & Broadcasting', isCorrect: false },
				{ answerText: 'Education', isCorrect: false },
				{ answerText: 'Niti Aayog', isCorrect: false },
			],
		},
		{
			questionText: 'Who presents the national budget?',
			answerOptions: [
				{ answerText: 'The Governor of RBI', isCorrect: false },
				{ answerText: 'The Commerce Minister', isCorrect: false },
				{ answerText: 'The Prime Minister', isCorrect: false },
				{ answerText: 'The Finance Minister', isCorrect: true },
			],
		},
		{
			questionText: 'Who was the first President of India?',
			answerOptions: [
				{ answerText: 'Pandit Jawaharlal Nehru', isCorrect: false },
				{ answerText: 'Dr. B. R. Ambedkar', isCorrect: false },
				{ answerText: 'Dr. Rajendra Prasad', isCorrect: true },
				{ answerText: 'M.K. Gandhi', isCorrect: false },
			],
		},
		{
			questionText: 'Who is the head of a state legislative assembly?',
			answerOptions: [
				{ answerText: 'The Governor', isCorrect: false },
				{ answerText: 'The Chief Minister', isCorrect: true },
				{ answerText: 'Both', isCorrect: false },
				{ answerText: 'Neither', isCorrect: false },
			],
		},
		{
			questionText: 'Who is in charge of law and order in a state?',
			answerOptions: [
				{ answerText: 'The Union Government', isCorrect: false },
				{ answerText: 'The State Government', isCorrect: true },
				{ answerText: 'The Legislative Council', isCorrect: false },
				{ answerText: 'The High Court', isCorrect: false },
			],
		},
		{
			questionText: 'Who is the current Chief Minister of Tamil Nadu?',
			answerOptions: [
				{ answerText: 'Edappadi Palanisamy', isCorrect: false },
				{ answerText: 'O. Paneerselvam', isCorrect: false },
				{ answerText: 'M.K. Stalin', isCorrect: true },
				{ answerText: 'J. Jayalalitha', isCorrect: false },
			],
		},
		{
			questionText: 'Who is in charge of providing clean water?',
			answerOptions: [
				{ answerText: 'Corporation', isCorrect: true },
				{ answerText: 'State Government', isCorrect: false },
				{ answerText: 'State Assembly', isCorrect: false },
				{ answerText: 'Union Government', isCorrect: false },
			],
		},
		{
			questionText: 'Who builds roads in rural areas?',
			answerOptions: [
				{ answerText: 'Union Government', isCorrect: false },
				{ answerText: 'State Government', isCorrect: false },
				{ answerText: 'The Corporation', isCorrect: false },
				{ answerText: 'The Panchayat', isCorrect: true },
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
							<span>1. Intro to ...</span>
							<FaRegPlayCircle />
						</div>
						<progress id="ProgressBar" value="78" max="100" title=""></progress>
					</button>
					<button>
						<div className="button-text">
							<span>2. Voting</span>
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
							<span>4. Bills</span>
							<FaRegPlayCircle />
						</div>
						<progress id="ProgressBar" value="78" max="100" title=""></progress>
					</button>
					<button>
						<div className="button-text">
							<span>5. Assembly</span>
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