import React from 'react';
import './tourCard.scss';
import { getRating } from '../../shared/utils/tour';

const TourCard = props => {
  const { tour } = props;
  const ratings = getRating(Number(props.tour.rating));
  const imagePath = '/tour/' + tour.image;

    return (
      <li className="tile">
        <a href="/" onClick={ (e) => e.preventDefault() }>
          <div className="tile__image">
            <picture>
              <source srcSet={ imagePath } media="(min-width: 300px)"/>
              <source srcSet={ imagePath } media="(min-width: 320px)"/>
              <img srcSet={ imagePath } alt={ tour.image } width="300px" height="250px"/>
            </picture>
          </div>
          { tour.isSpecialOffer && <span className="tile__offer">Offer</span> }
          <div className="tile__info">
            <div className="tile__title" dangerouslySetInnerHTML={{__html: tour.title}}></div>
            <div className="tile__info__bottom-bar">
              <div className="tile__info__bottom-bar__rating">
                {
                  ratings.map((rating, index) => 
                  <span
                    key={ index }
                    className={(rating === 1 ? 'rating__star--golden ' : (rating > 0 ? ' rating__star-half' : ' rating__star'))}>
                  </span>)
                }
                <span className="rating__text">{ tour.rating }</span>
              </div>

              <div className="tile__info__bottom-bar__price">
                <span className="tile__info__bottom-bar__price__currency">
                  { tour.currency }
                </span>
                <span className="tile__amount">
                  { tour.price }
                </span>
              </div>
            </div>
          </div>
        </a>
      </li>
    )
}

export default TourCard;
