import React from 'react';
import { Link } from 'react-router-dom';
import MovieList from './MovieList';

function AboutUsPage() {
    return (
        <div style={{ padding: '20px', color: 'white' }}>
          <h1>About Cairo Theater</h1>
          <p>
            Welcome to Cairo Theater, your go-to destination for an exceptional cinematic experience.
            At Cairo Theater, we are dedicated to bringing you the latest and greatest films in a
            state-of-the-art environment. Our comfortable seating, high-quality sound systems, and
            crystal-clear screens ensure that you enjoy every moment of your movie.
          </p>
          <p>
            Our mission is to provide a memorable and immersive movie-watching experience for our
            audience. From thrilling blockbusters to thought-provoking independent films, Cairo Theater
            offers a diverse selection of movies for everyone to enjoy.
          </p>
          <p>
            Thank you for choosing Cairo Theater. Sit back, relax, and get ready to be entertained!
          </p>

          {/* Additional text and image */}
          <div style={{ marginTop: '10px', display: 'flex', alignItems: 'center' }}>
            <div style={{ flex: '1', marginRight: '40px', marginTop:'0px' }}>
              <p>
                One of the most important cultural highlights in Egypt was built by Khedive Ismail in 1869 & was considered as one of the masterpieces of the world stages.
              </p>
              <p>
                Our Scope includes repairing and development for the National Theatre that was burnt down by a massive fire in 2005 that includes the archaeological building, theatre building, actors building, storage building, administrative building, and general location works (landscaping – corridors –external fences – gates).
              </p>
            </div>
            <div style={{ flex: '1' }}>
              {/* Replace the placeholder URL with the actual URL of your image */}
              <img
                src="../images/national.png"
                alt="About Us Image"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
    );
}

export default AboutUsPage;
