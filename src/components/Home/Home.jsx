import style from './Home.module.css'
import common from '../../common.module.css'
const Home = () => {
    return (
        <div className={common.content}>
            <h1 className={common.title}>QUIZZES</h1>
            <button className={style.luckyButton}>I`m lucky</button>
            <div className={style.quizzeContainer}>
                <div className={style.quizzeItem}>
                    <h3 className={common.additionalTitle}>Name</h3>
                    <p className={common.text}>Number of Questions:</p>
                    <button className={common.button}>Play</button>
                </div>
                <div className={style.quizzeItem}>
                    <h3 className={common.additionalTitle}>Name</h3>
                    <p className={common.text}>Number of Questions:</p>
                    <button className={common.button}>Play</button>
                </div>
                <div className={style.quizzeItem}>
                    <h3 className={common.additionalTitle}>Name</h3>
                    <p className={common.text}>Number of Questions:</p>
                    <button className={common.button}>Play</button>
                </div>
                <div className={style.quizzeItem}>
                    <h3 className={common.additionalTitle}>Name</h3>
                    <p className={common.text}>Number of Questions:</p>
                    <button className={common.button}>Play</button>
                </div>
            </div>
        </div>
    )
}

export default Home;