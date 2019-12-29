import React from 'react';
import ReactDOM from 'react-dom';
import {Col, Container, Row} from "react-bootstrap";
import DayTemperature from "../src/javascript/components/DayTemperature";
import Header from "../src/javascript/components/Header";

import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/App.css';
import './stylesheets/index.css';

class Index extends React.Component{
	
	
	render () {	
		return (
		
		<div>
			<Header message={'STATION METEO NUMERO 15'}/>

			<Row id={"widgets-wrapper"}>
				<DayTemperature xs={12} sm={12} md={12} lg={12} message={'today'}/>
                <DayTemperature xs={6} sm={6} md={4} lg={4} message={'yesterday'}/>
				<DayTemperature xs={6} sm={6} md={4} lg={4} message={'two days ago'}/>
				<DayTemperature xs={6} sm={6} md={4} lg={4} message={'three days ago'}/>
				<DayTemperature xs={6} sm={6} md={4} lg={4} message={'four days ago'}/>
				<DayTemperature xs={6} sm={6} md={4} lg={4} message={'five days ago'}/>
				<DayTemperature xs={6} sm={6} md={4} lg={4} message={'six days ago'}/>
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
