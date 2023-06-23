import style from './Stats.module.css'
import common from '../../common.module.css'
import Chart from 'react-google-charts';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { formatTime } from '../Finish/Finish';

const Stats = () => {
    const navigate = useNavigate();
    const quizzesCompleted = useSelector(state => state.quizzesCompleted);
    const totalNumberQuestions = useSelector(state => state.totalNumberQuestions);
    const totalTime = useSelector(state => state.totalTime);
    const amountCorrectAnswer = useSelector(state => state.amountCorrectAnswer);

    const data = [
        ["Question", "Result"],
        ["Correct", amountCorrectAnswer],
        ["Incorrect", totalNumberQuestions - amountCorrectAnswer],
    ];

    return (
        <div className={common.content}>
            <div className={style.headContainer}>
                <h1 className={common.title}>STATS</h1>
                <button className={style.homeButton} onClick={() => navigate('/')}>HOME</button>
            </div>
            <div>
                <div>
                    <p className={common.text}>Quizzes played:  <span className={style.textDetails}>{quizzesCompleted}</span></p>
                    <p className={common.text}>Questions have been answered: <span className={style.textDetails}>{totalNumberQuestions}</span></p>
                    <p className={common.text}>Average time of answering quizzes: <span className={style.textDetails}>{totalNumberQuestions === 0 ? "0" : formatTime((totalTime / quizzesCompleted).toFixed(2))}</span></p>
                </div>
                <div>
                    <Chart
                        chartType="PieChart"
                        data={data}
                        width="100%"
                        height="400px"
                        options={{ title: "Answers:" }} />
                </div>
            </div>
        </div>
    )
}

export default Stats;