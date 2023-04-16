import axios from 'axios'
import Store from '../Redux/Store'
import changeLoader from '../Redux/Actions/Loader'

const axiosInstance = axios.create({

	baseURL: "http://localhost:4000"
    

})


axiosInstance.interceptors.request.use(function(req){
    //Loader request
    Store.dispatch(changeLoader(true))
    return req

},function(error){

    return Promise.reject(error)
})

axiosInstance.interceptors.response.use(function(responce){
        //Loader response
    Store.dispatch(changeLoader(false));
    return responce;
},function(error){
    Store.dispatch(changeLoader(false));
    return Promise.reject(error)

})



export default axiosInstance ;