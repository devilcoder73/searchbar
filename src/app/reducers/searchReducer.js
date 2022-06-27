import { SEARCH_GIG } from "../actions/types";

const initialState = {
    text : "",
    gigs : [],
    loading : false,
    gig : []
}

export default function(state = initialState, action) {
    // console.log("searchReducer.js");
    console.log(action.type);
    console.log(action.payload);
    switch (action.type)
    {
        case SEARCH_GIG :
            return {
                ...state,
                text : action.payload,
                loading : false
            }
        default :
            return state
    }
}