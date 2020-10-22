import * as fromActions from './actions';

export const initialState = {
    loaded: false,
    loading: false,
    data: [
        { label: 'To do 1', complete: false }
    ]
};

export function reducer(state = initialState, action: { type: string; payload: any }) {
    switch (action.type) {
        case fromActions.ADD_TODO: {
            const todo = action.payload;
            const data = [...state.data, todo ];

            return {
                ...state,
                data: [...data]
            }
        }

        case fromActions.REMOVE_TODO: {
            const todo = action.payload;
            const data = state.data.filter((todoItem) => todoItem.label !== todo.label );

            return {
                ...state,
                data
            }
        }
    }

    return state;
}