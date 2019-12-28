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
                        <DayTemperature/>
                        <DayTemperature/>
            </Row>
		  );
	}
}

// ========================================

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);
