
//initial state
const initialState = {
    data:[],
    isFetchingData: false,
    error: ""
};


export const imgReducer = (state=initialState, action) => {
    //Reducer switch here
    switch(action.type){
        //start fetching image data
        case FETCH_IMG
        
        //fetch successful
        case FETCH_SUCCESS
    
        //fetch failed
        case FETCH_FAIL
    //default return
    default: 
        return state;
    }
};