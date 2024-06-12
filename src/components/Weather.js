import React, { useState } from 'react';
import axios from 'axios';

export const Weather = () => {
  const [userquery, setuserquery] = useState('');
  const [data, setdata] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetch_weatherdata = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${userquery}&appid=cb90319c5e2007db25f6214d1a9a9b80&units=metric`
      );
      setdata(res.data);
    } catch (error) {
      setError('City not found. Please try again.');
      setdata(null);
    } finally {
      setLoading(false);
    }
  };

  const handleclick = () => {
    if (userquery.trim() !== '') {
      fetch_weatherdata();
    }
    setuserquery('');
  };

  return (
    <div className="p-4 bg-slate-900 h-full">
      <div className="mb-4">
        <input
          type="text"
          onChange={(e) => setuserquery(e.target.value)}
          value={userquery}
          placeholder="Type city name"  
          className="border p-2 rounded mr-2"
        />
        <button
          onClick={handleclick}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Search
        </button>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {data && (
        <div className="bg-gray-100 p-4 rounded shadow-md">
          <h2 className="text-xl font-bold">City name: {data.name}</h2>
          <p>Temperature: {data.main.temp} °C</p>
          <p>
            Weather:
            {data.weather.map((i) => (
              <div key={i.id}>
                <p>Description: {i.description}</p>
                <p>Main: {i.main}</p>
              </div>
            ))}
          </p>
          <p>Humidity: {data.main.humidity}%</p>
          <p>Wind speed: {data.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};
