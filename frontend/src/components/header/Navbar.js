import React, {useState} from 'react'
import styled from 'styled-components'
import BurguerButton from './BurguerButton'
import {Link} from "react-router-dom";
import logo from "../../assets/logo/fqtlogo.png";

function Navbar() {

    const [clicked, setClicked] = useState(false)
    const handleClick = () => {
        setClicked(!clicked)
    }
    return (
        <>
            <NavContainer>
                <div className='brand'>
                    <Link to="/">
                        <div className='flexBrand'>
                            <img className="logofqt" src={logo} alt={"Quiero Trabajo logo"}/>
                        </div>
                    </Link>

                </div>
                <div className={`links ${clicked ? 'active' : ''}`}>
                    <div className={`links ${clicked ? 'active' : ''}`}>

                        <Link to="/new">
                            <button>AÑADIR NUEVO</button>
                        </Link>
                    </div>
                </div>
                <div className='burguer'>
                    <BurguerButton clicked={clicked} handleClick={handleClick}/>
                </div>
                <BgDiv className={`initial ${clicked ? ' active' : ''}`}/>
            </NavContainer>
        </>
    )
}

export default Navbar

const NavContainer = styled.nav`

.logofqt{
    height: 50px;
    width: auto;
    }
.flexBrand{
    display: flex;
    align-items: center;
}       
    
  h2{
   
    color: white;
    font-size: 20px;
    vertical-align: middle ;
  }
  .button{
    width: 100px;
    border-radius: 5px;
  }
  
  button:hover{
    background: #cc1010;
  }
  
  padding: .4rem;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a{
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }
  .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    
    a{
      color: white;
      font-size: 2rem;
      display: block;
    }
    
 
    
    @media(min-width: 768px){
      position: initial;
      margin: 0;
      a{
        font-size: 1rem;
        color: white;
        display: inline;
      }
      display: block;
    }
  }
  .links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    
    a{
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
    }
  }
  .burguer{
    @media(min-width: 768px){
      display: none;
    }
  }
`

const BgDiv = styled.div`
  background-color: #222;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all .6s ease ;
  
  &.active{
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`