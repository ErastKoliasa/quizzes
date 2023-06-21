import style from './Play.module.css'
import common from '../../common.module.css'
import { Link } from 'react-router-dom';
const Play = () => {
    return (
        <div className={common.content}>
            <div className={style.header}>
                <h1 className={common.title}>NAME</h1>
                <Link className={style.buttonCancel} to="/">Cancel</Link>
            </div>
            <h3 className={`${common.additionalTitle} ${style.additionalTitle}`}>Question №10</h3>
            <p className={`${common.text} ${style.text}`}>Question Text</p>
            <ul className={style.answersContainer}>
                <li className={style.answerItem}><button className={`${common.button} ${style.buttonAnswer}`}>answer</button></li>
                <li className={style.answerItem}><button className={`${common.button} ${style.buttonAnswer}`}>answer</button></li>
                <li className={style.answerItem}><button className={`${common.button} ${style.buttonAnswer}`}>answer</button></li>
                <li className={style.answerItem}><button className={`${common.button} ${style.buttonAnswer}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero accusamus quos numquam nesciunt adipisci provident sit reiciendis placeat delectus dolorem, eveniet doloremque possimus voluptatum eligendi. Ratione, labore ducimus! Numquam, neque!</button></li>
            </ul>
        </div>
    )
}

export default Play;