import React, {useState} from 'react'
import styled from 'styled-components'
import BurguerButton from './BurguerButton'
import {Link} from "react-router-dom";
import logo from "../../assets/logo/fqtlogo.png";
import './Navbar.css';



function Navbar() {
    const [requiresUpdate, setRequiresUpdate] = useState(true);
    const [clicked, setClicked] = useState(false)
    const handleClick = () => {
        setClicked(!clicked)
    }
    const logout = () => {
        localStorage.removeItem("user"
       .then(_ => setRequiresUpdate(true)))
    };
    return (
            <NavContainer>
                <div className='brand'>
                    <Link to="/">
                        <div className='flexBrand'>
                            <img className="logofqt" src={logo} alt={"Quiero Trabajo logo"}/>
                            <h4 className="logo-title"> FUNDACION QUIERO TRABAJO</h4>
                        </div>
                    </Link>

                </div>
                <div className={`links ${clicked ? 'active' : ''}`}>
                    <div className={`links ${clicked ? 'active' : ''}`}>
                        <Link to="/new">
                            <button className="css-button-rounded--red">Añadir Nuevo</button>
                        </Link>
                        <Link to="/auth/signup">
                            <button className="css-button-rounded--red">Registrar Usuario</button>
                        </Link>
                        <Link to="/login">
                            <button className="css-button-rounded--red" onClick={logout}>Salir</button>
                        </Link>

                    </div>
                </div>
                <div className='burguer'>
                    <BurguerButton clicked={clicked} handleClick={handleClick}/>
                </div>
                <BgDiv className={`initial ${clicked ? ' active' : ''}`}/>
            </NavContainer>

    )
}

export default Navbar

const NavContainer = styled.nav`

  padding: .4rem;
  background-color: #EFEFEF;
  display: flex;
  align-items: center;
  justify-content: space-between;
  -webkit-box-shadow: 0 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
    box-shadow: 0 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
    border: 1px solid #ccc7c7;
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
  background-color: white;
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