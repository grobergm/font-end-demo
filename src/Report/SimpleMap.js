import React from 'react';
import GoogleMapReact from 'google-map-react'; 

export const Bubble = (props) => <div className="bubble">*</div>;

class SimpleMap extends React.Component {
  constructor(props){
    super(props)
  }

 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:'Insert Google Maps API Key Here'}}
          center={{lat:44.0,lng:-120.5}}
          defaultZoom={6}
        >
        {
          this.props.points.map((point,i)=>{
            return(
            <Bubble 
            lat={this.props.points[i].randLat}
            lng={-this.props.points[i].randLng} />)
          })
          
        }
          
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;