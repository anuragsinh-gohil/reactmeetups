# React Meetups

A modern, responsive web application for discovering and organizing meetups. Built with React and Firebase.
React Meetups is a modern web application designed to connect people through local events and gatherings. Built with React and Firebase, this platform offers a seamless experience for both event organizers and attendees. The application features a clean, responsive interface that adapts beautifully to all device sizes, from desktop computers to mobile phones. Users can browse through a visually appealing grid of meetups, each displayed with optimized images and smooth loading transitions. The platform includes a robust favorites system that allows users to save and manage their preferred meetups, with data persistence using localStorage. Event organizers can easily create new meetups through an intuitive form interface, complete with fields for title, image URL, address, and description. The application leverages Firebase's Realtime Database for instant data synchronization, ensuring that users always see the most up-to-date information. The architecture utilizes React's Context API for efficient state management, particularly for handling the favorites functionality. The project follows modern development practices, including component-based architecture, CSS Modules for scoped styling, and a mobile-first approach to design. With features like form validation, real-time updates, and smooth animations, React Meetups provides a professional and engaging platform for discovering and organizing local events. The application's modular structure makes it maintainable and scalable, while its comprehensive error handling and loading states ensure a reliable user experience.

## Features

- 🌐 Browse all meetups in your area
- ✨ Create and publish new meetups
- ❤️ Save your favorite meetups
- 📱 Fully responsive design
- 🎨 Modern UI with smooth animations
- 🔥 Real-time data with Firebase

## Technologies Used

- React 18
- React Router v5
- Firebase Realtime Database
- CSS Modules
- Context API for state management

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/react-meetups.git
cd react-meetups
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Project Structure

```
src/
├── components/
│   ├── layout/         # Layout components (Header, Footer, etc.)
│   ├── meetups/        # Meetup-related components
│   └── ui/             # Reusable UI components
├── pages/              # Page components
├── store/              # Context and state management
└── index.js           # Application entry point
```

## Features in Detail

### All Meetups Page
- View all available meetups
- Responsive grid layout
- Image optimization
- Smooth loading transitions

### Add New Meetup
- User-friendly form
- Input validation
- Real-time Firebase integration
- Automatic redirection after submission

### Favorites
- Add/remove meetups to favorites
- Persistent storage using localStorage
- Real-time counter update
- Smooth animations

## Styling

The project uses CSS Modules for styling with:
- Modern color scheme
- Consistent spacing
- Responsive design
- Smooth transitions
- Mobile-first approach
