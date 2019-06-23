import React, { Component } from 'react'
import "./Container.css";
import Header from "../Header/Header"
import SearchForm from "../SearchForm/SearchForm";

class Container extends Component{
    render(){
        return(
            <div className="Container">
                <Header />
                <SearchForm />
            </div>
        );
    }
}

export default Container;