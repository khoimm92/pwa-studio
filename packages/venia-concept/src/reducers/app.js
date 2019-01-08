import { handleActions } from 'redux-actions';

import actions from 'src/actions/app';

export const name = 'app';

const initialState = {
    drawer: null,
    hasBeenOffline: !navigator.onLine,
    isOnline: navigator.onLine,
    overlay: false,
    searchOpen: false,
    compareOpen: false,
    query: '',
    pending: {},
    compareProducts: [],
};

const reducerMap = {
    [actions.toggleDrawer]: (state, { payload }) => {
        return {
            ...state,
            drawer: payload,
            overlay: !!payload
        };
    },
    [actions.toggleSearch]: state => {
        return {
            ...state,
            searchOpen: !state.searchOpen
        };
    },
    [actions.toggleCompare]: state => {
        return {
            ...state,
            compareOpen: !state.compareOpen
        };
    },
    [actions.addCompare]: (state, {payload}) => {
        console.log('payload',payload)
        const isExist = state.compareProducts.find(e => e.sku === payload.sku);
        return {
            ...state,
            compareProducts: isExist === undefined ? [...state.compareProducts, payload] : state.compareProducts
        };
    },
    [actions.executeSearch]: (state, { payload }) => {
        return {
            ...state,
            query: payload
        };
    },
    [actions.setOnline]: state => {
        return {
            ...state,
            isOnline: true
        };
    },
    [actions.setOffline]: state => {
        return {
            ...state,
            isOnline: false,
            hasBeenOffline: true
        };
    }
};

export default handleActions(reducerMap, initialState);
