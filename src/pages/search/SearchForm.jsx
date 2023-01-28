import React, { useState } from "react";
import style from "./SearchForm.css"


const SearchForm = (props) => {
    const [values, setValues] = useState({
        input: '',
    })
    const handleInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            input: event.target.value,
        }));
        // console.log(values) // test 
    };
    const search = (e) => {
        e.preventDefault();
        props.hanDleChangeText(values);
        //    console.log(values) //test
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.hanDleChangeText(values);
    }
    return (
        <div className="searchGroup">
            <div >
                <div>
                    <div class="input-group">
                        <div class="form-outline" onSubmit={handleSubmit} className="form-horizontal">
                            <input type="search" id="form1" class="form-control" name="input" value={values.input} onChange={handleInputChange} />
                        </div>
                        <button id = "buttonSearch" type="button" onClick={search} class="btn btn-primary">
                            <i class="fas fa-search"></i>
                        </button>
                    </div>
                </div>
                <div id = "line">abc</div>
                <div className= "groupButton">
                    <button className="resetIcon">Reset</button>
                    <button type="submit" id="search-btn" onClick={search} >Search</button>
                </div>
            </div>
        </div>
    );
}


export default SearchForm;