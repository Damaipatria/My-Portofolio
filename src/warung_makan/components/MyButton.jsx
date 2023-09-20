import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
require('./MyButton.css')

function MyButton(props) {
  return (
    <>
      <a href={props.href}>
        <button className='button border-0 rounded-2'>
          <span>
            {props.namaButton}
          </span>
          <i className='ms-2'>
            <FontAwesomeIcon icon={faArrowRightLong} size='lg' />
          </i>
        </button>
      </a>
    </>
  );
}

export default MyButton;