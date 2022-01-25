import React from 'react';
import { Container } from 'react-bootstrap';
import { BsInstagram, BsDiscord } from 'react-icons/bs';
import { BiMenuAltRight} from 'react-icons/bi';
import { AiFillTwitterSquare, AiOutlineMenu } from 'react-icons/ai';
import './Footer.css'
const Footer = (props) => {
    return (
        <div>
            <div className='become-text'>
                <h1 className='become-header'>
                    Become A Lord<br />
                    Join Our Discord
                </h1>
                <a href='' className='buy-btn'>Join Now</a>

            </div>
                
            <Container className='rights-container'>
                <img height="47px" src='https://lordsocietynft.com/static/media/logo_footer.dd11ea2b8dc0160eaa82.png' alt='' />
                <p className='rights-text'>© 2021 Lord Society - NFT. All rights reserved.</p>

                <ul className='nav-list ul-icon-links'>
                        <li className='header-link-icon'><a href=''><BsInstagram /></a></li>
                        <li className='header-link-icon'><a href=''><AiFillTwitterSquare /></a></li>
                        <li className='header-link-icon'><a href=''><BsDiscord /></a></li>

                    </ul>

            </Container>

        </div>
    );
}

export default Footer;