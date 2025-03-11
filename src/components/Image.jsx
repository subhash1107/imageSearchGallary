function Image({data}){
    return(
    <>
    <div className="col image-gallery">
        <a href={data.urls.regular} target="_blank" rel="noreferrer">
            <img src={data.urls.small} className="rounded" alt={data.alt_description} />
        </a>
    </div>

    </>
    )
}

export {Image}