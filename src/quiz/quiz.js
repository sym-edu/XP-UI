import React, { useState } from 'react';
import "./quiz.css";
export default function QuizComponent() {
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
				{ answerText: 'DR. B. R. Ambedkar', isCorrect: false},
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
	);
}