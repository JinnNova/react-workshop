import React from "react";
import styled from "styled-components";



const CardImage = styled.div`
  position: relative;
  z-index: 10;
  height: 10rem;
  background-size: cover;
  background-position: 50% 50%;
  border-radius: 5px 5px 0 0;
`;

export default class Card extends React.Component {
  render(){
    return (
      <div>
        <h1> {this.props.title}</h1>
        <img src={this.props.imageUrl} />

      </div>
    )
  }
};