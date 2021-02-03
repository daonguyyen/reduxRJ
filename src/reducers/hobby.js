import { act } from "react-dom/test-utils";

const initialState = {
    list: [],
    activeId: null,
}

const hobbyReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_HOBBY': {
            //Luon clone 1 [], {} cu  thanh 1 mang, obj moi
            const newList = [...state.list];
            newList.push(action.payload);
            return {
                ...state,
                list: newList,
            };
        }

        case 'SET_ACTIVE_HOBBY': {
            const newActiveId = action.payload.id;
            return {
                ...state,
                activeId: newActiveId,
            };
        }

        default:
            return state;
    }
}

export default hobbyReducer;