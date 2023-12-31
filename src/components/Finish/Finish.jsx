import { Link, useNavigate } from 'react-router-dom';
import common from '../../common.module.css'
import style from './Finish.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { setScore, setTotalNumberQuestions } from '../../redux/action';
import { useEffect } from 'react';

export const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${remainingSeconds}s`;
}; 

const Finish = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const questions = useSelector(state => state.questions);
    const category = useSelector(state => state.category);
    const score = useSelector(state => state.score)
    const totalTimeQuizz = useSelector(state => state.totalTimeQuizz);
    const totalNumberQuestions = useSelector(state => state.totalNumberQuestions)


    useEffect(() => {
        dispatch(setTotalNumberQuestions(totalNumberQuestions + questions.results.length))
    },[])

    const handleClickHome = () => {
        dispatch(setScore(0))
        navigate("/")
    }

    return (
        <div className={common.content}>
            <h1 className={common.title}>Quiz Results</h1>
            <h3 className={`${common.additionalTitle} ${style.additionalTitle}`}>{category}</h3>
            <p className={`${common.text} ${style.text}`}>Total Questions: <span className={style.textDetails}>{questions.results.length}</span></p>
            <p className={`${common.text} ${style.text}`}>Correct Answers: <span className={style.textDetails}>{score}</span></p>
            <p className={`${common.text} ${style.text}`}>Time Taken: <span className={style.textDetails}>{formatTime(totalTimeQuizz)}</span></p>
            <p className={`${common.text} ${style.text}`}>Accuracy: <span className={style.textDetails}>{((score / questions.results.length) * 100).toFixed(2)}%</span></p>
            <p className={`${common.text} ${style.text}`}>Average Time per Question:
                <span className={style.textDetails}> {formatTime((totalTimeQuizz / questions.results.length).toFixed(2))}</span>
            </p>
            <div className={style.buttonHomeContainer}>
                <button className={style.buttonHome} onClick={handleClickHome}>HOME</button>
            </div>
        </div>
    )
}

export default Finish;