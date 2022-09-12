import React from 'react'
import loading from './loading.gif'

const Spiner = () => {
    return (
        <>
            <div className='text-center'>
                <img src={loading} alt='loading'></img>
            </div>
        </>
    )
}
export default Spiner
