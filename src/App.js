import React, { useState } from 'react';
import './style.css';

function App() {
  const [userData, setUserData] = useState(null);

  const fetchRandomUser = () => {
    fetch('https://randomuser.me/api/')
      .then((response) => response.json())
      .then((data) => setUserData(data.results[0]))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h1>Losowe dane użytkownika</h1>
      <button onClick={fetchRandomUser}>Losuj dane</button>

      {userData && (
        <div>
          <img src={userData.picture.large} alt="User" />
          <p>Imię: {userData.name.first}</p>
          <p>Nazwisko: {userData.name.last}</p>
          <p>Email: {userData.email}</p>
          <p>Telefon: {userData.phone}</p>
          <p>Płeć: {userData.gender}</p>
        </div>
      )}
    </div>
  );
}

export default App;
