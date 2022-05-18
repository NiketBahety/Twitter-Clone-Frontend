const authReducer = (state = {}, action) => {
    switch (action.type) {
        case 'AUTH': {
            localStorage.setItem(
                'Profile',
                JSON.stringify(action.data.data.data.user)
            );
            return action.data;
        }
        case 'LOGOUT': {
            return state;
        }
        default:
            return state;
    }
};

export default authReducer;
