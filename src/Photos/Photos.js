import React, { Component } from 'react'
import PhotoItem from "../PhotoItem/PhotoItem";
import SearchForm from "../SearchForm/SearchForm";
import axios from 'axios';
import "./Photos.css"

class Photos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photoData: []
        }
        this.loadPhotos = this.loadPhotos.bind(this);
    }

    loadPhotos(val1, val2) {
        fetch("https://glacial-scrubland-35919.herokuapp.com//handleApi", {
            method: "post",
            headers: new Headers({
                "Content-Type": "application/json",
            }),
            body: JSON.stringify({ sol: val1, camera: val2 })
        })
            .then((response) => response.json())
            .then((data) => {
                const photoData = data.photos.slice(0, 9);
                const updatedPhoto = photoData.map(photodata => {
                    return {
                        ...photodata,
                    }
                }
                )
                this.setState({ photoData: updatedPhoto })
                console.log(photoData);
            })
    };
    render() {

        const photos = this.state.photoData.map(photo => {
            return <PhotoItem key={photo.id} img_src={photo.img_src} />
        }

        );
        return (
            <div className="Photos">
                <SearchForm loadPhotos={this.loadPhotos} />
                <h1>Photos</h1>
                {photos}
            </div>
        );
    }
}




export default Photos;