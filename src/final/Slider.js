import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import t1 from './t1.jpg';
import t2 from './t2.jpg';
import t3 from './t3.jpg';

function Slider() {

  return (
		<div className="carousel slide" id="travel-slider" data-ride="carousel">
			<div className="carousel-inner">
				<div className="carousel-item active">
					<img src={t1} className="img-fluid w-100 ppp" alt="t1"/>
				</div>
				<div className="carousel-item">
					<img src={t2} className="img-fluid w-100 ppp" alt="t1"/>
				</div>
				<div className="carousel-item">
					<img src={t3} className="img-fluid w-100 ppp" alt="t1"/>
				</div>
			</div>
		</div>
  );
}

export default Slider;
