import { Link } from 'react-router-dom';
import common from '../../common.module.css'
import style from './Finish.module.css'
const Finish = () => {
    return (
        <div className={common.content}>
            <h1 className={common.title}>Quiz Results</h1>
            <h3 className={`${common.additionalTitle} ${style.additionalTitle}`}>Name</h3>
            <p className={`${common.text} ${style.text}`}>Total Questions: <span className={style.textDetails}>10</span></p>
            <p className={`${common.text} ${style.text}`}>Correct Answers: <span className={style.textDetails}>10</span></p>
            <p className={`${common.text} ${style.text}`}>Time Taken: <span className={style.textDetails}>10 seconds</span></p>
            <p className={`${common.text} ${style.text}`}>Accuracy: <span className={style.textDetails}>100 %</span></p>
            <p className={`${common.text} ${style.text}`}>Average Time per Question: <span className={style.textDetails}>10 seconds</span></p>
            <div className={style.buttonHomeContainer}>
                <Link className={style.buttonHome} to="/">HOME</Link>
            </div>
        </div>
    )
}

export default Finish;