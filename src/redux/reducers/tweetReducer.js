const tweetReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_ALL': {
            return action.data.data.data.tweets;
        }
        case 'POST_TWEET': {
            return [action.data.data.data.tweet, ...state];
        }
        case 'RETWEET': {
            const stateCopy = [...state];
            for (let i = 0; i < stateCopy.length; i++) {
                if (stateCopy[i]._id === action.data.data.data.updatedTweet._id)
                    stateCopy[i] = action.data.data.data.updatedTweet;
            }
            return stateCopy;
        }
        case 'LIKE': {
            const stateCopy = [...state];
            for (let i = 0; i < stateCopy.length; i++) {
                if (stateCopy[i]._id === action.data.data.data.updatedTweet._id)
                    stateCopy[i] = action.data.data.data.updatedTweet;
            }
            return stateCopy;
        }
        case 'COMMENT': {
            const stateCopy = [...state];
            for (let i = 0; i < stateCopy.length; i++) {
                if (stateCopy[i]._id === action.data.id)
                    stateCopy[i].comments.push(
                        action.data.res.data.data.comment
                    );
            }
            return stateCopy;
        }
        case 'DELETE_TWEET': {
            let stateCopy = [...state];
            stateCopy = stateCopy.filter((a) => a._id !== action.data.id);
            return stateCopy;
        }
        default:
            return state;
    }
};

export default tweetReducer;
