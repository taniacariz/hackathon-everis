import React from 'react'
import NavTop from '../components-home/NavTop'
import GoForwardArrow from '../components-home/Go-foward-arrow'
import Date from '../components-bookins/Date'

const Bookings = () => {

//const [step, setStep] = React.useState(1)
// const probando = step

//     const changeViewForm = ()=>{
//         if (probando === 1 ) {
            
//             return (
//                 <h1>hola</h1>
//             )
//         }
//     }

    return ( 
        <div className="booking-container">
            <NavTop />
            <Date />
            <GoForwardArrow />
        </div>
    )
}

export default Bookings;