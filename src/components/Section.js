import React from 'react'
import styled from 'styled-components'
// import Fade from 'react-reveal/Fade';


function Section({image, model, description, link, LeftButtonText, RightButtonText}) {
    
  return (
    <Wrap bgImage={image}>
        <TextItem>
            <h1>{model}</h1>
            <p>{description} <a href='#'>{link}</a> </p>
        </TextItem>


        <Buttons>
            <ButtonGroup>

                <LeftButton>
                    {LeftButtonText} 
                </LeftButton>
               { RightButtonText &&<RightButton>
                    {RightButtonText }
                </RightButton>}

                
            </ButtonGroup>

            <DownArrow src="/images/down-arrow.svg" />
        </Buttons>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: ${ props => `url("/images/${props.bgImage}")`};


`

const TextItem = styled.div`
    padding-top: 15vh;
    text-align: center;
    h1{
        font-weight: 700;
    }
`
const ButtonGroup = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .3s ease;
    @media(max-width: 700px){
        flex-direction: column;
    }
`

const LeftButton = styled.div`
    background-color: rgba(0,0,0, 0.7);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    text-transform: uppercase;
    font-size: 12px;
    margin: 1em;                      
    cursor: pointer;
`
const RightButton = styled(LeftButton)`
    background: white;
    color: black;
`

const DownArrow = styled.img`
    height: 40px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
`

const Buttons = styled.div`

`