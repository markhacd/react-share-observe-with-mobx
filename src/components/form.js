import React, { useState } from 'react';

export default (props) => {
    const [value, setValue] = useState('');

    const setData = () => {
        props.DataStorage.data.push(value);
        setValue('');
    }
    return (
        <>
            <div>
                <input 
                    value={value}
                    onChange={ (e) => setValue(e.target.value)}
                />
                <button onClick={ () => setData() }>Add Data</button>
            </div>
        </>
    );
}