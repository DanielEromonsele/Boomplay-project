import React, {useState} from 'react'
import styled from "styled-components"
// import GlobalButton from '../Pages/GlobalButton'
import {FiMenu} from "react-icons/fi"
import {IoIosArrowDown} from "react-icons/io"
import {TbMessageCircle2Filled} from "react-icons/tb"
import {TbBrandNextjs} from "react-icons/tb"
import {SiGoogleanalytics} from "react-icons/si"
import {HiTemplate} from "react-icons/hi"
import {GoGlobe} from "react-icons/go"
import {GrStorage} from "react-icons/gr"
import {ImCross} from "react-icons/im"
import { IconType } from 'react-icons/lib'

const Header = () => {

    const [arrow, setarrow] = useState(false)
    const Dropdown = ()=>{
        setarrow(!arrow)
    }

    const [show, setShow] = useState(false)

    const Toggle = () => {
        setShow(!show);
    }
  return (
    <Container>
          <Wrapper>
              <Wrap>
                  <Holder>
                  <svg
                width="76"
                height="40"
                viewBox="0 0 76 65"
                fill="none" xmlns="http://www.w3.org/2000/svg"><path
                          d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="#ffffff" /></svg>
                  
                  <h1>Vercel</h1>
            </Holder>

              <NavHolder>
                  
                  
                  <Ick onClick={Dropdown}>
                  <Nav>Features
                  <IoIosArrowDown/>
                  </Nav>
                  </Ick>
                  {arrow ? (
                <Card1>
                   <Card2>
                   <Box>
                    <Hold>
                    <Log><TbMessageCircle2Filled/></Log>
                    <P>Previews</P>
                    </Hold>
                    
                    <L>Zero config,more innovation</L>
                   </Box>


                    <Box1>
                        <Hold1>
                        <Log1><TbBrandNextjs/></Log1>
                        <P1>Next.js</P1>
                        </Hold1>

                        <L1>The native Next.js platform</L1>
                    </Box1>


                    <Box2>
                        <Hold2>
                        <Log2><SiGoogleanalytics/></Log2>
                        <P2>Analytics</P2>
                        </Hold2>

                        <L2>Real-time insights, peak performance</L2>
                        </Box2>
                   </Card2>
                   <Card3>


                   <Box3>
                    <Hold3>
                    <Log3><HiTemplate/></Log3>
                    <P3>Infrastructure</P3>
                    </Hold3>

                    <L3>Always fast, always on line</L3>
                   </Box3>

                    <Box4>
                        <Hold4>
                        <Log4><GoGlobe/></Log4>
                        <P4>Edge Function</P4>
                        </Hold4>

                        <L4>Dynamic function, Static speed</L4>
                    </Box4>

                    <Box5>
                        <Hold5>
                        <Log5><GrStorage/></Log5>
                        <P5>Storage</P5>
                        </Hold5>

                        <L5>srverless storage for frontend</L5>
                    </Box5>
                   </Card3>
              </Card1>
              ): null}
                  
                  
                  <Navs>Docs</Navs>
                  <Navs>Templates</Navs>
                  <Navs>Integrations</Navs>
                  <Navs>Customers</Navs>
                  <Navs>Enterprise</Navs>
                  <Navs>Pricing</Navs>
              </NavHolder>
              </Wrap>

              <ButtonHolder>
                  <Navs>Contact</Navs>
                  {/* <GlobalButton
                      text="Login"
                      bcc="gray"
                      color="white" />
                 <GlobalButton text="Sign iUp" bcc="#fff" color="#000"/> */}
              </ButtonHolder>

              <Icon onClick={Toggle}>
                {show? <ImCross/> : <FiMenu/> }
                {/* <FiMenu /> */}
              </Icon>

              {show ? (
                <Card>
                    <MenuBtnHolder>
                    <MenuBtn>Login</MenuBtn>
                    <MenuBtn2>Sign up</MenuBtn2>

                    <MenuText>Features</MenuText>
                    <hr/>
                    <MenuText2>Docs</MenuText2>
                    <hr/>
                    <MenuText3>intergrations</MenuText3>
                    <hr/>
                    <MenuText4>Customers</MenuText4>
                    <hr/>
                    <MenuText5>Enterprise</MenuText5>
                    <hr/>
                    <MenuText6>Pricing</MenuText6>
                    <hr/>
                    <MenuText7>Contact</MenuText7>
                    <hr/>
                    <MenuText8>Templates</MenuText8>
                    <hr/>
                    </MenuBtnHolder>

                    
              </Card>
              ): null}
        </Wrapper>
    </Container>
  )
}

