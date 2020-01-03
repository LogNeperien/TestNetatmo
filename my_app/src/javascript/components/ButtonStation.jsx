import React, {Component} from "react";
import {Col, Row} from "react-bootstrap";


class ButtonStation extends Component {


    constructor(props) {
        super(props);

        this.state = {
            nouvelStation : ''
        }
    }


    handleChange = (event) => {
        this.setState({nouvelStation : event.currentTarget.value});
        console.log("handleChange");
    }

    handleSubmit = (event) => {
        console.log("handleSubmit");
        
        event.preventDefault()
        
        const message = this.state.nouvelStation;
        console.log(message);
        
        this.props.handleSubmit({message});
        this.setState({nouvelStation : ''});
    }


   
    render() {
        //responsive

        return(
        <div>
            <div className="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      			<h2 className="display-4">Meteo App</h2>
      			<p className="lead">
        			weather forecast display
      			</p>
    		</div>
			<div className="container">
      			<div className="input-group mb-5 offset-4 col-4">
                    <form onSubmit= {this.handleSubmit}>			 
        			    <div className="input-group-append">
                            <input id="city-input" type="text" className="form-control" value={this.state.nouvelStation} onChange={this.handleChange} placeholder="write a station ID"/>
          				    <button id="city-input-button" className="btn btn-success" type="submit">
							    Submit
						    </button>
        			    </div>
                    </form>
      			</div>
    		</div>
        </div>
        
        );
    }
}
export default ButtonStation;