import React from 'react';
import Tile from '../TourCard';
import './tourCardContainer.scss';

const TourCardContainer = props => {
  //
  const randomKey = (new Date()).getTime();
  return (
    <ul className="tile__container">
      {
        props.tours.map((tour) => <Tile tour={ tour } key={ 'tile_' + tour.id + randomKey }></Tile>)
      }
    </ul>
  )
};

export default TourCardContainer;
