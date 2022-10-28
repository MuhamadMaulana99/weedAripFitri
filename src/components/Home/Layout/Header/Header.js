import React from 'react';
import styled from 'styled-components';
import { Timer } from './Timer';


const Header = () => {
    return (
        <>
            <Headers>
                <div className="header__content">
                    <div className='header__content1'>
                        <div className='deco'>
                            <img className='deco1' src="gambar/decoration/foliage-horizontal-1.svg" alt="" />
                        </div>
                        <div className='decor1'>
                            <img src="gambar/decoration/card-decoration-section-3-1.svg" alt="" />
                            <img src="gambar/decoration/card-decoration-section-3-2.svg" alt="" />
                        </div>
                        <h2>Insya Allah Kami Menikah</h2>
                        <h2>Fitri</h2>
                        <h3>&</h3>
                        <h3>Arip</h3>
                        <h4>6 November 2022</h4>
                        <div><Timer/></div>
                    </div>
                </div>
            </Headers>
        </>
    )
}

export default Header;


const Headers = styled.div`

    width: 100%;
    height: 100vh;
    background: url('gambar/pengantin/header.jpeg') no-repeat center/cover;
    position: relative;
    z-index: 1;
    @media(min-width:768px){
        height: 140vh;
        // min-height: 150vh;
    } 
}

    &::before{
        position: absolute;
        content: '';
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: rgba(0,0,0,0.6);
        z-index: -1;
    }

    .decor1{
        width;  50px;
        @media(min-width:768px){

        } 
    }
    .decor1 img{
        width: 20px;
        @media(min-width:768px){
            width: 50px;
        } 
    }
    .deco{
        position: absolute;
        top: 100px;
        left: 0;
        width: 100%;
        @media(min-width:768px){
            width: 0;
        } 
    }
    .deco .deco1{
        width: 100%;
        
        @media(min-width:768px){
            width: 100%;
            
        } 
    }
    .header__content{
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        min-height: 120vh;
        color: #fff;
        font-family: 'Alex Brush', cursive;
        font-size: 35px;
        font-weight: 500;

        @media(min-width:768px){
            font-size: 50px;
            min-height: 150vh;
        } 
    }
    .header__content1{
        color: #fff;
        font-family: 'Alex Brush', cursive;
        // font-family: 'Tangerine', serif;
        font-size: 25px;
        font-weight: 500;

        @media(min-width:768px){
            font-size: 50px;
        } 
    }

`;