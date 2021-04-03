import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './Navbar'

const  Test = () => {

  return (
    <>
    	
    	<section class="p-3 bg-light">
    		<div class="container">

      <div class="row">
        <div class="col-md-4 bun">
          <button class="btn btn-primary btn-block">
            <i class="fa fa-plus-circle"></i> New Orders
            <hr/> 
            123
          </button>
        </div>
        <div class="col-md-4 bun">
          <button class="btn btn-success btn-block">
            <i class="fa fa-plus-circle"></i> Current Orders
            <hr/> 
            123
          </button>
        </div>
        <div class="col-md-4 bun">
          <button class="btn btn-warning btn-block">
            <i class="fa fa-plus-circle"></i> Old Orders
            <hr/> 
            123
          </button>
        </div>
      </div>

    </div>
  </section>

    </>
  );
}

export default Test;
