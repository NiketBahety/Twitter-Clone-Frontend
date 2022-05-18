const userReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_ALL_USERS': {
            return action.data.data.data.users;
        }
        case 'EDIT_PROFILE': {
            const copyState = [...state];
            for (let i = 0; i < copyState.length; i++) {
                if (copyState[i]._id === action.data.data.data.updatedUser._id)
                    copyState[i] = action.data.data.data.updatedUser;
            }
            localStorage.setItem(
                'Profile',
                JSON.stringify(action.data.data.data.updatedUser)
            );
            return copyState;
        }
        case 'FOLLOW': {
            const copyState = [...state];
            for (let i = 0; i < copyState.length; i++) {
                if (copyState[i]._id === action.data.data.data.updatedUser._id)
                    copyState[i] = action.data.data.data.updatedUser;
            }
            localStorage.setItem(
                'Profile',
                JSON.stringify(action.data.data.data.updatedUser)
            );
            return copyState;
        }
        default:
            return state;
    }
};

export default userReducer;
