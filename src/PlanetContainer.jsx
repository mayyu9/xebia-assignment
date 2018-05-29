import React from 'react';

class PlanetContainer extends React.Component{
  constructor(props){
    super(props);
    this.loadImage = this.loadImage.bind(this);
  }

  loadImage(data){
    let listToDo = null;
    listToDo = data.map((planetSize) => {
      return (
        <ImageConstant
          key = {planetSize.name}
          planetName = {planetSize.name}
          population = {planetSize.population}
          planetSize = {planetSize}
        />
      )
    });
    return listToDo;
  }
  render(){
    const {data} = this.props;
    return(
      <div>
        { data.length ? this.loadImage(this.props.data): false}
      </div>
    )
  }
}
export default PlanetContainer;

const ImageConstant = ({ planetName, population, planetSize}) => {
    var val = (population) => {
      switch(true) {
        case population > 1000000000:
          return ({
            'background':'red',
            'fontSize': 'xx-large'
          });
        case ((population < 1000000000)&&(population >= 1000000000)):
          return ({
            'background':'green',
            'fontSize': 'x-large'
          });
        case population > 5000000:
          return ({
            'background':'blue',
            'fontSize': 'large'
          });
      case population >= 1000:
        return ({
          'background':'orange',
          'fontSize': 'medium'
        });
      case population === 'unkown':
        return ({
          'background':'violet',
          'fontSize': 'small'
        });
        default:
            return ({
              'background':'black',
              'fontSize': 'x-small',
              'color':'white'
            });
      }
    };
  const divStyle={
    height:'30em',
    fontSize: val()
  };
 return(
   <div  style={val(population)}>
    <p> {planetName} </p>
    <p> {population} </p>
    <p> {planetSize.surface_water} </p>
    <p> {planetSize.created} </p>
    <a href={planetSize.url}> `More About planet` </a>
   </div>
 );
}
