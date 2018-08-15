const INITIAL_STATE = {description: '', list: [] }

//Reducer recebe o estado atual e uma action
//Sempre que uma action é executada , os reducers são chamado e decidimos se vamos mudar o estado dentro do reducer ou não

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'DESCRIPTION_CHANGED':
            return {...state, description:action.payload}
        case 'TODO_SEARCHED':
            return {...state, list:action.payload}
        case 'TODO_CLEAR':
            return {...state,description:''}
        default:
        return state
    }
}