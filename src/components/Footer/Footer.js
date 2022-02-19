import React from 'react';

import { FooterContainer, Column, Heading, FooterLink, FooterWrap, SocialMedia, 
    SocialMediaWrap, SocialLogo, SocialIcons, SocialIconLink } from './FooterElements';

import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/'>Pizza</SocialLogo>
            <Column>
                <Heading>About</Heading>
                <FooterLink href="#">Vision</FooterLink>
                <FooterLink href="#">Testimonials</FooterLink>
            </Column>

            <Column>
                <Heading>Services</Heading>
                <FooterLink href="#">Fast Food</FooterLink>
                <FooterLink href="#">Fast Delivery</FooterLink>
            </Column>
 
            <Column>  
                <Heading>Social Media</Heading> 
                <SocialIcons>
                    <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                        <FaFacebook />
                    </SocialIconLink>
                    <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                        <FaInstagram />
                    </SocialIconLink>
                    <SocialIconLink href='/' target='_blank' aria-label='Youtube'>
                        <FaYoutube />
                    </SocialIconLink>
                    <SocialIconLink
                        href='//www.twitter.com/this_mkhy'
                        target='_blank'
                        aria-label='Twitter'
                        rel='noopener noreferrer' >
                        <FaTwitter />
                    </SocialIconLink>
                    <SocialIconLink 
                        href='//https://www.linkedin.com/in/mohamed-khaled-yousef-421081a5/' 
                        target='_blank' 
                        aria-label='Linkedin'
                        rel='noopener noreferrer' >
                        <FaLinkedin />
                    </SocialIconLink>
                </SocialIcons>
            </Column> 
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;