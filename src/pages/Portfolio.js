import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './styles/Portfolio.css';



// class DemoCarousel extends Component {
//   render() {
//     return (
//       <Carousel>
//         <div>
//           <img src="../assets/images/weather-widget.JPG" />
//           <p className="legend">Legend 1</p>
//         </div>
//       </Carousel>

//     );
//   }
// }

export default function Portfolio() {
  return (
    <div className="m-5 mt-5 totalFont bottom text-center">
      <h1 id="portfolio">Portfolio</h1>
      <div className="demo-carousel">
       
      </div>
    </div>
  );
  // console.log(DemoCarousel);
}

// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));
