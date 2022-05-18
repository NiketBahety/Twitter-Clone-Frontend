import React from 'react';
import Button from '../Button/Button';
import Avatar from '../Avatar/Avatar';
import './rightsidebar.css';

const RightSideBar = () => {
    return (
        <div className="right-side-bar">
            <div className="right-side-bar-div">
                <div className="searchbar-div">
                    <input
                        type="text"
                        className="search-bar"
                        placeholder="Search Twitter"
                    />
                </div>
                <div className="right-side-bar-sub-bar">
                    <div className="whats-happening-div">
                        <h1 className="right-side-bar-heading">
                            What's happening
                        </h1>
                        <div className="news-tab">
                            <div className="news-tab-header">
                                Sports&nbsp; LIVE
                            </div>
                            <div className="news-tab-headline">
                                India lifts the Thomas Cup Trophy for the first
                                time in history
                            </div>
                        </div>
                        <div className="news-tab">
                            <div className="news-tab-header">
                                India National News&nbsp; LIVE
                            </div>
                            <div className="news-tab-headline">
                                SC to hear plea on Gyanvapi mosque complex
                                survey
                            </div>
                        </div>
                        <div className="news-tab">
                            <div className="news-tab-header">
                                Politics&nbsp; Trending
                            </div>
                            <div className="news-tab-headline">
                                #KarachiBlast
                            </div>
                        </div>
                        <div className="news-tab">
                            <div className="news-tab-header">
                                Technology&nbsp; Trending
                            </div>
                            <div className="news-tab-headline">
                                #TwitterExposed
                            </div>
                        </div>
                        <div className="whats-happening-footer">Show more</div>
                    </div>
                    <div className="who-to-follow-div">
                        <h1 className="right-side-bar-heading">
                            Who to follow
                        </h1>
                        <div className="news-tab person-tab">
                            <Avatar
                                name="Niket"
                                id="62839e42b7fa56c84e0da245"
                            ></Avatar>
                            <div className="person-name-div">
                                <p className="person-name">Niket Bahety</p>
                                <p className="person-username">@NiketBahety</p>
                            </div>
                            <Button
                                text="Follow"
                                px="20"
                                py="7"
                                fontSize="15px"
                                hoverFill="rgb(215,219,220)"
                            ></Button>
                        </div>
                        <div className="news-tab person-tab">
                            <Avatar
                                name="Rishab"
                                id="62839e42b7fa56c84e0da245"
                            ></Avatar>
                            <div className="person-name-div">
                                <p className="person-name">Rishab Dugar</p>
                                <p className="person-username">@RishabDugar</p>
                            </div>
                            <Button
                                text="Follow"
                                px="20"
                                py="7"
                                fontSize="15px"
                                hoverFill="rgb(215,219,220)"
                            ></Button>
                        </div>
                        <div className="news-tab person-tab">
                            <Avatar
                                name="Nikunj"
                                id="62839e42b7fa56c84e0da245"
                            ></Avatar>
                            <div className="person-name-div">
                                <p className="person-name">Nikunj Bahety</p>
                                <p className="person-username">@NikunjBahety</p>
                            </div>
                            <Button
                                text="Follow"
                                px="20"
                                py="7"
                                fontSize="15px"
                                hoverFill="rgb(215,219,220)"
                            ></Button>
                        </div>
                    </div>
                    <div className="footer-div">
                        <span>Terms of Service</span>
                        <span>Privacy Policy</span>
                        <span>Cookie Policy</span>
                        <span>Accessibility</span>
                        <span>Ads info</span>
                        <span>More ...</span>
                        <span>&copy; 2022 Twitter, Inc.</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightSideBar;
