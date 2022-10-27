import React from 'react';
import styled from 'styled-components';


const Header = () => {
    return (
        <>
            <Headers>
                <div className="header__content">
                    <div className='header__content1'>
                        <div className='decor1'>
                            <img src="gambar/decoration/card-decoration-section-3-1.svg" alt="" />
                            <img src="gambar/decoration/card-decoration-section-3-2.svg" alt="" />
                        </div>
                        <div className='decor'>
                            <img src="gambar/decoration/foliage-horizontal-1.svg" alt="" />
                        </div>
                        <h2>Insya Allah Kami Menikah</h2>
                        <h2>Fitri</h2>
                        <h3>&</h3>
                        <h3>Arip</h3>
                        <h4>6 November 2022</h4>
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
        @media(min-width:768px){

        } 
    }
    .decor1 img{
        width: 20px;
        @media(min-width:768px){
            width: exp;
        } 
    }
    .decor{
        position: absolute;
        margin-top: 100px;
        width: 10px;
        top: 0;
        left: 0;
        @media(min-width:768px){
            display: flex;
            left: 48rem;
            margin-top: 500px;
        } 
    }
    .decor img{
       
        @media(min-width:768px){
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
        font-size: 25px;
        font-weight: 500;

        @media(min-width:768px){
            font-size: 50px;
        } 
    }

`;