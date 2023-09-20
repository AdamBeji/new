import React, { useEffect, useState } from 'react';
import { getDatabase, ref, get } from 'firebase/database';
import { initializeApp } from 'firebase/app';
import './Table.css';

function ShowDatabase() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
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

    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);

    const fetchData = async () => {
      try {
        const moviesRef = ref(database, 'movies');
        const snapshot = await get(moviesRef);

        if (snapshot.exists()) {
          const moviesData = [];
          snapshot.forEach((childSnapshot) => {
            const movie = childSnapshot.val();
            moviesData.push(movie);
          });
          setMovies(moviesData);
        } else {
          console.log('No data available');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Adam Rating</th>
            <th>Kia Rating</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie, index) => (
            <tr key={index}>
              <td>{movie.title}</td>
              <td>{movie.date}</td>
              <td className='adam-rating'>{movie.AdamRat}</td>
              <td className='kia-rating'>{movie.KiaRat}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ShowDatabase;
