//our-domain.com/new-meetup
import { useRouter } from "next/router";
import { Fragment } from "react";
import Head from "next/head";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {
   const router = useRouter();

   async function addMeetupHandler(enteredMeetupData){
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      headers:{
         'Content-Type': 'application/json'
      }
    });

    const data = await response.json();
    console.log(data);

    router.push('/');
   } 
   return ( 
     <Fragment>
        <Head>
           <title>Add a new MeetUp</title>
           <meta
             name='description'
             content='Add your own meetups create network to grow your networth!'
           />
         </Head>
         <NewMeetupForm onAddMeetup={addMeetupHandler} /> {/* //a pointer not a result of executing so no paranthesis here, bcs it should be executed from inside that component when form is submitted. */}
     </Fragment>
   );  
}

export default NewMeetupPage;