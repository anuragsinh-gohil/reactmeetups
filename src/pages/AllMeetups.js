import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setloadedMeetups] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        setError(null);
        console.log('Fetching meetups...');
        
        fetch('https://react-getting-started-dec66-default-rtdb.firebaseio.com/meetups.json'
        ).then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch meetups');
            }
            return response.json();
        }).then(data => {
            console.log('Received data:', data);
            const meetups = [];

            for (const key in data){
                const meetup ={
                    id: key,
                    ...data[key]
                };
                meetups.push(meetup);
            }

            setIsLoading(false);
            setloadedMeetups(meetups);
        }).catch(error => {
            console.error('Error fetching meetups:', error);
            setError(error.message);
            setIsLoading(false);
        });    
    }, []);

    if (error) {
        return (
            <section>
                <p>Error: {error}</p>
            </section>
        );
    }

    if (isLoading){
        return(
            <section>
                <p>Loading...</p>
            </section>
        );
    }

    return (
      <section>
       <h1>All Meetups</h1>
       <MeetupList meetups={loadedMeetups} />
    </section>
    );
  }
  
  export default AllMeetupsPage;
  