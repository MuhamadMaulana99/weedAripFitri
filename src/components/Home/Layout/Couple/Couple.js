import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Couple = () => {

    return (
        <div>
            <Flower>
                <img src="image/gif/flowers.gif" alt="Flowers" />
            </Flower>
            <CoupleContainer>
                <Box>
                    <Bride>
                        <div className="info">
                            <h2>Fitri Handayani</h2>
                            <h4>Anak Ke Empat</h4>
                            <h4>Dari</h4>
                            <h4>Bapak Rohmat & Ibu Naelah</h4>
                            <p>Aku ingin mencintaimu dengan sederhana
                                dengan kata yang tak sempat diucapkan
                                kayu kepada api yang menjadikannya abu.</p>
                            <div className="social">
                                <FontAwesomeIcon icon={faFacebookF} className="icon" />
                                <FontAwesomeIcon icon={faTwitter} className="icon twitter" />
                                <FontAwesomeIcon icon={faInstagram} className="icon" />
                            </div>
                        </div>
                        <div className="image">
                            <img src="gambar/fitri.jpg" alt="Arip Susanto" />
                        </div>
                    </Bride>
                    <Groom>
                        <div className="image">
                            <img src="gambar/arip.jpg" alt="Fitri Handayani" />
                        </div>
                        <div className="info">
                            <h2>Arip Susanto</h2>
                            <h4>Anak Ke Tiga</h4>
                            <h4>Dari</h4>
                            <h4>Bapak Sutarjo/ujo & Ibu Rosih</h4>
                            <p>Aku mungkin tidak selalu bersamamu
                                Tapi saat kita berjauhan
                                Ingatlah kamu akan bersamaku
                                Tepat dalam hatiku</p>
                            <div className="social">
                                <FontAwesomeIcon icon={faFacebookF} className="icon" />
                                <FontAwesomeIcon icon={faTwitter} className="icon twitter" />
                                <FontAwesomeIcon icon={faInstagram} className="icon" />
                            </div>
                        </div>
                    </Groom>
                </Box>
            </CoupleContainer>
        </div>
    )
}

export default Couple;



const Flower = styled.div`

   display: flex;
   justify-content: center;
   align-items: center;
   padding: 0 15px;
   margin: 2rem auto 5rem auto;

    img{
       width: 150px;

        /* @media(min-width:768px){
           width: 150px;
        } */
    }
`;


const CoupleContainer = styled.div`

    max-width: 1140px;
    margin: 2rem auto;
    padding: 0 15px;

`;
const Box = styled.div`

    display: grid;
    grid-gap: 2em;
    
    @media(min-width:1020px){
        display: grid;
        grid-gap: 2em;
        grid-template-columns: repeat(2, 1fr);
    }


    

    h4{
        font-family: 'Alex Brush', cursive;
        color: #C75B89;
        font-size: 1.5rem;
        margin: .5rem  0 1rem 0;
    }

    p{
        font-size: .9rem;
        font-weight: 500;
        line-height: 1.4rem;
        margin-bottom: 1rem;
    }


    .icon{
        width: 40px;
        height: 40px;
        background: #fff;
        padding: 12px;
        border-radius: 50%;
        color: #999;
        cursor: pointer;
        transition: all .6s ease;

        &:hover{
            background: #cb966a;
            color: #fff;
        }
    }

    .twitter{
        margin: 0 1rem;
    }

`;
const Bride = styled.div`
    display: flex;


    .image {
        margin-left: 20px;
        img{
            width: 150px;
            border-radius: 50%;
        }

        @media(max-width:1020px){
            margin: 0;
        } 
    }

    .info{
        text-align: right;

        @media(max-width:1020px){
            text-align: center;
        }
    }

   


    @media(max-width:1020px){
        flex-direction: column;
        text-align: center;
        .image{
            order: -1;
        }
    } 
    

`;
const Groom = styled.div`
    display: flex;


    .image {
        margin-right: 20px;
        img{
            width: 150px;
            border-radius: 50%;
        }

        @media(max-width:1020px){
            margin: 0;
        } 
    }

    @media(max-width:1020px){
        flex-direction: column;
        text-align: center;
    } 




`;

