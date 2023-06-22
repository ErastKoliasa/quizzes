import style from './Play.module.css'
import common from '../../common.module.css'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { setScore, setTotalTime } from '../../redux/action';

const getRandomNumber = max => Math.floor(Math.random() * Math.floor(max));

const Play = () => {
    const navigate = useNavigate();
    const questions = useSelector(state => state.questions);
    const category = useSelector(state => state.category);
    const score = useSelector(state => state.score)
    const [questionIndex, setQuestionIndex] = useState(0);
    const [options, setOptions] = useState([]);
    const [time, setTime] = useState(Date.now())
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
            dispatch(setScore(score + 1))
        }
        if(questionIndex + 1 < questions.results.length){
            setQuestionIndex(questionIndex + 1)
        } else {
            const totalTime = Math.floor((Date.now() - time) / 1000);
            dispatch(setTotalTime(totalTime));
            navigate("/finish")
        }
    }

    return (
        <div className={common.content}>
            <div className={style.header}>
                <h1 className={common.title}>{category}</h1>
                <Link className={style.buttonCancel} to="/">Cancel</Link>
            </div>
            <h3 className={`${common.additionalTitle} ${style.additionalTitle}`}>Question {questionIndex + 1}</h3>
            <p className={`${common.text} ${style.text}`}>{questions.results[questionIndex].question}</p>
            <ul className={style.answersContainer}>
                {options.map((data, id) =>
                    <li key={id} className={style.answerItem}>
                        <button onClick={handleClickAnswer} className={`${common.button} ${style.buttonAnswer}`}>{data}</button>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Play;