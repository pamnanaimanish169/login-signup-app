import React from 'react';
import './View.css';
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { FaEye } from "react-icons/fa";
import {Link} from    'react-router-dom';

class View extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div className="upload-border">
                    <Button variant="primary"><Link to='/upload'>Upload</Link></Button>
                </div>
                <div>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>Sr. No.</th>
                                <th>CSV Name</th>
                                <th>Total Records</th>
                                <th>Successful Records</th>
                                <th>Failure Records</th>
                                <th>Status</th>
                                <th>Date</th>
                                <th>Actions</th>
                                <th>More Field</th>
                                <th>More Field</th>
                                <th>More Field</th>
                                <th>More Field</th>
                                <th>More Field</th>
                                <th>More Field</th>
                                <th>More Field</th>
                                <th>More Field</th>
                                <th>More Field</th>
                                <th>More Field</th>
                                <th>More Field</th>
                                <th>More Field</th>
                                <th>More Field</th>
                                <th>More Field</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>239847239.csv</td>
                                <td>200</td>
                                <td>150</td>
                                <td>50</td>
                                <td>Passed</td>
                                <td>25/03/1994</td>
                                <td> <Button variant="primary"><FaEye /></Button></td>
                                <td>More Field</td>
                                <td>More Field</td>
                                <td>More Field</td>
                                <td>More Field</td>
                                <td>More Field</td>
                                <td>More Field</td>
                                <td>More Field</td>
                                <td>More Field</td>
                                <td>More Field</td>
                                <td>More Field</td>
                                <td>More Field</td>
                                <td>More Field</td>
                                <td>More Field</td>
                                <td>More Field</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>239847239.csv</td>
                                <td>200</td>
                                <td>150</td>
                                <td>50</td>
                                <td>Passed</td>
                                <td>25/03/1994</td>
                                <td> <Button variant="primary"><FaEye /></Button></td>
                                <td>More Field</td>
                                <td>More Field</td>
                                <td>More Field</td>
                                <td>More Field</td>
                                <td>More Field</td>
                                <td>More Field</td>
                                <td>More Field</td>
                                <td>More Field</td>
                                <td>More Field</td>
                                <td>More Field</td>
                                <td>More Field</td>
                                <td>More Field</td>
                                <td>More Field</td>
                                <td>More Field</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>239847239.csv</td>
                                <td>200</td>
                                <td>150</td>
                                <td>50</td>
                                <td>Passed</td>
                                <td>25/03/1994</td>
                                <td> <Button variant="primary"><FaEye /></Button></td>
                                <td>More Field</td>
                                <td>More Field</td>
                                <td>More Field</td>
                                <td>More Field</td>
                                <td>More Field</td>
                                <td>More Field</td>
                                <td>More Field</td>
                                <td>More Field</td>
                                <td>More Field</td>
                                <td>More Field</td>
                                <td>More Field</td>
                                <td>More Field</td>
                                <td>More Field</td>
                                <td>More Field</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>239847239.csv</td>
                                <td>200</td>
                                <td>150</td>
                                <td>50</td>
                                <td>Passed</td>
                                <td>25/03/1994</td>
                                <td> <Button variant="primary"><FaEye /></Button></td>
                                <td>More Field</td>
                                <td>More Field</td>
                                <td>More Field</td>
                                <td>More Field</td>
                                <td>More Field</td>
                                <td>More Field</td>
                                <td>More Field</td>
                                <td>More Field</td>
                                <td>More Field</td>
                                <td>More Field</td>
                                <td>More Field</td>
                                <td>More Field</td>
                                <td>More Field</td>
                                <td>More Field</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>239847239.csv</td>
                                <td>200</td>
                                <td>150</td>
                                <td>50</td>
                                <td>Passed</td>
                                <td>25/03/1994</td>
                                <td> <Button variant="primary"><FaEye /></Button></td>
                                <td>More Field</td>
                                <td>More Field</td>
                                <td>More Field</td>
                                <td>More Field</td>
                                <td>More Field</td>
                                <td>More Field</td>
                                <td>More Field</td>
                                <td>More Field</td>
                                <td>More Field</td>
                                <td>More Field</td>
                                <td>More Field</td>
                                <td>More Field</td>
                                <td>More Field</td>
                                <td>More Field</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </>
        )
    }
}

export default View;