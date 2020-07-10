import React, {useState} from 'react';
import {AddCategory} from './AddCategory';
import { GifGrid } from './GifGrid';

export const GifExpert = () => {

    const [categories, setCategories] = useState([]);

    /*const agregarUno = () => {
        setCategories(["HunterXHunter", ...categories]);
    }*/

    return (
        <div className='cnt-gif-expert'>
            <h3>Gif Expert App</h3>
            <AddCategory setCategories={setCategories}/>
            <hr></hr>

            <ul>
                    {categories.map((category) => {
                        return <GifGrid key={category} category={category}/>
                    })}
            </ul>
        </div>
    )
}