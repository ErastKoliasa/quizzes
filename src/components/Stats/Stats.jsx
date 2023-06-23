import style from './Stats.module.css'
import common from '../../common.module.css'
import Chart from 'react-google-charts';
import { useNavigate } from 'react-router-dom';

const Stats = () => {
    const navigate = useNavigate();

     const data = [
        ["Question", "Result"],
        ["Correct", 11],
        ["Ancorrect", 2],
      ];


    return (
        <div className={common.content}>
            <div className={style.headContainer}>
                    <h1 className={common.title}>STATS</h1>
                    <button className={style.homeButton} onClick={() => navigate('/')}>HOME</button>
                </div>
            <div>
                <div>
                    <p className={common.text}>Quizzes played:</p>
                    <p className={common.text}>Questions have been answered:</p>
                    <p className={common.text}>Average time of answering quizzes:</p>
                </div>
                <div>
                    <Chart
                        chartType="PieChart"
                        data={data}
                        width="100%"
                        height="400px"
                        options={{title: "Answers"}}
                    />
                </div>
            </div>
        </div>
    )
}

export default Stats;