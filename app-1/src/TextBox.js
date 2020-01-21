import React, { Component } from 'react';

export default class TextBox extends Component {
    constructor(){
        super()

        this.setState({
            text: 'What if I wrote some words here?'
        })
    }

    update = (val) => {
        this.setState({
            text: val
        })
    }
    
    render(){
        return (
            <div>
                <input onChange={(e) => {this.update(e.target.value)}}></input>

            </div>
        )
    }
}