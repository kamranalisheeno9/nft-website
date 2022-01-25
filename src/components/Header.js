import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BsInstagram, BsDiscord } from 'react-icons/bs';
import { BiMenuAltRight} from 'react-icons/bi';
import { AiFillTwitterSquare, AiOutlineMenu } from 'react-icons/ai';
import './Header.css'
const Header = (props) => {

    const [displayNav,setDisplayNav]=useState(false)

    return (
        <>
        <div className='header-container'>
            <Row className='header-row'>
                <Col md={2} xs={2}>
                    <a>
                        <img className='logo-img' src='https://lordsocietynft.com/static/media/logo.dbe8a92678af6bea61aa.png' alt='logo' />
                    </a>
                </Col>
                <Col className='nav-links' md={7} lg={7}>
                    <ul className='nav-list'>
                        <li className='header-link'><a href=''>Home</a></li>
                        <li className='header-link'><a href=''>About Us</a></li>
                        <li className='header-link'><a href=''>Roadmap</a></li>
                        <li className='header-link'><a href=''>Out Artist</a></li>
                        <li className='header-link faq'><a href=''>FAQ</a></li>
                    </ul>

                </Col>
                <Col xl={2} lg={2} md={4} sm={5} xs={7}  >
                    <ul className='nav-list'>
                        <li className='header-link-icon'><a href=''><BsInstagram /></a></li>
                        <li className='header-link-icon'><a href=''><AiFillTwitterSquare /></a></li>
                        <li className='header-link-icon'><a href=''><BsDiscord /></a></li>
                        <div className='menu-icon' onClick={()=>setDisplayNav(!displayNav)}>{displayNav ? <BiMenuAltRight /> : <AiOutlineMenu /> }</div>

                    </ul>

                </Col>
            </Row>
               
               
                
        </div>
         <div className='responsive-links' md={7} lg={7}>
         <ul className={displayNav ? 'nav-list-responsive' : 'no-display'}>
             <li className='header-link'><a href=''>Home</a></li>
             <li className='header-link'><a href=''>About Us</a></li>
             <li className='header-link'><a href=''>Roadmap</a></li>
             <li className='header-link'><a href=''>Out Artist</a></li>
             <li className='header-link faq'><a href=''>FAQ</a></li>
         </ul>

     </div>
        </>
    );
}

export default Header;