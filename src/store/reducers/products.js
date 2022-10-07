import {CREATE_PRODUCT_SUCCESS, GET_DATA_FAIL, GET_DATA_REQUEST, GET_DATA_SUCCESS} from "../actions";

const initialState = {
    data: [],
    currentCount:0,
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_DATA_REQUEST: {
            return {
                ...state,
            }
        }
        case GET_DATA_SUCCESS: {
            const {data, currentCount} = action.payload;
            return {
                ...state,
                data: [ ...state.data, ...data],
                currentCount,
            }
        }
        case CREATE_PRODUCT_SUCCESS: {
            return {
                ...state,
                data: [action.payload.data, ...state.data]
            }
        }
        case GET_DATA_FAIL: {
            return {
                ...state,
            }
        }
        default: {
            return {...state}
        }
    }
}
