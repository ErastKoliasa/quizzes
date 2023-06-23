import axios from "axios"
import { setCategory, setQuestions } from "./action";

export const getQuestionsData = (id, name, number) => {
    return async (dispatch) => {
        const res = await axios.get(`https://opentdb.com/api.php?amount=${number}&category=${id}`);
        dispatch(setQuestions(res.data));
        dispatch(setCategory(name));
    }
}