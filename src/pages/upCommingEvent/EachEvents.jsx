import React from 'react'
import { useLocation } from 'react-router-dom';

const EachEvents = ({ events, btnStyle }) => {
    // console.log(events)
    // const year = new Date(events?.date).getFullYear()
    const months = new Date(events?.date).getMonth() + 1;
    const dates = new Date(events?.date).getDate();
    // console.log(months)
    let monthName;
    switch (months) {
        case 1:
            monthName = "Jan"
            break;
        case 2:
            monthName = "Feb";
            break;
        case 3:
            monthName = "Mar"
            break;
        case 4:
            monthName = "Apr"
            break;
        case 5:
            monthName = "May";
            break;
        case 6:
            monthName = "Jun";
            break;
        case 7:
            monthName = "Jul";
            break;
        case 8:
            monthName = "Aug";
            break;
        case 9:
            monthName = "Sep";
            break;
        case 10:
            monthName = "Oct";
            break;
        case 11:
            monthName = "Nov";
            break;
        default: monthName = "Dec"
    }
    const { pathname } = useLocation()
    // console.log(monthName)
    return (
        <div className='shadow rounded-2xl'>
            <img className='w-full rounded-t-2xl' src={events?.eventImg} alt={events.title} />
            <div className='flex gap-4 md:gap-10 p-2 sm:p-4 items-center md:items-start'>
                <div className='flex flex-col items-end gap-2'>
                    <h4 className='font-extrabold text-primary text-sm sm:text-base md:text-xl'>{monthName}</h4>
                    <time className='text-xl sm:text-2xl md:text-4xl font-bold'>{dates}</time>
                </div>
                <div className='sm:space-y-4 space-y-2'>
                    <h3 className='font-bold line-clamp-2 text-sm sm:text-base'>{events?.title}</h3>
                    <p className='line-clamp-2 text-sm sm:text-base'>{events?.description}</p>
                    <button className={btnStyle && btnStyle}>{pathname === "/last-events" ? "Expired" : "Ticket"}</button>
                </div>
            </div>
        </div>
    )
}

export default EachEvents