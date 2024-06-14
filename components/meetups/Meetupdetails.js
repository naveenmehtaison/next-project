import React from 'react'
import Card from '../ui/Card'
import classes from '../meetups/Meetupdetails.module.css'
function Meetupdetails(props) {
  console.log(props)
  return (
    <section className={classes.detail}>
    <img
      src={props.image}
      alt={props.title}
    />
    <h1>{props.title}</h1>
    <address>{props.address}</address>
    <p>{props.description} </p>
  </section>
  )
}

export default Meetupdetails