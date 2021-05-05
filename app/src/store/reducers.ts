
import types from "./actionTypes";

export interface State {
  token: string;
  sessionCookie: string;
  username: string;
  userData: any;
  showPasswordUnlock: boolean;
  hasUser: boolean;
  password: string;
  mnemonic: string;
  unlocked: boolean;
}

const initialState: State = {
  token: "",
  sessionCookie: "",
  username: "",
  userData: {},
  showPasswordUnlock: false,
  hasUser: false,
  password: null,
  mnemonic: null,
  unlocked: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {  
    
    default:
      return state;
  }
};

export { initialState, reducer };
