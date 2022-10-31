import React from 'react';
import styled from 'styled-components';
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion/dist/es/index";


const Story = () => {
    const [ref, inView] = useInView({
        threshold: 0.5
        // triggerOnce: true
    });
    const paragraph = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.05,
                type: "spring",
                damping: 100,
                mass: 20
            }
        }
    };
    return (
        <div>
            <Flower>
                <img src="image/gif/flowers2.gif" alt="Flowers" />
            </Flower>
            <StoryContainer>
                <Box>
                    <motion.section
                        ref={ref}
                        initial="hidden"

                        animate={inView ? "visible" : "hidden"}
                    > <motion.div variants={paragraph}>
                            <div className="image">
                                <img src="gambar/pengantin/ourStory.jpeg" alt="couple" />
                            </div>
                            <div className="info">
                                <h4>Our Love</h4>
                                <h2>OUR STORY</h2>
                                <p>Masih ingat sekali hari di mana kami berkenalan saat SMP. Dia berinisiatif untuk berkenalan, menjadi sebuah awal dari semua ini. dan pada tanggal 9 april 2016 setelah lulus pada saat Reuni Awalnya ragu dan takut dia hanya bercanda atau serius. Namun dia sungguh datang dan sekarang kami sedang mempersiapkan rencana pernikahan kami.</p>
                                <h3>16 oktober 2022, We Said Yes!</h3>
                                <p>Momen penting ini menandai awal dari hidup bersama. Semoga perjalanan kita berdua menjadi bahagia yang penuh dengan kedamaian dan harmoni, sukacita dan tawa, romansa dan gairah. Semoga cinta abadi kita menjadi permata mahkota yang mengikat semuanya.</p>
                            </div>
                        </motion.div>
                    </motion.section>
                </Box>
            </StoryContainer>


        </div>
    )
}

export default Story;


const Flower = styled.div`

   display: flex;
   justify-content: center;
   align-items: center;
   padding: 0 15px;
   margin: 5rem auto;


    img{
       width: 150px;

        /* @media(min-width:768px){
           width: 150px;
        } */
    }
`;



const StoryContainer = styled.div`

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


    .image{
        text-align:center;
        img{
            width: 100%;
            @media(min-width:600px){
                width: 300px;
                object-fit: cover;
                text-align: right;
            } 
        }

        @media(min-width:1020px){
            text-align: right;
        }
    }


    h4{
        font-family: 'Alex Brush', cursive;
        color: #CB966A;
        font-size: 1.7rem;
    }


    h2{
        margin: 0 0 1.3rem 0;
    }

    h3{
        font-size: 1.5rem;
        font-weight: 500;
        margin-bottom:.7rem;
    }

    p{
        font-size: .9rem;
        font-weight: 500;
        line-height: 1.4rem;
        margin-bottom: 1rem;
    }
`;