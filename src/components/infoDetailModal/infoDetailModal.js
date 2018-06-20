import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

export class InfoDetailModal extends Component {
    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.handleClose} className="info-detail">
                <Modal.Header closeButton>
                    <i className="fa fa-check-circle img" aria-hidden="true" />
                    <Modal.Title componentClass="span">Information Detail</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal-body__content">
                        <form>
                            <div className="form-group">
                                <label htmlFor="password">UMR_Code</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder=""
                                    value="UMR-2018-001"
                                    disabled
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Broker-Name</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder=""
                                    value="Fidelity"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Broker-Number</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder=""
                                    value="098 1080 09"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Full_Name</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder=""
                                    value="Ernesto Hernández"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Cell_Phone</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder=""
                                    value="098 1080 09"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Email_Addr</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder=""
                                    value="email@test.com"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Permanant_Addr</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder=""
                                    value="2380 Place Neptune Brossard"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Short_Des</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder=""
                                    value="Lorem Ipsum is simply dummy text"
                                />
                            </div>
                        </form>
                    </div>
                    <div className="modal-buttons modal-buttons--custom">
                        <Button onClick={this.props.handleClose}>Cancel</Button>
                        <Button bsStyle="success" onClick={this.props.handleClose}>Save</Button>
                    </div>
                </Modal.Body>
            </Modal>
        );
    }
}

export default InfoDetailModal;
