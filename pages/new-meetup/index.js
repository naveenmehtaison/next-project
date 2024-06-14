import React, { Fragment } from 'react';
import { useRouter } from 'next/router';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import Head from 'next/head';
import { Fragment } from 'react';
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

  return(
    <Fragment>        
        <Head>
          <title>Add A new Meet up</title>
          <meta name="description" content='Browse a huge list of highly active React Meetup'></meta>
        </Head>
        <NewMeetupForm onAddMeetup ={addMeetupHandler}/>
    </Fragment> 
)
}

export default NewMeetup;
