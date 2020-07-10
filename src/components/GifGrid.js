import React, { useState, useEffect } from 'react'
import { GifGridItem } from './GifGridItem';
import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({category}) => {

    const [imgs, setImgs] = useState([])

    useEffect(()=> {
        getGifs(category).then((imgs) => {
            setImgs(imgs);
        });
    }, [ category ]);


    return (
        <>
            <h2>{category}</h2>
            <div className="cnt-card-grid">
                    {
                        imgs.map(img => {
                            return <GifGridItem key={img.id} img={img}/>
                        })
                    }   
            </div>
        </>
    )
}
