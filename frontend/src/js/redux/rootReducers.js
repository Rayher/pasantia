import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form'
import login from './modules/cuenta/login';
import register from './modules/cuenta/register';
import profile from './modules/cuenta/profile';
import usuarios from './modules/usuarios/usuarios';
import notificaciones from './modules/notificaciones/notificaciones';
import profesion from "./modules/profesion/profesion";
import profesor from "./modules/profesor/profesor";
import ejemplo from "./modules/ejemplo/ejemplo";

export default combineReducers({
    form: formReducer,
    login,
    register,
    profile,
    usuarios,
    profesion,
    profesor,
    ejemplo,
    
    routing,
    notificaciones,    
});
