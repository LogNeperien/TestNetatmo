import React, {Component} from "react";
import {Col, Row} from "react-bootstrap";
import {SquareLoader} from "./SpinLoader";


class DayTemperature extends Component {


    constructor(props) {
        super(props);

        this.state = {
        }

        this.styles = {
            light: {
                fontWeight: 100,
                backgroundColor: "rgb(218,83,103,1)",
                color: "white",
                borderRadius: '0.2em',
                border: 'none',
            }
        }
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(event) {
    }

    squareLoader() {
        return(<SquareLoader/>);
    }

   
    render() {

        return(
        <Col id={'lastWidget-wrapper'}
                 xs={6} sm={6} md={4} xl={4} lg={4}
                 className={"my-3"}
            >
                <Col id={'last-widget'}
                     style={this.styles.light}
                     className={"p-3 shadow-shorter"}>
                    <h1 className={"t-size-1-5 fw-600 mb-3"}>Hier <span className={'fw-300 t-size-0-9 font-italic'}><br/></span></h1>
                    <Row className={'justify-content-center'}>
                        <h2 className={"t-size-4 fw-100 font-italic text-center m-0"}>
                            43°C
                        </h2>
                    </Row>
                </Col>
        </Col>
        );
    }
}
export default DayTemperature;