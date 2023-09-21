import styled from "styled-components"
import pix3 from "../Assets/both-removebg-preview.png"
import pix from "../Assets/app_logo1.png"
import pix2 from "../Assets/app_logo2.png"

const Download = ()  => {
    return(
        <div>
            <Container>
                <Wrapper>
                    <Text>
                        <Down>Download Boomplay</Down>
                        <Div2>Enjoy millions of tracks on your devices</Div2>
                        
                    </Text>

                    <Boxes>
                        <Box>
                           <Image> <Img src= {pix}/></Image>
                           <Div>Boomplay</Div>
                           <Div1>Enjoy all of the features of Boomplay, stream and<br/> free download music, Boom Mall and Boom games.</Div1>
                           <Image1> <Img src= {pix3}/></Image1>
                        </Box>
                        <Box>
                        <Image> <Img src= {pix2}/></Image>
                           <Div>Boomplay Lite</Div>
                           <Div1>Boomplay Lite brings you the streaming and <br/> download experience you love using fewer <br/>resources and data.</Div1>
                           <Image1> <Img src= {pix3}/></Image1>
                        </Box>
                    </Boxes>
                </Wrapper>
            </Container>
        </div>
    )
}

export default Download;

const Down = styled.div`
// padding: 30px 5% 0;
color: #fff;
font-size: 40px;
font-weight: 800;
text-align: center;
line-height: 48px;
font-family: sans-serif;
`

const Image1 = styled.div`

height: 100px;
width: 300px;
border-radius: 6px;
// background-color: blue;  
display: flex;
align-items: center;
justify-content: center;
`

const Div2 = styled.div`
color: grey;
margin-top: 12px;
text-align: center;
font-size:20px;
`
const Div1 = styled.div`
color: white;
// margin-top: 12px;
text-align: center;
`
const Div = styled.div`
font-size: 25px;
font-weight: 700;
color: white;
margin-top: 12px;
`
const Img = styled.img`
height: 100%;
width: 100%;
// border-radius: 6px;
// background-color: blue;
`
const Image = styled.div`
height: 100px;
width: 100px;
border-radius: 6px;
margin-bottom:10px;
// background-color: blue;
`
const Box1 = styled.div`
height: 400px;
width: 500px;
background-color: red;
display: flex;
align-items: center;
justify-content: center;
`
const Box = styled.div`
height: 380px;
width: 550px;
background-color: #222222;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
const Boxes = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 30px;
`
const Text = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 200px;
width: 100%;
flex-direction: column;
`
const Wrapper = styled.div`
height: 100%;
width: 100%;
background-color: green;
`

const Container = styled.div`
height: 100%;
width: 100%;
background-color:red;

`