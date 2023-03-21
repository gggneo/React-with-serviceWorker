import React from 'react';

import './CountryList.scss';

import countryCard from '../../views/countryCard/countryCard';
import countryHeader from '../../views/countryHeader/countryHeader';

import {
  withRouter
} from "react-router-dom";

class CountryList extends React.Component {

  constructor() {
    super();

    this.state = {
      isMounted: false
    }

    this.mountTimeout = 0;
  }

  componentDidMount() {
    this.mountTimeout = setTimeout( () => {
      this.setState( (state) => ({isMounted: true}))
    }, 0)
  }

  componentWillUnmount() {
    clearTimeout(this.mountTimeout);
  }

  render() {  
    return (
        <div className={`country-list ${this.state.isMounted ? 'country-list--visible' : ''}`}>
          <h1>{this.props.data.title}</h1>

          {countryHeader({
            buttons: this.props.buttons
          })}

          <div className="country-list__countries">
            {this.props.visibleCountries.map( (country, index) => {
              return <React.Fragment key={index}>
                {countryCard({
                  imgSrc: country.flag,
                  name: country.name,
                  population: country.population,
                  buttonText: this.props.data.countryBtnText,
                  callback: () => this.props.history.push(`/${country.alpha3Code}`)
                })}
              </React.Fragment>
            })}

            {this.props.allCountries.length > this.props.visibleCountries.length && (
              <button className="button button--secondary button--load" 
              onClick={this.props.loadMoreCallback}>{this.props.data.loadButtonText}</button>
            )}

          </div>
        </div>
    )
  }
}


export default withRouter(CountryList);