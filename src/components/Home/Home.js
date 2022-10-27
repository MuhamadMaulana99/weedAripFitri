import React from 'react';
import Navbar from './Layout/Navbar/Navbar';
import Header from './Layout/Header/Header';
import Couple from './Layout/Couple/Couple';
import Story from './Layout/Story/Story';
import Gallery from './Layout/Gallery/Gallery';
import RSVP from './Layout/RSVP/RSVP';
import BannerOne from './Layout/Banner-1/BannerOne';
import Event from './Layout/Event/Event';
import Friend from './Layout/Friend/Friend';
import Footer from './Layout/Footer/Footer';
import { Atm } from './Layout/Atm/Atm';
import Friends from './Layout/friends/Friends';
import Comment from './Layout/comment/Comment';


const Home = () => {
    return (
        <div>
            <Navbar />
            <div id="home">
                <Header />
            </div>
            <div id="couple">
                <Couple />
            </div>
            <div id="ourStory">
                <Story />
            </div>
            <BannerOne />
            <div id="event">
                <Event />
            </div>
            <div id="friend">
                <Friend />
            </div>
            <div id="gallery">
                <Gallery />
            </div>
            <div>
                <Atm />
            </div>
            <div id="rsvp">
                <RSVP />
            </div>
            <div>
                <Comment />
                
            </div>
            <Footer />
        </div>
    )
}

export default Home;


