import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
        <Section 
          model="Model S"
          description="Order Online for"
          link="Touchless Delivery"
          image="model-s.jpg"
          LeftButtonText="Custom Order"
          RightButtonText="EXISTING INVENTORY"
        />
        <Section 
          model="Model 3"
          description="Order Online for"
          link="Touchless Delivery"
          image="model-3.jpg"
          LeftButtonText="Custom Order"
          RightButtonText="EXISTING INVENTORY"
        />
        <Section 
          model="Model X"
          description="Order Online for"
          link="Touchless Delivery"
          image="model-x.jpg"
          LeftButtonText="Custom Order"
          RightButtonText="EXISTING INVENTORY"
        />
        <Section 
          model="Model Y"
          description="Order Online for"
          link=" Touchless Delivery"
          image="model-y.jpg"
          LeftButtonText="Custom Order"
          RightButtonText="EXISTING INVENTORY"
        />
        <Section 
          model="Solar Panel"
          description="Lowest Cost Solar Panels in America"
          image="solar-panel.jpg"
          LeftButtonText="ORDER NOW"
          RightButtonText="LEARN MORE
"
        />
        <Section 
          model="Solar Roof"
          description="Produce Clean Energy From Your Roof"
          image="solar-roof.jpg"
          LeftButtonText="ORDER NOW"
          RightButtonText="LEARN MORE
"
        />
        <Section 
          model="Accessories"
          image="accessories.jpg"
          LeftButtonText="Order Now"
        />
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
`