import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/userReducer'
import themeReducer from './reducers/themeReducer';


export const store = configureStore({
    reducer: {
        user: userReducer,
        theme: themeReducer
    }
});

//esse rootstate vai retornar todos types de todos reducers.
export type RootState = ReturnType<typeof store.getState>;