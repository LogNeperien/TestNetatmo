import React, {Component} from "react";
import {Col, Row} from "react-bootstrap";


class Header extends Component {


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
        const {message} = this.props;

        return(
            <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
      			<h5 class="my-0 mr-md-auto font-weight-normal">
                    {message}
				</h5>
    		</div>
        );
    }
}
export default Header;