//Menu module actions
export default {

    //Commit setActive mutation with true value
    activateMenu({commit}) {
        commit('setActive', true);
    },

    //Commit setActive mutation with false value
    desactivateMenu({commit}) {
        commit('setActive', false);
    }
}