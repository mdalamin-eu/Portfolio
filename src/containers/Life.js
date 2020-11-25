import React, { Component } from 'react';
import styled from 'styled-components';

import { CenteredHeader } from './App.js'

const LifeThumbnail = styled.img`
  width: 70%;
  display: block;
  margin: 0 auto;
`;

const LifeHeader = styled.h4`
  font-size: 1.25em;
  text-align: center;
`;

const LifeProjectBlurb = styled.div`
  padding: 4% 0;
  width: 75%;
  margin: auto;
`

const LifeRow = styled.div`
  margin: 20px -15px;
`

class Life extends Component {
  render() {
    return (
      <div>
        <div>
          <CenteredHeader>I like to trvales, regardless of photography. Here are some of my  life </CenteredHeader>
        </div>
        {/*Row 1*/}
        <LifeRow className="row">

        <div className="col-md-6 col-sm-12">
        <a href="" target="_blank">
              <LifeThumbnail src={require('../assets/desk.jpg')}/>
              <LifeHeader>Home loving my  working desk :)  </LifeHeader>
            </a>
            {/* <p>
            Home Working desk favorite Sipder man Marvel ps all that inspired me to learn more and create new things!
              </p> */}
          </div>

          <div className="col-md-6 col-sm-12">
            <a href="" target="_blank">
              <LifeThumbnail src={require('../assets/photography.jpg')} />
              <LifeHeader>Photography</LifeHeader>
            </a>
            <LifeProjectBlurb></LifeProjectBlurb>
          </div>

          <div className="col-md-6 col-sm-12">
            <a href="" target="_blank">
              <LifeThumbnail src={require('../assets/photography.jpg')} />
              <LifeHeader>Photography</LifeHeader>
            </a>
            <LifeProjectBlurb></LifeProjectBlurb>
          </div>

          <div className="col-md-6 col-sm-12">
            <a href="" target="_blank">
              <LifeThumbnail src={require('../assets/photography.jpg')} />
              <LifeHeader>Photography</LifeHeader>
            </a>
            <LifeProjectBlurb></LifeProjectBlurb>
          </div>

          <div className="col-md-6 col-sm-12">
            <a href="" target="_blank">
              <LifeThumbnail src={require('../assets/photography.jpg')} />
              <LifeHeader>Photography</LifeHeader>
            </a>
            <LifeProjectBlurb></LifeProjectBlurb>
          </div>
       

        <div className="col-md-6 col-sm-12">
            <a href="" target="_blank">
              <LifeThumbnail src={require('../assets/photography.jpg')} />
              <LifeHeader>Photography</LifeHeader>
            </a>
            <LifeProjectBlurb></LifeProjectBlurb>
          </div>
         
         
        </LifeRow>
        {/*Row 2*/}
        
      </div>
    );
  }
}

export default Life;