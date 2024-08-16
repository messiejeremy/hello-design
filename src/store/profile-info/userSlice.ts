import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface UserState {
  name: string;
  lastName: string;
  role: string;
  email: string;
  photo: string
  isLoggedIn: boolean;
}

const initialState: UserState = {
  name: '',
  email: '',
  photo: '',
  lastName: '',
  role: '',
  isLoggedIn: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    initUserState(state, action: PayloadAction<{ name: string; email: string; photo: string }>) {
      if (state.isLoggedIn) return;

      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
      state.isLoggedIn = true;
    },

    updateName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    updateLastName(state, action: PayloadAction<string>) {
      state.lastName = action.payload;
    },
    updateRole(state, action: PayloadAction<string>) {
      state.role = action.payload;
    },

    updateEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },

    updatePhoto(state, action: PayloadAction<string>) {
      state.photo = action.payload;
    },

    logout(state) {
      state.name = '';
      state.email = '';
      state.lastName = '';
      state.role = '';
      state.photo = '';
      state.isLoggedIn = false;
    }
  }
});

export const { initUserState, updateName, updateLastName, updateRole, updateEmail, updatePhoto, logout } = userSlice.actions;

export default userSlice.reducer;
