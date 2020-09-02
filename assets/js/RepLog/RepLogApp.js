import React, {Component} from 'react';

export default class RepLogApp extends Component{
    render() {

        let muscle = '';
        if (this.props.withMuscle){
            muscle = <span>💪🏽 </span>;
        }
        return (
            <h2>Lift Stuff ! {muscle}</h2>)
    }
}
