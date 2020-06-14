const state = {
    name: window.localStorage.getItem('currentCityName') || '北京',
    id: window.localStorage.getItem('currentCityId') || 1
};

const actions = {

};

const mutations = {
    CITY_INFO(state, payload) {
        state.name = payload.name;
        state.id = payload.id;
    }
};

export default {
    namespaced: true,
    state,
    actions,
    mutations
}