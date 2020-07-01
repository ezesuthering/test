//Menu module actions
export default {

    activateMenu({commit}) {
        commit('setActive', true);
    },

    desactivateMenu({commit}) {
        commit('setActive', false);
    }
}