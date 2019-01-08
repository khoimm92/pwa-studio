import actions from './actions';

export const toggleDrawer = name => async dispatch =>
    dispatch(actions.toggleDrawer(name));

export const closeDrawer = () => async dispatch =>
    dispatch(actions.toggleDrawer(null));

export const toggleSearch = () => async dispatch =>
    dispatch(actions.toggleSearch());

export const toggleCompare = () => async dispatch =>
    dispatch(actions.toggleCompare());

export const addCompare = product => async dispatch =>
    dispatch(actions.addCompare(product));

export const executeSearch = (query, history) =>
    async function thunk(dispatch) {
        history.push(`/search.html?query=` + query);
        dispatch(actions.executeSearch(query));
    };

export const addItemToCompare = product =>
    async dispatch => {

        try {
            // @TODO: send post request to API
            dispatch(addCompare(product));
            dispatch(toggleCompare());

        } catch (error) {
            throw error;
        }
    };
