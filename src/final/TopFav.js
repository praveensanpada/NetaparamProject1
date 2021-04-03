import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './TopFav.css';

import t1 from './t4.png';
import t2 from './t5.png';
import t3 from './t7.png';
import t4 from './t8.png';
import t5 from './t9.jpg';
import t6 from './t10.jpg';
import t7 from './t11.jpg';


const  TopFav = () => {

  return (
    <>
 		<div className="container">
 			<div className="text-center mt-5">
 				<h2>Top Favorite Fruits</h2>
 				<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.</p>
			</div>

			<div className="row mt-5 text-center">
				<div className="t1 col-sm-3">
					<img src={t1} alt="t1"/><br/>
					<p>ABCDEF</p>
				</div>
				<div className="t1 col-sm-3">
					<img src={t2} alt="t1"/><br/>
					<p>ABCDEF</p>
				</div>
				<div className="t1 col-sm-3">
					<img src={t3} alt="t1"/><br/>
					<p>ABCDEF</p>
				</div>
				<div className="t1 col-sm-3">
					<img src={t4} alt="t1"/><br/>
					<p>ABCDEF</p>
				</div>
			</div>

			<div className="row mt-5 text-center">
				<div className="col-sm-6 my-2">
					<img src={t5} alt="t1" className="back"/>
				</div>
				<div className="col-sm-6 my-2">
					<img src={t6} alt="t1" className="back"/>
				</div>				
			</div>
			<br/><br/><br/>
			<div>
				<img src={t7} alt="t1"/>
			</div>
		</div>
		<br/><br/>
    </>
  );
}

export default TopFav;
