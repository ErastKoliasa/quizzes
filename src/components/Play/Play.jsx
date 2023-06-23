import style from './Play.module.css'
import common from '../../common.module.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { setAmountCorrectAnswer, setQuizzesCompleted, setScore, setTotalTime, setTotalTimeQuizz } from '../../redux/action';
import { decode } from 'html-entities';

const getRandomNumber = max => Math.floor(Math.random() * Math.floor(max));

const Play = () => {
    const navigate = useNavigate();
    const questions = useSelector(state => state.questions);
    const category = useSelector(state => state.category);
    const score = useSelector(state => state.score);
    const quizzesCompleted = useSelector(state => state.quizzesCompleted);
    const totalTime = useSelector(state => state.totalTime);
    const amountCorrectAnswer = useSelector(state => state.amountCorrectAnswer);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [options, setOptions] = useState([]);
    const [time, setTime] = useState(Date.now());
    const [correctAnswers, setCorrectAnswers] = useState(0)
    const dispatch = useDispatch();
    const currentQuestion = questions.results[questionIndex];

    useEffect(() => {
        if (questions.results.length) {
            const answers = [...currentQuestion.incorrect_answers]
            answers.splice(getRandomNumber(currentQuestion.incorrect_answers.length), 0, currentQuestion.correct_answer);
            setOptions(answers);
        }
    }, [questions, questionIndex])

    const handleClickAnswer = (e) => {
        if(e.target.textContent === currentQuestion.correct_answer){
            setCorrectAnswers(correctAnswers + 1)
            dispatch(setScore(score + 1));
        }
        if(questionIndex + 1 < questions.results.length){
            setQuestionIndex(questionIndex + 1)
        } else {
            const totalTimeQuizz = Math.floor((Date.now() - time) / 1000);
            dispatch(setTotalTimeQuizz(totalTimeQuizz));
            dispatch(setTotalTime(totalTime + totalTimeQuizz));
            dispatch(setQuizzesCompleted(quizzesCompleted + 1));
            dispatch(setAmountCorrectAnswer(amountCorrectAnswer + correctAnswers))
            navigate("/finish");
        }
    }

    const handleClickCancel = () => {
        dispatch(setScore(0));
        navigate("/");
    }

    return (
        <div className={common.content}>
            <div className={style.header}>
                <h1 className={common.title}>{category}</h1>
                <button onClick={handleClickCancel} className={style.buttonCancel}>Cancel</button>
            </div>
            <h3 className={`${common.additionalTitle} ${style.additionalTitle}`}>Question {questionIndex + 1}</h3>
            <p className={`${common.text} ${style.text}`}>{decode(questions.results[questionIndex].question)}</p>
            <ul className={style.answersContainer}>
                {options.map((data, id) =>
                    <li key={id} className={style.answerItem}>
                        <button onClick={handleClickAnswer} className={`${common.button} ${style.buttonAnswer}`}>{decode(data)}</button>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Play;