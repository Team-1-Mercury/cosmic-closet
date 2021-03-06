import React, { useEffect } from 'react';
import axios from 'axios';
import './App.scss';
import ProductDetail from '../containers/ProductDetail.jsx';
import QuestionsAnswers from '../containers/QuestionsAnswers.jsx';
import RatingsReviews from '../containers/RatingsReviews.jsx';
import Navbar from '../containers/Navbar.jsx';

function App() {
  const headers = {
    Authorization: process.env.GITHUB_API_KEY,
  };

  const handleAnalytics = (e) => {
    // Get the widget
    let widgetFound = false;
    let widget;

    e.path.forEach((path) => {
      if (widgetFound) { return; }
      if (path.classList && path.classList.contains('widget')) {
        widget = path.id;
        widgetFound = true;
      }
    });

    // Get the clicked element
    const element = e.target.outerHTML;

    // Get current time
    const time = new Date();
    if (widgetFound) {
      axios.post(`${process.env.URL}interactions`, { element, widget, time }, { headers })
        .catch((err) => {
          throw err;
        });
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleAnalytics);

    return () => {
      window.removeEventListener('click', handleAnalytics);
    };
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <Navbar />
      {/* MAIN SECTIONS */}
      <main>
        <ProductDetail />
        <QuestionsAnswers />
        <RatingsReviews />
      </main>
    </>
  );
}

export default App;
