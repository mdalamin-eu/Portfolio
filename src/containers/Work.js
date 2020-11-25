import React, { Component } from 'react';
import styled from 'styled-components';

import { CenteredHeader } from './App.js'
import { ColorScheme } from "../theme/styleConstants";

const Date = styled.p`
  font-size: 12px;
`

const PortButtonContainer = styled.div`
  width: 30%;
  margin: 0 auto;

  @media (max-width: 600px) {
    margin-top: 15px;
    width: 50%;
  }
`;

const PortDescription = styled.p`
  display: block;
  margin: 15px 0;
`;

const UsedList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 auto;
`;

const UsedItem = styled.ul`
  display: inline-block;
  padding: 7px 7px 5px;
  margin-right: 5px;
  margin-bottom: 10px;
  color: #fff;
  background: ${ColorScheme.secondary};
  border-radius: 3px;
  text-transform: uppercase;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.5px;
`;

const PortRow = styled.div`
  margin: 0;
  padding-top: 50px;
  padding-bottom: 50px;
  display: block;
`;

const CodeThumbnail = styled.img`
  width: 100%;
  display: block;
  margin: 0 auto;
`;

const PortAllText = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const PortTitleContainer = styled.div`
  position: relative;
  margin: 0 auto;
  align-items: baseline;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: flex-end;
  align-content: stretch;

  @media (max-width: 600px) {
    display: inline;
  }
`;

const PortTitle = styled.h2`
  flex: 1;
  font-family: Gotham, Helvetica, Arial, sans-serif;
  text-transform: uppercase;

  @media (max-width: 600px) {
    text-align: center;
  }
`;


export const PortButton = styled.a`
  padding: 10px 15px;
  background: 0 0;
  border: 2px solid ${ColorScheme.secondary};
  border-radius: 3px;
  margin: 0 5px;
  color: ${ColorScheme.secondary};
  font-family: Gotham, Helvetica, Arial, sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  transition: all 0.3s ease;
  &:hover {
    background: ${ColorScheme.primary};
    color: #fff;
    border-color: ${ColorScheme.primary};
  }

  @media (max-width: 600px) {
    padding: 5px 7px;
  }
`;

class Writing extends Component {
  render() {
    return (
      <div>
      <PortRow>
          <a rel="noopener noreferrer" href="" target="_blank">
            <CodeThumbnail src={require("../assets/dev.png")} />
          </a>
          <PortAllText>
            <PortTitleContainer>
              <PortTitle>Connect With Dev</PortTitle>
              <PortButtonContainer>
                <PortButton
                  href="https://github.com/mdalamin-eu/developer-meet"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code 
              </PortButton>
              </PortButtonContainer>
            </PortTitleContainer>
            <PortDescription>
            DevCOnnect is a developer  platform where developer throught out the world connect with each other and share their soluations and believes and become friend with each other,it also lets you connect with your senior or junior developer 
          </PortDescription>
            <UsedList>
              <UsedItem>Node Js</UsedItem>
              <UsedItem>React</UsedItem>
              <UsedItem>Redux</UsedItem>
              <UsedItem>Exprees JS</UsedItem>
              <UsedItem>Mlab</UsedItem>
            </UsedList>
          </PortAllText>
        </PortRow>
     
      
         <PortRow>
          <a href="" rel="noopener noreferrer" target="_blank">
            <CodeThumbnail
              src={require("../assets/Breed.png")}
            />
          </a>
          <PortAllText>
            <PortTitleContainer>
              <PortTitle>travel application</PortTitle>
              <PortButtonContainer>
                <PortButton
                  href="https://streetracer48.github.io/playing-with-materialize-css/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
              </PortButton>
                <PortButton
                  href="https://github.com/streetracer48/playing-with-materialize-css"
                  target="_blank"
                >
                  Code
                </PortButton>
              </PortButtonContainer>
            </PortTitleContainer>
            <PortDescription>
            this is simple material-ui Travel agency front-end  application
          </PortDescription>
            <UsedList>
              <UsedItem>Material-UI</UsedItem>
              <UsedItem>HTML</UsedItem>
              <UsedItem>CSS</UsedItem>
            </UsedList>
          </PortAllText>
        </PortRow>

        <PortRow>
          <a href="" rel="noopener noreferrer" target="_blank">
            <CodeThumbnail
              src={require("../assets/Robo.png")}
            />
          </a>
          <PortAllText>
            <PortTitleContainer>
              <PortTitle>travel application</PortTitle>
              <PortButtonContainer>
                <PortButton
                  href="https://github.com/mdalamin-eu/Robo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
              </PortButton>
                <PortButton
                  href="https://github.com/streetracer48/playing-with-materialize-css"
                  target="_blank"
                >
                  Code
                </PortButton>
              </PortButtonContainer>
            </PortTitleContainer>
            <PortDescription>
            this is simple material-ui Travel agency front-end  application
          </PortDescription>
            <UsedList>
              <UsedItem>Material-UI</UsedItem>
              <UsedItem>HTML</UsedItem>
              <UsedItem>CSS</UsedItem>
            </UsedList>
          </PortAllText>
        </PortRow>
        <hr/>
        
        
    </div>
    );
  }
}

export default Writing;
