import React from 'react';
import ReactDOM from 'react-dom';
import {Col, Container, Row} from "react-bootstrap";
import DayTemperature from "../src/javascript/components/DayTemperature";
import Header from "../src/javascript/components/Header";
import ButtonStation from "../src/javascript/components/ButtonStation";

import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/App.css';
import './stylesheets/index.css';

class Index extends React.Component{

	constructor(props) {
        super(props);

        this.state = {
			bordereau : "STATION METEO NUMERO 15"
        }

        this.styles = {
            light: {
                fontWeight: 100,
                backgroundColor: props.color? props.color : "rgb(230,230,230,1)",
                color: props.color? "white" : "black",
                borderRadius: '0.2em',
                border: 'none',
            }
        }
	}
	
	handleChangeBordereau = message => {
		const bordereau = "STATION METEO NUMERO " + message.message;
		this.setState({bordereau});
	  }
	
	render () {	
		return (
		
		<div>
			<Header message={this.state.bordereau}/>

			<ButtonStation handleSubmit={this.handleChangeBordereau}/>

			<Row id={"widgets-wrapper"}>
				<DayTemperature xs={12} sm={12} md={12} lg={12} message={'today'}/>
				<DayTemperature xs={6} sm={6} md={4} lg={4} message={'minimum temperature'} color={'rgb(130,130,130,1)'}/>
				<DayTemperature xs={6} sm={6} md={4} lg={4} message={'maximum temperature'} color={'rgb(130,130,130,1)'}/>
				<DayTemperature xs={6} sm={6} md={4} lg={4} message={'average temperature'} color={'rgb(130,130,130,1)'}/>
                <DayTemperature xs={3} sm={3} md={2} lg={2} message={'yesterday'}/>
				<DayTemperature xs={3} sm={3} md={2} lg={2} message={'two days ago'}/>
				<DayTemperature xs={3} sm={3} md={2} lg={2} message={'three days ago'}/>
				<DayTemperature xs={3} sm={3} md={2} lg={2} message={'four days ago'}/>
				<DayTemperature xs={3} sm={3} md={2} lg={2} message={'five days ago'}/>
				<DayTemperature xs={3} sm={3} md={2} lg={2} message={'six days ago'}/>
            </Row>
		</div>
		  );
	}
}

// ========================================

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);
