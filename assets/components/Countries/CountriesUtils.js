import CONFIG from '../../Config';

function _initCountries(context) {
  fetch(CONFIG.api).then((resp) => resp.json()).then(function(data) {
    context.setState( (state) => ( { 
      allCountries: data,
      visibleCountries: data.slice(0, state.countriesVisible)
    } ));
  })
  .catch(function(error) {
    console.error(error);
    context.setState( (state) => ( {countryListError: true}));
  });
}

function loadMoreCountries(context) {
  context.setState( (state) => ( { 
    visibleCountries: [...state.allCountries],
    countriesVisible: state.allCountries.length
  } ));
}

function sortAlphabetically(context) {

  context.setState( (state) => {

    let sortedList = [...state.allCountries];

    if(!state.countriesSortedAlph){
      sortedList.sort( function(a,b){ return a.name > b.name ? 1 : -1})
    } else {
      sortedList.sort( function(a,b){ return a.name <= b.name ? 1 : -1})
    }

    return {
      allCountries: sortedList,
      countriesNum: undefined,
      countriesSortedAlph: !state.countriesSortedAlph,
      visibleCountries: sortedList.slice(0, state.countriesVisible)
    }
  })
}

function sortNumerically(context) {

  context.setState( (state) => {
    let sortedList = [...state.allCountries];

    if(state.countriesNum){
      sortedList.sort( function(a,b){ return a.population - b.population})
    } else {
      sortedList.sort( function(a,b){ return b.population - a.population})
    }
    
    return {
      allCountries: sortedList,
      visibleCountries: sortedList.slice(0, state.countriesVisible),
      countriesNum: !state.countriesNum,
      countriesSortedAlph: undefined
    }
  })
  
}


export {
  _initCountries,
  loadMoreCountries,
  sortNumerically,
  sortAlphabetically
}