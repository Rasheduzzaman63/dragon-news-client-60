import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaWhatsapp, FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa';
import FindCarousel from '../FindCarousel/FindCarousel';

const RightSideNav = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button className="mb-2" variant="outline-primary"><FaGoogle/> Login Via Google</Button>
                <Button className="mb-2" variant="outline-primary"><FaGithub/> Login Via Github</Button>
            </ButtonGroup>
            <div className='mt-3'>
                <h4>Find On Us</h4>
                <ButtonGroup vertical>
                    <Button className="mb-2 ps-5 pe-5" variant="outline-primary"><FaFacebook/> FaceBook</Button>
                    <Button className="mb-2" variant="outline-primary"><FaYoutube/> Youtube</Button>
                    <Button className="mb-2" variant="outline-primary"><FaTwitter/> Twitter</Button>
                    <Button className="mb-2" variant="outline-primary"><FaWhatsapp/> WhatsApp</Button>
                    <Button className="mb-2" variant="outline-primary"><FaInstagram/> Instagram</Button>
            </ButtonGroup>
            </div>
            <div>
                <h4>Edditorials</h4>
                <FindCarousel></FindCarousel>
            </div>
        </div>
        
    );
};

export default RightSideNav;