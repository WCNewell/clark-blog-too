import React from 'react';
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo';
import Header from '../components/Header';
import styled from 'styled-components';

const GatsbyAstronaut = () => {
  return (
    <StaticImage
      src='../images/gatsby-astronaut.png'
      className="image"
      alt="Gatsby Astronaut Logo"
      placeholder="blurred"
    />
  )
};

const ContactPage = () => {
  return (
    <>
      <Seo title="Contact" />
      <div className="main-grid">
        <Header /> 
        <h1 className="page-title">contact form</h1>
        <div className="content">
          <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <div>
              <label>
                <h4>email</h4>
                <input className="form-input" type="email" name="email" placeholder=" email address" />
              </label>
            </div>
            <div>
              <label>
                <h4>name</h4>
                <input className="form-input" type="text" name="name" placeholder=" name"/>
              </label>
            </div>
            <div>
              <label>
                <h4>message</h4>
                <textarea className="form-input" type="text" name="message" rows="8"/>
              </label>
              <div> 
                <button className="form-button">
                  <h4 className="dark-link">send</h4>
                </button>
              </div>
            </div>
          </form>
          <FormSpace />
            <GatsbyAstronaut />
            <p className="caption">Hello from the Gatsby Spaceman! Image design by Gatsby.</p>
          <FormSpace />
        </div>
      </div>
    </>
  )
};

export default ContactPage;

const FormSpace = styled.div`
  height: 50rem;
`;








