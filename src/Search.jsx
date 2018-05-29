import React from 'react';
import PlanetContainer from './PlanetContainer';
import './xebia-app.css';

class Search extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      searchFiled : '',
      planets:[],
      searchedPlanets: []
    };
    this.getPlanet = this.getPlanet.bind(this);
  }

  handlechange(event){
    event.preventDefault();
    this.setState({ searchFiled:event.target.value });
    if(event.target.value.length > 2)
      this.getPlanet();
  }

  getPlanet(){
    // search for the input filter for the specific value
     let planet = (this.state.planets.results).filter(planet => planet.name.includes(this.state.searchFiled));
     this.setState ({ searchedPlanets: planet });
  }

  componentDidMount(){
    /* fetch the planets infromation from the below url and set users state with json reterived */
    fetch('https://swapi.co/api/planets/')
    .then(results => {
      return results.json();
    })
    .then(data => {
      this.setState({planets:data});
    })
  }

  render(){
    return(
      <div>
      <div className='logout-btn-Div'>
      <button className='logout-btn' onClick={this.props.logout}>Logout</button>
      </div>

      <div className='search-field'>
      <p>planets search bar </p>
      <input type="text" name='username' value={this.state.searchFiled} onChange={(event) => {this.handlechange(event)} } placeholder="search for planets"/>
      </div>
      <div className='container'>
        <PlanetContainer data={this.state.searchedPlanets} />
      </div>
      <hr />
      </div>
    )
  }
}

export default Search;
