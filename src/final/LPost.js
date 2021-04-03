import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import l1 from './l1.jpg';
import l2 from './l2.jpg';
import l3 from './l3.jpg';
import pp1 from './pp1.png';
import pp2 from './pp2.png';
import pp3 from './pp3.png';

const  LPost = () => {

  return (
    <>
     <div className="container">
        <br/><br/><br/>
        <h2 className="text-center">Latest Post</h2>
        <br/>
        <div className="row">
            <div className="col-sm-4">
                <img src={l1} alt="t1"/><br/>
                <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div className="col-sm-4">
                <img src={l2} alt="t1"/><br/>
                <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div className="col-sm-4">
                <img src={l3} alt="t1"/><br/>
                <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
        </div>
        <br/><br/><br/><br/>
        <div className="row">
            <div className="col-sm-4">
                <img src={pp1} alt="t1"/><br/><br/>
                <h6>CASH ON DELIVERY</h6>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div className="col-sm-4">
                <img src={pp2} alt="t1"/><br/><br/>
                <h6>FREE SHIPPING</h6>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div className="col-sm-4">
                <img src={pp3} alt="t1"/><br/><br/>
                <h6>MONEY BACK GUARANTEE</h6>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
        </div>
     </div>
    </>
  );
}

export default LPost;
