import React, { Component } from 'react';
import PictureList from './picture_list';

export default class InputForm extends Component{
    
    state={
        picUrl:'',
        picTitle:'',
        picList:[]
    }

    setPicUrl = (e) => {
        this.setState({picUrl:e.target.value});
    };

    setPicTitle = (e) => {
        this.setState({picTitle:e.target.value});
    };

    savePic = (e) => {
        e.preventDefault();
        this.setState({picList:this.state.picList.concat(this.state.picTitle +"|"+this.state.picUrl)});
        document.getElementById('url').value='';
        document.getElementById('title').value='';
    };

    render(){

        return(
            <div className="ControlBox">
                <input className="input" id="url" type="text" onChange={this.setPicUrl} placeholder="Enter URL" />
                <br />
                <input className="input" id="title" type="text" onChange={this.setPicTitle} placeholder="Title" />
                <br />
                <button onClick={this.savePic}>New Post</button>
                <br />
                <br />
                <PictureList pictures={this.state.picList} />
            </div>
        );
    }
}