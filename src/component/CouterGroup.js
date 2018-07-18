import React, {Component} from 'react'
import Counter from './Counter'

export default class Counters extends Component {
    constructor(props){
        super(props);
        this.state={
            summary:0,
            number: this.props.number
        };
    }

    setSummary = (e) =>{
        let summary = this.state.summary;
        if(e===1) summary++;
        if(e===2) summary--;
        this.setState(
            {summary}
        );
    }

    render(){
        let counterList = [];
        for(let i = 0; i< this.state.number; i++) {
                counterList.push(<Counter 
                    update={(e)=>this.setSummary(e)} 
                    key = {i.toString()}
                    />);
        }
        return (
            <div>
            {counterList}
            <p>{this.state.summary}</p>
            </div>
        );
    }
}