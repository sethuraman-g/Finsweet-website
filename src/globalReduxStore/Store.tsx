import { configureStore, createSlice } from "@reduxjs/toolkit";

interface EmailStateType {
  email?: string;
}

const initialEmailData: EmailStateType = {
  email: "",
};

const emailSlice = createSlice({
  name: "EmailData",
  initialState: initialEmailData,
  reducers: {
    updateEmailData: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateEmailData } = emailSlice.actions;

export const store = configureStore({
  reducer: {
    emailData: emailSlice.reducer,
  },
});
