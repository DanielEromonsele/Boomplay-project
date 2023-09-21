import styled from "styled-components"
import pix from "../Assets/boom.webp"
import pix2 from "../Assets/boom1.webp"
import pix3 from "../Assets/boom2.webp"
import pix4 from "../Assets/boom3.webp"
import pix5 from "../Assets/boom4.webp"
import pix6 from "../Assets/boom 5.webp"
import {RiPlayCircleFill} from "react-icons/ri"


const Hero = () =>{
  return(
    <div>
        <Container>
          <Wrapper>
          <h2>Best New</h2>
            <CardHolder>
              <Card>
                <Img src = {pix} />
                <p>Daily Trending</p>
              </Card>
              <Card>
                <Img src = {pix2} />
                <p>Fresh Afrobeats</p>
              </Card>
              <Card>
                <Img src = {pix3} />
                <p>Fresh Hiphop</p>
              </Card>
              <Card>
                <Img src = {pix4} />
                <p>Fresh Pop</p>
              </Card>
              <Card>
                <Img src = {pix5} />
                <p>Remembering Imole</p>
              </Card>
              <Card>
                <Img src = {pix6} />
                <p>New Global Music</p>
              </Card>
            
            </CardHolder>
            <h2>CULTURED BY ARTISTS</h2>
            <CardHolder>
              <Card>
                <Img src = {pix} />
                <p>Daily Trending</p>
              </Card>
              <Card>
                <Img src = {pix2} />
              </Card>
              <Card>
                <Img src = {pix3} />
              </Card>
              <Card>
                <Img src = {pix4} />
              </Card>
              <Card>
                <Img src = {pix5} />
              </Card>
              <Card>
                <Img src = {pix6} />
              </Card>
            
            </CardHolder>
            <h2>DJ MIX</h2>
            <CardHolder>
              <Card>
                <Img src = {pix} />
              </Card>
              <Card>
                <Img src = {pix2} />
              </Card>
              <Card>
                <Img src = {pix3} />
              </Card>
              <Card>
                <Img src = {pix4} />
              </Card>
              <Card>
                <Img src = {pix5} />
              </Card>
              <Card>
                <Img src = {pix6} />
              </Card>
            
            </CardHolder>
            <h2>Users Choice</h2>
            <CardHolder>
              <Card>
                <Img src = {pix} />
              </Card>
              <Card>
                <Img src = {pix2} />
              </Card>
              <Card>
                <Img src = {pix3} />
              </Card>
              <Card>
                <Img src = {pix4} />
              </Card>
              <Card>
                <Img src = {pix5} />
              </Card>
              <Card1>
                <Img src = {pix6} />
                <Icon></Icon>
              </Card1>
            
            </CardHolder>
          </Wrapper>
        </Container>
    </div>
  )
}

export default Hero;

const Icon = styled(RiPlayCircleFill)`
// padding: 10px;
cursor: pointer;
transition: all 350ms;
opacity: 0;
  position: absolute;
  right: 0;
  color: white;
  width: 100px;
  height: 100px;
  
`
const Img = styled.img`
height:100%;
width: 100%;
border-radius: 8px;

`
const Card1 = styled.div`
height: 200px;
width: 200px;
background-color: green;
border: 1px light silver;
border-radius: 8px;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
p{
  color: white;
  font-size: 5px;
}
&: hover{
  ${Icon}{
    background-color: black;
    opacity: 1;
  }
}

`
const Card = styled.div`
height: 200px;
width: 200px;
background-color: green;
border: 1px light silver;
border-radius: 8px;
cursor: pointer;
p{
  color: grey;
}
&: hover{
  ${Icon}{
    background-color: black;
    opacity: 1;
  }
}

`
const CardHolder = styled.div`
display: flex; 
// align-items: center;
justify-content: space-between;
background-color: black;
height: 250px;
width: 100%;

flex: wrap;
`

const Wrapper = styled.div`
width: 100%;
// height: 100%;
background-color: black;
h2{
  color: white;
}
// display: flex;
// align-items: center;
// justify-content: center;
`

const Container = styled.div`
// height: 100vh;
width: calc(100vw - 280px);
background-color: blue;
display: flex;
align-items: center;
justify-content: end;
`