import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './cards.css';


export default class card extends Component {
  render() {
    const {cards} = this.props;
    return (
    <div className='card text-center bg-dark animate__animated animate__fadeInUp'>
      <div className='overflow'>
    <img src={cards.image} alt='' className='card-img-top'/>
    </div>
    <div className='card-body text-light'>
        <h4 className='card-title'>{cards.title}</h4>
        <p className='card-text text-secondary'>
          {
            cards.text ? cards.text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, unde debitis. Ut et totam aut asperiores, ab eveniet, expedita ipsa laboriosam minus ad quasi assumenda autem distinctio sequi fugit facilis.?'
          }
        </p>
        <a href={cards.url} className='btn btn-outline-secondary rounded-0'>go to site</a>
    </div>
    </div>
    )
  }
}

card.propTypes = {
  cards : PropTypes.object.isRequired,
}
