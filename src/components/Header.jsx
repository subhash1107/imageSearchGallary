import React, { useContext, useState } from "react";
import { ImageContext } from "../App";

function Header(){
    const [inputTxt, setInputTxt] = useState("")
    const {fetchData, setSearched} = useContext(ImageContext)
    function inputEvent(e){
      setInputTxt(e.target.value)
    }
    function btnEvent(){
      fetchData(`search/photos?page=1&query=${inputTxt}&&client_id=${process.env.REACT_APP_ACCESS_KEY}`)
      setSearched(inputTxt)
      setInputTxt("")

    }
    function enterKeyEvent(e){
      if(e.key === 'Enter'){
        fetchData(`search/photos?page=1&query=${inputTxt}&&client_id=${process.env.REACT_APP_ACCESS_KEY}`)
        setSearched(inputTxt)
        setInputTxt("")
      }
      

    }


    return(
        <>
        <div className='header-div'>
          <h2 className='text-center'>Find Images</h2>
    
          <div className="container">
            <div className="row height d-flex justify-content-center align-items-center">
              <div className="col-md-8 col-lg-5 my-2">
                <div className="search">
                  <input type="text" className="form-control" placeholder="Search Anything...." value={inputTxt} onChange={inputEvent} onKeyDown={enterKeyEvent} />
                  <button className="btn btn-primary" onClick={btnEvent}>Search</button>
                </div>
              </div>
            </div>
          </div>
        
        </div>
        </>
      )
}

export {Header}