import React from 'react'

export default function FilterOptions({ options }) {
    return (
        <div className='ms-3 flex flex-wrap space-x-2'>
            {options.map(option => (
                <div className='space-x-1 text-lg' key={option}>
                    <input type="checkbox" name={option} id={option} />
                    <label htmlFor={option}>{option}</label>
                </div>
            ))}
        </div>
    )
}
