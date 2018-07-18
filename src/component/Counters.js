import React, {Component} from 'react'
import Counter from './Counter'

export default class Counters extends Component {
    constructor(props){
        super(props);
        this.state={
            counterList:[],
            summary:0
        };
    }
}