import React from 'react'
import { filters } from '../utils/constants'
import FilterOptions from './FilterOptions'

export default function RightSideBar() {
    return (
        <section className='w-96 h-screen bg-primary text-secondary border-l border-gray-500'>
            <div className='p-4'>
                <button className='p-2 px-7 rounded-4xl text-lg font-bold border-2 border-tertiary text-tertiary hover:bg-accent'>
                    Filters
                </button>
            </div>
            {filters.map(catagory => (
                <div key={catagory.type}>
                    <div className='bg-gray-500 p-1 px-3 text-secondary'>
                        {catagory.type}
                    </div>
                    <FilterOptions options={catagory.options} />
                </div>
            ))}
        </section>
    )
}