export default Header
const MenuText8 = styled.div`
color:gray;
`
const MenuText7 = styled.div`
color:gray;`
const MenuText6 = styled.div`
color:gray;`
const MenuText5 = styled.div`
color:gray;`
const MenuText4 = styled.div`
color:gray;`
const MenuText3 = styled.div`
color:gray;`

const MenuText2 = styled.div`
color:gray;`

const MenuText = styled.div`
/* background-color: burlywood; */
    font-size: 20px;
    font-weight: bold;
    color: white;
    padding-top: 10px;
`

const MenuBtn2 = styled.div`
    width: 250px;
   height: 40px;
   background-color: #ffffff;
   padding-left: 45%;
   padding-top: 10px;
   border-radius: 10px;
   
`

const MenuBtn = styled.div`
   width: 250px;
   height: 40px;
   background-color: #000000;
   margin-bottom: 10px;
   color: white;
   padding-left: 45%;
   padding-top: 10px;
   font-weight: 400;
   border-radius: 10px;
   border: 1px solid white;

   &:hover{
    cursor: pointer;
    background-color: #3f3d3d;
   }
`
const MenuBtnHolder = styled.div`
    /* background-color: brown; */
    width: 90%;
height: 480px;
margin-left: 20px ;

`
const L5 = styled.div`

color:gray;
`

const P5 = styled.div`
margin-left:10px;
color:white;

`

const Log5 = styled.div`
font-size:20px;

`

const Hold5 =styled.div`

display:flex;
`

const L4 = styled.div`

color:gray;
`

const P4 = styled.div`
margin-left:10px;
color:white;

`

const Log4 = styled.div`
font-size:20px;
`

const Hold4 =styled.div`

display:flex;
`

const L3 = styled.div`

color:gray;
`

const P3 = styled.div`
margin-left:10px;
color:white;

`

const Log3 = styled.div`
font-size:20px;
`

const Hold3 =styled.div`

display:flex;
`

const L2 = styled.div`

color:gray;
`

const P2 = styled.div`
margin-left:10px;
color:white;

`

const Log2 = styled.div`
font-size:20px;
`

const Hold2 =styled.div`

display:flex;
`

const L1 = styled.div`

color:gray;
`

const P1 = styled.div`
margin-left:10px;
color:white;


`

const Log1 = styled.div`
font-size:20px;
`

const Hold1 =styled.div`

display:flex;
`

const L = styled.div`

color:gray;
`

const P = styled.div`
margin-left:10px;
color:white;

`

const Log = styled.div`
font-size:20px;
`

const Hold =styled.div`

display:flex;
`

const Card3 = styled.div`
width:48%;
height: 260px;
// background-color:blue;


`

const Card2 = styled.div`
width:48%;
height: 260px;
// background-color:green;
margin-left:10px;
`

const Box5= styled.div`
// background-color: green;
width:100%;
height: 33.3%;
`

const Box4= styled.div`
// background-color: red;
width:100%;
height: 33.3%;
`

const Box3= styled.div`
// background-color: navy blue;
width:100%;
height: 33.3%;

`

const Box2= styled.div`
// background-color: brown;
width:100%;
height: 33.3%;
`

const Box1= styled.div`
// background-color: pink;
width:100%;
height: 33.3%;
`

const Box = styled.div`
// background-color: brown;
width:100%;
height: 33.3%;

`

const Card1 = styled.div`
width: 47%;
height: 270px;
background-color: #000000;
border: 1px solid silver;
opacity: 90%;
position: absolute;
margin-right:40%;
top: 80px;
right: 0;
border-radius:15px;
display:flex;
align-items:center;

`

const Ick = styled.div`
justify-content:space-evenly;
margin-left: 40px;
`

const Nav = styled.div`

color: gray;
margin-right: 35px;
transition: all ease-in-out 350ms;
cursor: pointer;
&:hover{
    color: #fff;
}
`
const Card = styled.div`
width: 100%;
height: 500px;
background-color: #000000;
position: absolute;
top: 80px;
right: 0;
`
const Icon = styled.div`
display: flex;
align-items: center;
color: grey;
font-size: 30px;
cursor: pointer;

@media screen and (max-width: 768px) {
      display: flex;
}
display: none;
`
const ButtonHolder = styled.div`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`
const Wrap = styled.div`
    display: flex;
    align-items: center;
`
const Navs = styled.div`
    color: gray;
    margin-right: 35px;
    transition: all ease-in-out 350ms;
    cursor: pointer;
    &:hover{
        color: #fff;
    }
`
const NavHolder = styled.div`
    display: flex;
    align-items: center;
    margin-left: 20px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`
const Holder = styled.div`
    display: flex;
    align-items: center;
    h1{
        color: #fff;
        margin-right: 15px;
        font-size: 20px;
    }
`
const Wrapper = styled.div`
    width: 95%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
`

const Container = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    background-color: #000;
    justify-content: center;
`