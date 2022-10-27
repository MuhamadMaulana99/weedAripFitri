import React from 'react';
import styled from 'styled-components';


const Story = () => {
    return (
        <div>
            <Flower>
                <img src="image/gif/flowers2.gif" alt="Flowers" />
            </Flower>

            <StoryContainer>
                <Box>
                    <div className="image">
                        <img src="gambar/pengantin/ourStory.jpeg" alt="couple" />
                    </div>
                    <div className="info">
                        <h4>Our Love</h4>
                        <h2>OUR STORY</h2>
                        <p>Curabit aliquet orci elit genes tristique lorem commodo vitae. Tuliaum tincidunt nete sede gravida aliquam, neque libero hendrerit magna, sit amet mollis lacus ithe maurise. <br/> 
                        Dunya erat volutpat edat themo the druanye semper.Luality fringilla duiman at elit vinibus viverra nec a lacus themo the druanye sene sollicitudin mi suscipit non sagie the fermen. <br/>
                        Phasellus viverra tristique justo duis vitae diam neque nivamus ac est augue artine aringilla dui at elit finibus viverra nec a lacus. Nedana themo eros odio semper soe suscipit non. Curabit aliquet orci elit genes tristique.</p>
                        <h3>Dec 5th, 2021, We Said Yes!</h3>
                        <p>Luality fringilla duiman at elit finibus viverra nec a lacus themo the druanye sene sollicitudin mi suscipit non sagie the fermen.</p>
                    </div>
                </Box>
            </StoryContainer>            
        </div>
    )
}

export default Story;


const Flower = styled.div `

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



const StoryContainer = styled.div `

    max-width: 1140px;
    margin: 2rem auto;
    padding: 0 15px;

`;
const Box = styled.div `

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