import React, {useState, createRef} from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState("");

    const onChangeHandle = (e) => {
        setInputValue(e.target.value);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();

        if(inputValue != "" && inputValue.length > 2)
        {
            let aux = inputValue.substring(0, 1);
            aux = aux.toUpperCase() + inputValue.substring(1, inputValue.length);
            setCategories((cats) => [aux]);
        }
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <div>
                <input type="text" value={inputValue} onChange={onChangeHandle} placeholder="Ingrese categoria deseada"></input>
            </div>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
