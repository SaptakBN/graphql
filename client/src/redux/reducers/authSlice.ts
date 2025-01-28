import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/redux";
import { LoginResponse } from "@/GraphQL/generated/graphql";

interface authInterface {
  isAuthenticated: boolean;
  session: LoginResponse | null;
}

const initialState: authInterface = {
  isAuthenticated: false,
  session: null,
};

export const authSlice = createSlice({
  name: "auth",

  initialState,
  reducers: {
    login: (store: authInterface, action: PayloadAction<LoginResponse>) => {
      store.isAuthenticated = true;
      store.session = action.payload;
    },

    logout: (store: authInterface) => {
      store.isAuthenticated = false;
      store.session = null;
    },

    updateProfile: (store: authInterface, action: PayloadAction<LoginResponse>) => {
      const existingUser = store.session!;
      const newUser = { ...existingUser, ...action.payload };
      store.session = newUser;
    },
  },
});

export const { login, logout } = authSlice.actions;

export const selectAuth = (store: RootState) => store.auth;

export const authReducer = authSlice.reducer;
