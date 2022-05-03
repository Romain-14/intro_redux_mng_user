import { LOAD_ALL_USERS, ADD_USER } from "../type";

const INITIAL_STATE = {
    isLogged: false,
    datas: [],
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOAD_ALL_USERS:
            return {
                ...state,
                isLogged: false,
                datas: [
                    { id: 1, alias: "Jako", hobby: "pmu" },
                    { id: 2, alias: "Mikeline", hobby: "manger chinois" },
                    { id: 3, alias: "Morgana", hobby: "promener son clebard" },
                    { id: 4, alias: "Bob", hobby: "feuille, toncar, herbes" },
                ],
            };
        case ADD_USER:
            return {
                ...state,
                isLogged: false,
                datas: [
                    ...state.datas,
                    { id: state.datas.length + 1, ...action.payload },
                ],
            };

        default:
            return state;
    }
};

export default userReducer;
