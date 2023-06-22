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

export const setTotalTime = (time) => ({
    type: "CHANGE_TOTAL_TIME",
    payload: time
});

