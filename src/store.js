import { createStore } from "redux";

export default createStore(function(state, action) {
    if (state === undefined) {
        return {
            score:0
        }
    }else if (action.type === 'CORRECT') {
        return {...state, score: state.score + 1}
    }else if (action.type === 'START') {
        return {
            score: 0
        }
    }
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);