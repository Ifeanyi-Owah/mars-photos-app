import React, { Component } from 'react'
import "./SearchForm.css";
import { throwStatement } from '@babel/types';

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = { sol: "", camera: "" }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        // fetch("http://localhost:3001/handleApi")
        //     .then(data => console.log(data))
        //     .catch(console.log);
        
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:3001/handleApi")
        .then((response)=>response.json())
        .then((data) => console.log(data))
        // alert(`You typed: ${this.state.camera} and ${this.state.sol} `)
        // this.setState({ camera: "" })
    }
    render() {
        return (
            <div className="SearchForm">
                <h2>Curiosity</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="sol">
                        Sol
                    <input type="text" id="sol" name="sol"
                            value={this.state.sol} onChange={this.handleChange}
                            placeholder="sol" />
                    </label>
                    <br />
                    <label htmlFor="camera">
                        Camera
                        <select id="camera" name="camera"
                            value={this.state.camera} onChange={this.handleChange}>
                            <option value="Any">Any</option>
                            <option value="FHAZ">FHAZ</option>
                            <option value="RHAZ">RHAZ</option>
                            <option value="MAST">MAST</option>
                            <option value="CHEMCAM">CHEMCAM</option>
                            <option value="MAHLI">MAHLI</option>
                            <option value="MARDI">MARDI</option>
                            <option value="NAVCAM">NAVCAM</option>
                        </select>
                    </label>
                    {/* <label htmlFor="camera">Camera</label>
                    <input type="text"
                        id="camera"
                        name="camera"
                        value={this.state.camera}
                        onChange={this.handleChange}
                        placeholder="camera" /> */}
                    <br />
                    <button className="SearchForm-button"
                        onClick={this.handleSubmit}>
                        Find Photos
                    </button>
                </form>
            </div>
        );
    }
}


export default SearchForm;