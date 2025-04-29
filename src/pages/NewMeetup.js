import { useHistory } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const history = useHistory();

  function addMeetupHandler(meetupData) {
    fetch('https://react-getting-started-dec66-default-rtdb.firebaseio.com/meetups.json', {
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(() => {
      history.replace('/');
    });
    // .then(response => {
    //   if (!response.ok) {
    //     throw new Error('Something went wrong!');
    //   }
    //   return response.json();
    // })
    // .then(data => {
    //   console.log('Meetup saved:', data);
    // })
    // .catch(error => {
    //   console.error('Error:', error);
    // }) 

  }
  

    return (
      <section>
        <h1>Add New Meetup</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
    );
  }
  
  export default NewMeetupPage;
  