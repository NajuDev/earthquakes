import React from 'react';

export const FilterUI = (
    {
        mag = undefined,
        magType = undefined,
        handleMagChange,
        handleMagTypeChange
    }
) => {
    return (
        <aside>
            <br />
            <label>
                Magnitude
                <input
                    type="number"
                    defaultValue={ mag }
                    onChange={ handleMagChange }
                />
            </label>
            <label>
                Magtype 
                <input
                    type="text"
                    defaultValue={ magType }
                    onChange={ handleMagTypeChange }
                />
            </label>
        </aside>
    );
}