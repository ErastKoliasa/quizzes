import style from './Home.module.css'
import common from '../../common.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getQuestionsData } from '../../redux/middleware'
const Home = () => {
    const quizzes = useSelector(state => state.quizzes)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    async function handleClickPlay(id, name){
        await dispatch(getQuestionsData(id, name))
        navigate('play')
    }
    return (
        <div className={common.content}>
            <h1 className={common.title}>QUIZZES</h1>
            <button className={style.luckyButton}>I`m lucky</button>
            <div className={style.quizzeContainer}>
                {quizzes.map(quizz =>
                    <div key={quizz.id} className={style.quizzeItem}>
                        <h3 className={common.additionalTitle}>{quizz.name}</h3>
                        <p className={common.text}>Number of Questions: 10</p>
                        <button onClick={() => handleClickPlay(quizz.id, quizz.name)} className={common.button}>Play</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Home;