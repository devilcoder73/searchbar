import { SEARCH_GIG } from "./types";

export const searchGig = text => dispatch => {
    dispatch({
        type : SEARCH_GIG,
        payload : text
    })
    console.log("searchActions.js");
}