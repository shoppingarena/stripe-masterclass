import React from 'react';
//import { withRouter } from 'react-router-dom';
//How to upgrade to version 6. (Read this)[https://reactrouter.com/en/main/upgrading/v5#use-usenavigate-instead-of-usehistory]
import { useNavigate } from 'react-router-dom';
import studioBag from '../../assets/studio-bag.png';
import './main-section.styles.scss';

//const MainSection = ({ history }) => {
const MainSection = () => {

  let navigate = useNavigate();
    function handleClick() {
        navigate('/product/1');
    }
  
  return (
    <div className='main-section-container'>
      <div className='main-section-middle'>
        <div className='ms-m-image'>
          <img src={studioBag} alt='studio bag'/>
        </div>
        <div className='ms-m-description'>
          <h2>Designed for fashion. Crafted for sport.</h2>
          <p>
          We make products that effortlessly transition from day to night. 
            From the board room to the fitness studio, and everywhere in between, 
            each Nomads piece is thoughtfully created to be the perfect balance of 
            form and function.
          </p>
          <button className='button is-black' id='shop-now' onClick={handleClick}>
            STUDIO BAG
          </button>
        </div>
      </div>
    </div>
  );
}

export default withRouter(MainSection);
