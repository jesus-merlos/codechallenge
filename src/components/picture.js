import React, {Component} from 'react';

export default class ShowPicture extends Component{
        
    render(){
        const {data} = this.props;
        var d = data.split("|");
        return(<div>
            <label>{d[0]}</label>
            <br/>
            <img src={d[1].toString()} alt={d[0]}/>
        </div>);
    }
}