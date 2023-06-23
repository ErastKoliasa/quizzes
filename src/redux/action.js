export const setQuestions = (questionsData) => ({
    type: "SET_QUESTIONS",
    payload: questionsData
});

export const setCategory = (category) => ({
    type: "CHANGE_CATEGORY",
    payload: category
});

export const setScore = (score) => ({
    type: "CHANGE_SCORE",
    payload: score
});

export const setTotalTimeQuizz = (time) => ({
    type: "CHANGE_TOTAL_TIME_QUIZZ",
    payload: time
});

export const setLoading = () => ({
    type: "CHANGE_LOADING",
});

export const setQuizzesCompleted = (quizz) => ({
    type: "CHANGE_QUIZZES_COMPLETED",
    payload: quizz
});

export const setTotalNumberQuestions = (questions) => ({
    type: "CHANGE_TOTAL_NUMBER_QUESTIONS",
    payload: questions
});

export const setTotalTime = (time) => ({
    type: "CHANGE_TOTAL_TIME",
    payload: time
});
export const setAmountCorrectAnswer = (answer) => ({
    type: "CHANGE_AMOUNT_CORRECT_ANSWER",
    payload: answer
});

