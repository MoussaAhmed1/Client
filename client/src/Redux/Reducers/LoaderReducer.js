const intial  = {loader:true};

const LoaderReducer = (state=intial,action)=>{
    switch(action.type){
        case "CHANGE_LOADER":
            return {loader:action.payload}
            ;
                

        default:
            return state;
    }
}

export default LoaderReducer;