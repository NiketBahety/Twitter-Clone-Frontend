import React from 'react';
import Tweet from '../Tweet/Tweet';

const TweetsList = (props) => {
    let tweetsList = props.tweetsList;
    return (
        <div>
            {tweetsList.map((tweet) => {
                return <Tweet key={tweet._id} tweet={tweet}></Tweet>;
            })}
        </div>
    );
};

export default TweetsList;
