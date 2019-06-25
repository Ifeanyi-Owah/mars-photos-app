import React, { Component } from 'react'
import PhotoItem from "../PhotoItem/PhotoItem";
import axios from 'axios';

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
            .then((response) => response.json())
            .then((data) => {
                const photoData = data.photos.slice(0, 9);
                const updatedPhoto = photoData.map(photodata =>{
                    return{
                        ...photodata,
                    }
                } 

                )
                this.setState({ photoData: updatedPhoto })
                console.log(photoData);
            })


        //     fetch("http://localhost:3001/handleApi")
        //         .then(response => {
        //             if (!response.ok) {
        //                 if (response.status >= 400 && response.status < 500) {
        //                     return response.json().then(data => {
        //                         console.log(data)
        //                         let err = { errMessage: data.message };
        //                         throw err;
        //                     })
        //                 } else {
        //                     let err = { errMessage: 'Opps! The server is not responding..please try again!' };
        //                     throw err;
        //                 }
        //             }
        //             return response.json();
        //         })
        //         .then(photoData => this.setState({photoData: response.data.photoData}))
    }
    render() {
        //    const photos = this.state.photoData.map((p, i)=>(
        //        <PhotoItem 
        //        key={p.id}
        //            {...p}/> 
        //    ));
        const photos = this.state.photoData.map(photo => {
            return <PhotoItem key={photo.id} img_src={photo.img_src} />
        }

        );
        return (
            <div>
                <h1>Photos</h1>
                {photos}
            </div>
        );
    }
}




export default Photos;