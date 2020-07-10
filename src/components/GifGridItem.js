import React from 'react'

export const GifGridItem = ({img}) => {
    return (
        <div className="card-grid-item animate__animated animate__fadeIn">
            <div className="grid-item">
                <h2>{img.title}</h2>
                <img src={img.url}></img>
            </div>  
        </div>
    )
}
