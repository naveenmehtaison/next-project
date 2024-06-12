import React from 'react'
import NewMeetupForm from '../../components/meetups/NewMeetupForm'
function NewMeetup() {
  function addMeetupHandler(enteredData){


  }
  return (
    <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    
  )
}

export default NewMeetup