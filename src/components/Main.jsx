import React, { useContext } from "react";
import { ImageContext } from "../App";
import { Image } from "./Image";
import { Skeleton } from "./Skeleton";

function Main(){
    const {response, isLoading, searched} = useContext(ImageContext)
    return(
        <>
            <h5 className="main-h1 text-center my-2"><u>{`Results for ${searched || `Nature`}`}</u></h5>
            <div className="container my-5">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {isLoading ? <Skeleton items={10}/> : response.map((data, key)=>{
                        return(<Image key={key} data={data} />)
                    })}
                </div>
            </div>
        </>
    )
}
export {Main}
