import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as fasStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
require('./RatingStars.css')

function RatingStars(props) {
  return (
    <>
      <div className='d-flex justify-content-start'>
        <div className="position-relative">
          <div className="star-fill" style={{ width: `${Math.round((props.rating / 5) * 100)}%` }}>
            <FontAwesomeIcon icon={fasStar} className="text-yellow mx-custom" />
            <FontAwesomeIcon icon={fasStar} className="text-yellow mx-custom" />
            <FontAwesomeIcon icon={fasStar} className="text-yellow mx-custom" />
            <FontAwesomeIcon icon={fasStar} className="text-yellow mx-custom" />
            <FontAwesomeIcon icon={fasStar} className="text-yellow mx-custom" />
          </div>
          <div className="star-line">
            <FontAwesomeIcon icon={farStar} className="text-yellow mx-custom" />
            <FontAwesomeIcon icon={farStar} className="text-yellow mx-custom" />
            <FontAwesomeIcon icon={farStar} className="text-yellow mx-custom" />
            <FontAwesomeIcon icon={farStar} className="text-yellow mx-custom" />
            <FontAwesomeIcon icon={farStar} className="text-yellow mx-custom" />
          </div>
        </div>
        <div style={{ fontSize: '14px', marginLeft: '9px' }} >
          <p className='mb-0 fw-bold'>{props.rating.toFixed(1)}</p>
        </div>
      </div>
    </>
  );
}

export default RatingStars;