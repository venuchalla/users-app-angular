import { createAction, createReducer, on } from "@ngrx/store";

export const storeName = '[User]';

export const UserActions = {
  update: createAction('[Update] User'),
};

export interface User{
    firstName: String;
    lastName : String;
}

export const initialState: User = { firstName : "Venu",
    lastName :"Challa"

};

export const userReducer = createReducer(
  initialState,
  on(UserActions.update, (state) => {
    console.log("user state ===> ",state)
    return state;
  })
);