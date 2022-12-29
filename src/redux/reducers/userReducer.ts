import { createSlice } from '@reduxjs/toolkit';

//cria slice, coloca um nome no slice, coloca o estado inicial do SLICE, e coloca as actions. as actions sao metodos

export const slice = createSlice({
    name: 'user',
    initialState: {
        name: 'Breno',
        age: 27
    },
    reducers: {
        setName: (state, action) => {
            state.name = action.payload;
        },
        setAge: (state, action) => {
            state.age = action.payload;
        },

    }
});

export const { setAge, setName } = slice.actions
export default slice.reducer;