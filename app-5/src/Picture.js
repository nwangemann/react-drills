import React, { Component } from 'react';


export default class Picture extends Component {
    constructor(props){
        super(props)

    }
    render(){
        return(
            <img src={this.props.reference}></img>
        )
    }
}