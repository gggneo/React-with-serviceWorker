import React from 'react';

import './CountryDetails.scss';
import CData from './CountryDetails.json';

import {
  Link
} from "react-router-dom";

class CountryDetails extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      borderingCountries: this._initBorders()
    }
  }

  _initBorders() {
    let borders = [];

    for(let i=0; i < this.props.allCountries.length; i++) {
      if(this.props.data.borders.includes(this.props.allCountries[i].alpha3Code)) {

        borders.push({
          name: this.props.allCountries[i].name,
          alpha3Code: this.props.allCountries[i].alpha3Code
        });

        if(borders.length >= this.props.data.borders.length){
          break;
        }
      }
    }

    return borders;
  }


  render() {  
    if(!this.props.data) {
      return null;
    }


    return (
      <div className="country-details">
        <Link className="country-details-back button button--secondary" to="/">{CData.backTOHomeBtn}</Link>
        <h3 className="country-details-headline">{this.props.data.name}</h3>

        <div className={`country-details__details`}>
          <div className="country-details__description">
            <h4>{CData.description.descriptionTitle}</h4>
            <p>
              {CData.description.capital}
              {this.props.data.capital}
            </p>
            <p>
              {CData.description.languages}
              {this.props.data.languages.map( (lang, index) => {
                return <React.Fragment key={index}>{index > 0 && ", "}{lang.name}</React.Fragment>
              })}
            </p>
            <p>
              {CData.description.currencies}
              {this.props.data.currencies.map( (currency, index) => {
                return <React.Fragment key={index}>{index > 0 && ", "}{currency.name}</React.Fragment>
              })}
            </p>
          </div>

          <hr />

          <div className="country-details__links">
            <h4>{CData.borderCountries}</h4>

            <div className="country-details__links__list">

              {this.state.borderingCountries.map( (bCountry, index) => {
                return <Link to={"/"+bCountry.alpha3Code} key={index}>{index > 0 && ", "}{bCountry.name}</Link>
              })}

              {this.state.borderingCountries.length === 0 && <p>{CData.noBordersFound}</p>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default CountryDetails;