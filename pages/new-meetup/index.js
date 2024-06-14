import React from 'react';
import { useRouter } from 'next/router';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function NewMeetup() {
  const router = useRouter();

  async function addMeetupHandler(enteredData) {
    try {
      const response = await fetch('/api/new-meetup', {
        method: 'POST',
        body: JSON.stringify(enteredData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      // Optionally, if you need the response data
      // const data = await response.json();
      // console.log(data);

      // Navigate to home page after successful submission
      router.push('/');
    } catch (error) {
      console.error('Error adding meetup:', error);
      // Handle error if necessary
    }
  }

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetup;
