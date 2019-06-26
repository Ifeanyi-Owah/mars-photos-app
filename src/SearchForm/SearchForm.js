import React, { Component } from 'react'
import "./SearchForm.css";


class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = { sol: "1000", camera: "Any" }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() { }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.loadPhotos(this.state.sol, this.state.camera);
        // console.log(this.state.sol, this.state.camera);
    }

    render() {
        return (
            <div className="SearchForm">
                <h1 className="SearchForm-heading">Mars Photo API</h1>
                <h2 className="SearchForm-sub-heading">Curiosity</h2>
                <form onSubmit={this.handleSubmit} className="SearchForm-form">
                    <label htmlFor="sol">
                        <span className="SearchForm-text">Sol</span>
                        <input type="text" id="sol" name="sol"
                            value={this.state.sol} onChange={this.handleChange}
                            placeholder="sol" />
                    </label>
                    <br />
                    <label htmlFor="camera">
                        <span className="SearchForm-text">Camera</span>
                        <select id="camera" name="camera"
                            value={this.state.camera} onChange={this.handleChange}>
                            <option defaultValue="Any">Any</option>
                            <option value="FHAZ">FHAZ</option>
                            <option value="RHAZ">RHAZ</option>
                            <option value="MAST">MAST</option>
                            <option value="CHEMCAM">CHEMCAM</option>
                            <option value="MAHLI">MAHLI</option>
                            <option value="MARDI">MARDI</option>
                            <option value="NAVCAM">NAVCAM</option>
                        </select>
                    </label>
                    <br />
                    <button className="SearchForm-button"
                        onClick={this.handleSubmit}>
                        Find Photos
                    </button>
                </form>
                <p>This API is designed to collect image data gathered by NASA's Mars rovers and make it more easily available to other developers, educators, and citizen scientists.</p>
                <div className="SearchForm-container">
                    <h3>Curiosity's Cameras</h3>
                    <table className="SearchForm-table">
                        <thead>
                            <tr>
                                <th>Abbreviation</th>
                                <th>Full Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>FHAZ</td>
                                <td>Front Hazard Avoidance Camera</td>
                            </tr>
                            <tr>
                                <td>NAVCAM</td>
                                <td>Navigation Camera</td>
                            </tr>
                            <tr>
                                <td>MAST</td>
                                <td>Mast Camera</td>
                            </tr>
                            <tr>
                                <td>CHEMCAM</td>
                                <td>Chemistry and Camera Complex</td>
                            </tr>
                            <tr>
                                <td>MAHLI</td>
                                <td>Mars Hand Lens Imager</td>
                            </tr>
                            <tr>
                                <td>MARDI</td>
                                <td>Mars Descent Imager</td>
                            </tr>
                            <tr>
                                <td>RHAZ</td>
                                <td>Rear Hazard Avoidance Camera</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}




export default SearchForm;