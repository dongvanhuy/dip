/* eslint-disable no-script-url */
import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import { InfoDetailModal } from './infoDetailModal/infoDetailModal';

export class Homepage extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShowModal = this.handleShowModal.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShowModal() {
        this.setState({ show: true });
    }
    render() {
        return (
            <React.Fragment>
                <div className="content table-list-data">
                    <h3>[Title here]</h3>
                    <div className="view">
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>UMR-Code</th>
                                    <th>Broker-Name</th>
                                    <th>Broker-Number </th>
                                    <th />
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>UMR-2018-001</td>
                                    <td>Fidelity</td>
                                    <td>098 1080 09</td>
                                    <td className="text-center"><Button onClick={this.handleShowModal}><i className="fa fa-pencil" /> Edit</Button></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>UMR-2018-002</td>
                                    <td>TD Ameritrade</td>
                                    <td>098 1080 10</td>
                                    <td className="text-center"><Button><i className="fa fa-pencil" /> Edit</Button></td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>UMR-2018-003</td>
                                    <td>Charles Schwab</td>
                                    <td>098 1080 20</td>
                                    <td className="text-center"><Button><i className="fa fa-pencil" /> Edit</Button></td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>UMR-2018-004</td>
                                    <td>Charles Schwab</td>
                                    <td>098 1080 24</td>
                                    <td className="text-center"><Button><i className="fa fa-pencil" /> Edit</Button></td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>UMR-2018-005</td>
                                    <td>Charles Schwab</td>
                                    <td>098 1080 25</td>
                                    <td className="text-center"><Button><i className="fa fa-pencil" /> Edit</Button></td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>UMR-2018-006</td>
                                    <td>Fidelity</td>
                                    <td>098 1080 26</td>
                                    <td className="text-center"><Button><i className="fa fa-pencil" /> Edit</Button></td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>UMR-2018-007</td>
                                    <td>TD Ameritrade</td>
                                    <td>098 1080 27</td>
                                    <td className="text-center"><Button><i className="fa fa-pencil" /> Edit</Button></td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>UMR-2018-008</td>
                                    <td>Charles Schwab</td>
                                    <td>098 1080 28</td>
                                    <td className="text-center"><Button><i className="fa fa-pencil" /> Edit</Button></td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td>UMR-2018-009</td>
                                    <td>Charles Schwab</td>
                                    <td>098 1080 29</td>
                                    <td className="text-center"><Button><i className="fa fa-pencil" /> Edit</Button></td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>UMR-2018-010</td>
                                    <td>Charles Schwab</td>
                                    <td>098 1080 30</td>
                                    <td className="text-center"><Button><i className="fa fa-pencil" /> Edit</Button></td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
                <InfoDetailModal show={this.state.show} handleClose={this.handleClose} />
            </React.Fragment>
        );
    }
}

export default Homepage;
