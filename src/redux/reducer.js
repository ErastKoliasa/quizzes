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
            }; 
        default:
            return state;
    }
};