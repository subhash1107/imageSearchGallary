function Skeleton({items}){
    return [...Array(items).keys()].map((index)=> {
        return(
        <div className="animate-pulse pulse" key={index}>
            <div className="skeleton-div rounded "></div>
        </div>
        )
    })
}

export {Skeleton}