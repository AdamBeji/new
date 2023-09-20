import React, { useState, useEffect } from 'react';
import { getDatabase, ref, push, set } from 'firebase/database';
import { initializeApp } from 'firebase/app';
import './Table.css';

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAIkUADPFKXDvI_O03zYzBh4xMggOojygI",
    authDomain: "movie-reviewer-bd3b4.firebaseapp.com",
    databaseURL: "https://movie-reviewer-bd3b4-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "movie-reviewer-bd3b4",
    storageBucket: "movie-reviewer-bd3b4.appspot.com",
    messagingSenderId: "785095003004",
    appId: "1:785095003004:web:a7e6a375644f2d590772f9",
    measurementId: "G-VG6MM891KN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

function AddDatabase() {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [adamRating, setAdamRating] = useState('');
  const [kiaRating, setKiaRating] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !date || !adamRating || !kiaRating) {
        alert('Please fill in all fields before submitting.');
        return;
      }

    // Call the addMovie function to add a new movie record
    addMovieToDatabase(title, date, adamRating, kiaRating);

    // Clear the form fields
    setTitle('');
    setDate('');
    setAdamRating('');
    setKiaRating('');
  };

  const addMovieToDatabase = (title, date, adamRating, kiaRating) => {
    const moviesRef = ref(database, 'movies'); // Replace 'movies' with your database reference
    const newMovieRef = push(moviesRef); // Generate a unique ID for the new record

    // Define the movie data
    const movieData = {
      title: title,
      date: date,
      AdamRat: adamRating,
      KiaRat: kiaRating
    };

    // Add the movie data to the database
    set(newMovieRef, movieData)
      .then(() => {
        console.log('Movie added successfully.');
      })
      .catch((error) => {
        console.error('Error adding movie:', error);
      });
  };

  return (
    <div className='AddTable'>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" placeholder="Date" value={date} onChange={(e) => setDate(e.target.value)} />
        <input type="text" placeholder="Adam Rating" value={adamRating} onChange={(e) => setAdamRating(e.target.value)} />
        <input type="text" placeholder="Kia Rating" value={kiaRating} onChange={(e) => setKiaRating(e.target.value)} />
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
}

export default AddDatabase;
