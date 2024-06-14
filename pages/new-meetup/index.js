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

      router.push('/');
    } catch (error) {
      console.error('Error adding meetup:', error);

    }
  }

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetup;
