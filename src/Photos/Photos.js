import React, { Component } from 'react'
import PhotoItem from "../PhotoItem/PhotoItem";
import { thisExpression } from '@babel/types';

class Photos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photoData: []
        }
    }
    componentDidMount() {
        this.loadPhotos();
    }
    loadPhotos() {
        fetch("http://localhost:3001/handleApi")
            .then(response => {
                if (!response.ok) {
                    if (response.status >= 400 && response.status < 500) {
                        return response.json().then(data => {
                            console.log(data)
                            let err = { errMessage: data.message };
                            throw err;
                        })
                    } else {
                        let err = { errMessage: 'Opps! The server is not responding..please try again!' };
                        throw err;
                    }
                }
                return response.json();
            })
            .then(photoData => this.setState({photoData}))
    }
    render() {
   const photos = this.state.photoData.photos.map((p)=>(
       <PhotoItem 
       key={p._id}
           {...p}
       />
   ));
   return (
            <div>
                <h1>Photos</h1>
                {}
                
            </div>
        );
    }
}




export default Photos;