import React from 'react';
import '../styles/results.scss';
import ReactJson from 'react-json-view';

const Results = (props) => {

    return (
        <div class='res'>
            <div class='oneRes'>
                <ReactJson name="Headers" src={props.headers} />
                <ReactJson name="Response" src={props.results} />
            </div>
        </div>
    )

}

export default Results