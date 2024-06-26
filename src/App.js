import React from "react";
import useFetch from "./customhooks/useFetch";
import './App.css';

const App = () => {
  const { responseFromUrl, isLoading, isError, apiError } = useFetch('https://dummyjson.com/users');
  console.log('Comp DATA', responseFromUrl);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {apiError}</div>;
  }

  return (
    <main>
      <section className="menu-section">
        <h1>API Data</h1>
        {responseFromUrl.users.map((res) => (
          <div key={res.id}>
            <span className='user-detail'>{res.firstName} {res.lastName}</span>
            <span className='user-detail--email'>{res.email}</span>
          </div>
        ))}
      </section>
    </main>
  );
}

export default App;
