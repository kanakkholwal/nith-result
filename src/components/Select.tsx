import React from 'react';
import { Component } from 'react';

interface option {
    value: any, label: string
}
interface options extends Array<option> { }



class NameTag extends Component {


    render() {
        return (
            <>
                <select>

                </select>
            </>
        )
    }
}


export default NameTag;
