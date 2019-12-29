import React, {Component} from "react";
import {Col, Row} from "react-bootstrap";


class ButtonStation extends Component {


    constructor(props) {
        super(props);

        this.state = {
        }

        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(event) {
    }

   
    render() {
        //responsive

        return(
        <div>
            <div class="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      			<h2 class="display-4">Meteo App</h2>
      			<p class="lead">
        			weather forecast display
      			</p>
    		</div>
			<div className="container">
      			<div className="input-group mb-5 offset-4 col-4">
        			<input id="city-input" type="text" className="form-control" placeholder="write a station ID"/>
        			<div className="input-group-append">
          				<button id="city-input-button" className="btn btn-success" type="submit" onclick="start()">
							Submit
						</button>
        			</div>
      			</div>
    		</div>
        </div>
        
        );
    }
}
export default ButtonStation;