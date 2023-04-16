import { combineReducers} from 'redux'
import AuthReducer from './AuthReducer'
import LoaderReducer from './LoaderReducer';
import TodosReducer from './TodosReducer';

const AllReducers = combineReducers({
    Auth:AuthReducer,
    Loader:LoaderReducer,
    Todos:TodosReducer,
})

export default AllReducers;