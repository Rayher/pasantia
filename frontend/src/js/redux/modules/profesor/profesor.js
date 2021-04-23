import { handleActions } from 'redux-actions';
import { push } from "react-router-redux";
import { initialize as initializeForm } from 'redux-form';
import { NotificationManager } from "react-notifications";
import { api } from "api";

const SET_DATA_PROFESOR = "SET_DATA_PROFESOR";
const SET_PAGE_PROFESOR = "SET_PAGE_PROFESOR";
const SET_LOADER_PROFESOR = "SET_LOADER_PROFESOR";

const endpoint = "profesor";


//dispatch, es la función que voy a utilizar para cambiar el valor de una variable de mi estado.
//getStore me devuelve todo el estado

export const listar = (page = 1) => (dispatch, getStore) => {
    const resource = getStore().profesor;

    const params = { page };
    params.ordering = resource.ordering;
    params.search = resource.search;
    dispatch({type: SET_LOADER_PROFESOR, loader: true});

    api.get(endpoint, params).then((response) => {
        dispatch({type: SET_DATA_PROFESOR, data: response});
        dispatch({type: SET_PAGE_PROFESOR, page: page});        
    }).catch(() => {
    }).finally(() => {
        dispatch({type: SET_LOADER_PROFESOR, loader: false});
    });    
}

export const crear = (data) => (dispatch, getStore) => {    
    const profesion_id = data.profesion.value;
    data.profesion = profesion_id;

    api.post(endpoint, data).then(response => {        
        NotificationManager.success('Profesor creado', 'Éxito', 3000);
        dispatch(push("/profesors"));
    }).catch((error) => {
        console.log("error: ", error);
        NotificationManager.error('Error en la creación', 'ERROR');
    }).finally(() => {        
    });
}

export const obtenerProfesiones = (search) => (dispatch) => {    
    return api.get("profesion", {search}).then(response => {
        if(response){
            const profesiones = [];
            response.results.forEach(profesion => {
                profesiones.push({
                    value: profesion.id,
                    label: profesion.profesion_name
                })
            });
            return profesiones;
        }
    }).catch(error=>{
        console.log("error: ", error);
        return [];
    })
}

export const actions = {
    listar,
    obtenerProfesiones,
    crear,
}

export const reducers = {
    [SET_DATA_PROFESOR]: (state, { data }) => {
        return {
            ...state,
            data,
        };
    },
    [SET_PAGE_PROFESOR]: (state, { page }) => {
        return {
            ...state,
            page,
        };
    },
    [SET_LOADER_PROFESOR]: (state, {loader}) => {
        return {
            ...state,
            loader,
        }
    }    
}

export const initialState = {
    loader: false,
    data: {
        results: [],
        count: 0,
    },
    item: {},
    page: 1,
    ordering: '',
    search: '',
};

export default handleActions(reducers, initialState);