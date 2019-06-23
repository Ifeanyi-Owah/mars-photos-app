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
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleSubmit(e) {
        e.preventDefault();
        alert(`You typed: ${this.state.camera}`)
        this.setState({ camera: "" })
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
                            <option value="Any" selected>Any</option>
                            <option value="grapefruit">Grapefruit</option>
                            <option value="lime">Lime</option>
                            <option value="coconut">Coconut</option>
                            <option value="mango">Mango</option>
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
                    <button className="SearchForm-button">Find Photos</button>
                </form>
            </div>
        );
    }
}


export default SearchForm;