import style from './Home.module.css'
const Home = () => {
    return (
        <div className={style.home}>
            <h1>QUIZZES</h1>
            <button className={style.luckyButton}>I`m lucky</button>
            <div className={style.quizzeContainer}>
                <div className={style.quizzeItem}>
                    <h3>Name</h3>
                    <p>Number of Questions:</p>
                    <button>Play</button>
                </div>
                <div className={style.quizzeItem}>
                    <h3>Name</h3>
                    <p>Number of Questions:</p>
                    <button>Play</button>
                </div>
                <div className={style.quizzeItem}>
                    <h3>Name</h3>
                    <p>Number of Questions:</p>
                    <button>Play</button>
                </div>
                <div className={style.quizzeItem}>
                    <h3>Name</h3>
                    <p>Number of Questions:</p>
                    <button>Play</button>
                </div>
            </div>
        </div>
    )
}

export default Home;