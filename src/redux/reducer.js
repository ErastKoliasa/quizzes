const initialState = {
    quizzes: [
        {
            id: 10,
            name: "Book"
        },
        {
            id: 11,
            name: "Film"
        },
        {
            id: 12,
            name: "Music"
        },
        {
            id: 14,
            name: "Television"
        },
        {
            id: 15,
            name: "Video Games"
        },
        {
            id: 18,
            name: "Computers"
        },
        {
            id: 21,
            name: "Sports"
        },
        {
            id: 23,
            name: "History"
        },
        {
            id: 24,
            name: "Politics"
        },
        {
            id: 27,
            name: "Animals"
        },
    ],
    questions: [],
    category: "",
    score: 0,
    totalTimeQuizz: 0,
    loading: false,
    quizzesCompleted: 0,
    totalNumberQuestions: 0,
    totalTime: 0,
    amountCorrectAnswer: 0,
};

export const showsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_QUESTIONS":
            return {
                ...state,
                questions: action.payload,
            }; 
        case "CHANGE_CATEGORY":
            return {
                ...state,
                category: action.payload,
                loading: false
            }; 
        case "CHANGE_SCORE":
            return {
                ...state,
                score: action.payload
            };
        case "CHANGE_TOTAL_TIME_QUIZZ":
            return {
                ...state,
                totalTimeQuizz: action.payload
            }
        case "CHANGE_LOADING":
            return {
                ...state,
                loading: true
            }
        case "CHANGE_QUIZZES_COMPLETED":
            return {
                ...state,
                quizzesCompleted: action.payload
            }
        case "CHANGE_TOTAL_NUMBER_QUESTIONS":
            return {
                ...state,
                totalNumberQuestions: action.payload
            }
        case "CHANGE_TOTAL_TIME":
            return {
                ...state,
                totalTime: action.payload
            }
        case "CHANGE_AMOUNT_CORRECT_ANSWER":
            return {
                ...state,
                amountCorrectAnswer: action.payload
            }
        default:
            return state;
    }
};