import React from 'react';
import ReactDOM from 'react-dom';
import {Col, Container, Row} from "react-bootstrap";
import DayTemperature from "../src/javascript/components/DayTemperature";


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
