import React, {Component} from 'react';
import ShowPicture from './picture';

export default class PictureList extends Component{
    render(){
        const {pictures} = this.props;

        return(
            <div>
                {pictures.map(p => {
                    return(
                        <div key={p} className="PictureFrame">
                        <ShowPicture data={p} />
                        </div>
                    )
                })}
            </div>
        );
    }
} 