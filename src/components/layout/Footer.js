import classes from './Footer.module.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.content}>
          <div className={classes.section}>
            <h3>React Meetups</h3>
            <p>Find and join meetups in your area. Connect with like-minded people and share your interests.</p>
          </div>
          
          <div className={classes.section}>
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">All Meetups</a></li>
              <li><a href="/new-meetup">Add New Meetup</a></li>
              <li><a href="/favorites">My Favorites</a></li>
            </ul>
          </div>
          
          <div className={classes.section}>
            <h3>Contact Us</h3>
            <p>Email: info@reactmeetups.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>
        
        <div className={classes.bottom}>
          <p>&copy; {currentYear} React Meetups. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 