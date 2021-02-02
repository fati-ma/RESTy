import React from 'react';
import '../styles/history.scss';

export default function History(props) {
  let history = localStorage.getItem('history') ? JSON.parse(localStorage.getItem('history')) : [];
  return (
    <>
      {history.map((query) => {
        console.log('query', query);
        return (
          <li onClick={handelClick} key={query.method + query.url}>
          </li>
        );
      })}
    </>
  );
}

