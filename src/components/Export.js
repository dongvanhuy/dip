/* eslint-disable no-script-url */
import React, { Component } from 'react';

export class Export extends Component {
    render() {
        return (
            <div className="content">
                <h3>Export Agreement</h3>
                <div className="view">
                    <div className="control_input">
                        <input type="text" name="agreement_id" id="agreement_id" value="" placeholder="Agreement ID" />
                        <select id="parties" name="parties">
                            <option value="parties">Parties</option>
                            <option value="parties1">Parties 1</option>
                            <option value="parties2">Parties 2</option>
                        </select>
                        <input type="submit" value="Export" />
                    </div>
                    <div className="text_field"><textarea /></div>
                </div>
            </div>
        );
    }
}

export default Export;
