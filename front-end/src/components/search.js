import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Search(){

        const[keyWord, setKeyWord] = useState('');
         const navigate = useNavigate();

        const searchHandler = () => {
            navigate('/search?keyword='+ keyWord)
        }

    return(
        <div className="input-group">
        <input
            type="text"
            id="search_field"
            onChange={(e)=> setKeyWord(e.target.value)}
            onBlur={searchHandler}
            className="form-control"
            placeholder="Enter Product Name ..."
          />
          <div className="input-group-append">
            <button id="search_btn" className="btn" onClick={searchHandler}>  
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
          </div>
      </div>

    )
}