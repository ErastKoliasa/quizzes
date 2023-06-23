import style from './Home.module.css'
import common from '../../common.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getQuestionsData } from '../../redux/middleware'
import { setLoading } from '../../redux/action'
import { useState } from 'react'
const Home = () => {
    const quizzes = useSelector(state => state.quizzes);
    const loading = useSelector(state => state.loading);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [numberQuestions, setNumberQuestions] = useState(10)

    async function handleClickPlay(id, name) {
        if (numberQuestions > 0 && numberQuestions < 51) {
            dispatch(setLoading())
            await dispatch(getQuestionsData(id, name, numberQuestions));
            navigate('play');
        }
    }

    async function handleClickLucky() {
        if (numberQuestions > 0 && numberQuestions < 51) {
            dispatch(setLoading())
            const randomQuiz = quizzes[Math.floor(Math.random() * quizzes.length)];
            await dispatch(getQuestionsData(randomQuiz.id, randomQuiz.name, numberQuestions));
            navigate('play');
        }
    }

    const handleChangeNumberQuestions = (e) => {
        setNumberQuestions(e.target.value);
    }

    return (
        <div className={common.content}>
            {loading ? <p>LOADING...</p> : <div>
                <div className={style.headContainer}>
                    <h1 className={common.title}>QUIZZES</h1>
                    <button className={style.statsButton} onClick={() => navigate('stats')}>Stats</button>
                </div>
                <button onClick={handleClickLucky} className={style.luckyButton}>I`m lucky</button>
                <div className={style.quizzeContainer}>
                    {quizzes.map(quizz =>
                        <div key={quizz.id} className={style.quizzeItem}>
                            <h3 className={common.additionalTitle}>{quizz.name}</h3>
                            <p className={common.text}>Number of Questions (1-50): <input onChange={handleChangeNumberQuestions} type='number' min="1" max="50" value={numberQuestions} step="1" /></p>
                            <button onClick={() => handleClickPlay(quizz.id, quizz.name)} className={common.button}>Play</button>
                        </div>
                    )}
                </div>
            </div>}
        </div>
    )
}

export default Home;