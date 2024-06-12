import React from 'react'
import Card from '../ui/Card'
import classes from '../meetups/Meetupdetails.module.css'
function Meetupdetails(props) {
  return (
    <>
        <div className={classes.details}>
            <img src={props.img} alt={'title'} />

        </div>      
    </>
  )
}

export default Meetupdetails