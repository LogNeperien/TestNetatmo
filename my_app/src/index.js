import React from 'react';
import ReactDOM from 'react-dom';
import {Col, Container, Row} from "react-bootstrap";
import DayTemperature from "../src/javascript/components/DayTemperature";

import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/App.css';
import './stylesheets/index.css';

class Index extends React.Component{
	
	
	render () {	
		return (

			<Row id={"widgets-wrapper"}>
				<DayTemperature xs={12} sm={12} md={12} lg={12}/>
                <DayTemperature xs={6} sm={6} md={4} lg={4}/>
				<DayTemperature xs={6} sm={6} md={4} lg={4}/>
				<DayTemperature xs={6} sm={6} md={4} lg={4}/>
				<DayTemperature xs={6} sm={6} md={4} lg={4}/>
				<DayTemperature xs={6} sm={6} md={4} lg={4}/>
				<DayTemperature xs={6} sm={6} md={4} lg={4}/>
            </Row>
		  );
	}
}

// ========================================

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);
