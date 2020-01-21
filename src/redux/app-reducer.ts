import {getAuthUserData} from "./auth-reducer";
import * as actions from "./app-actions";

type InferValueTypes<T> = T extends { [key: string]: infer U }
    ? U : never;

type ActionTypes = ReturnType<InferValueTypes<typeof actions>>;

let initialState = {
    initialized: false
};

export const appReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case 'INITIALIZED_SUCCESS':
            return {
                ...state,
                initialized: true
            };

        default:
            return state;
    }
};

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData());

    Promise.all([promise])
        .then(() => {
            dispatch(actions.initializedSuccess());
        });
};
