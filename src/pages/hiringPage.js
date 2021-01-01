import React from 'react'
import './styles.css'

function hireMe(){
    return(
        <div className="container">
<div className="row">
<div className="col-md-2 px-4 py-5">
    <button type="button" className="btn btn-light btn-lg"><span className="hireButton"> Collab with Me </span></button>
    </div>
    <div className="col-md-10 text-right">
    <h1 className="hiringPage-subheading  px-4 py-5">Looking for Open-Source Collaborations ?</h1>
    </div> 
   
</div>
</div>

    )
}

export default hireMe