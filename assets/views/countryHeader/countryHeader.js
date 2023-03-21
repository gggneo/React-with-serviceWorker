import React from 'react';

import './countryHeader.scss';

function countryHeader(props) {

  return (
    <div className="country-header">

      {props.buttons.map( (button, index) => {
        return <div key={index} className="country-header__wrapper">
          <button className="button button--tertiary" 
            onClick={button.callback}>{button.text}</button>
        </div>
      })}

    </div>
  )
}

export default countryHeader;