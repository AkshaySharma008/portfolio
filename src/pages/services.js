import React from 'react'
import webIcon from '../web-icon.png'
import './styles.css'


function services(){
    return(
        <div className="container p-5">
            <div className="row">
                <div className="card shadow col-md-3 m-2">
                    <div className="servieceImage m-auto p-3">
                        <img src={webIcon} alt="web-icon"  className="web-icon"/>
                    </div>
                    <div className="text-center">
                        <h4>Web Development</h4>
                        <p>
                        Developing scalable and end-to-end Full-Stack websites with cutting edge technology.
                        </p>
                    </div>
                </div>
                <div className="card shadow col-md-3 m-2">
                    <div className="servieceImage m-auto p-3">
                        <img src={webIcon} alt="web-icon"  className="web-icon"/>
                    </div>
                    <div className="text-center">
                        <h4>Web Development</h4>
                        <p>
                        Developing scalable and end-to-end Full-Stack websites with cutting edge technology.
                        </p>
                    </div>
                </div> 
                <div className="card shadow col-md-3 m-2">
                    <div className="servieceImage m-auto p-3">
                        <img src={webIcon} alt="web-icon"  className="web-icon"/>
                    </div>
                    <div className="text-center">
                        <h4>Web Development</h4>
                        <p>
                        Developing scalable and end-to-end Full-Stack websites with cutting edge technology.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default services