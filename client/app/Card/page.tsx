"use client"
import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';


const CardWithSlideUpTextEffect: React.FC = () => {
  return (
    <html data-bs-theme="light" lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
        <title>Card-with-slide-up-text-effect</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" />
        {/* Include other necessary stylesheets */}
        {/* <link rel="stylesheet" href="/assets/css/Card-with-slide-up-text-effect.css" /> */}
      </head>
      <body>
        <section className="d-xl-flex justify-content-xl-center">
          <div className="main" style={{ height: '600px', transform: 'translate(-66px)' }}>
            <ul className="cards" style={{ position: 'static', display: 'inline-flex', overflow: 'visible', transform: 'perspective(0px) translate(0px) scale(0.89)', filter: 'brightness(106%)' }}>
              <li className="cards_item">
                <div className="card">
                  <div className="card_image">
                    <img src="https://images.pexels.com/photos/1458925/pexels-photo-1458925.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1600" alt="mixed vegetable salad in a mason jar" width="376" height="auto" style={{ marginTop: '-25px', marginLeft: '24px' }} />
                  </div>
                  <div className="card_content">
                    <h1 className="card_title">Dog Stay<span>$70.00 Per Night</span></h1>
                    <div className="card_text">
                      <p className="text_boxes text_1">Going out of town but can’t take your four legged friend with you? It would be wonderful to take our dogs with us, but it’s not always feasible. The dog motel offers safe, fun, and trustworthy overnight dog boarding services. Your dog will enjoy a full day of play in our facility on 10 acres. Your dog will have the time of their lives while staying with us. vegetables, fresh from the farmer's market.</p>
                      <p className="text_boxes text_2">it’s not always feasible. The dog motel offers safe, fun, and trustworthy overnight dog boarding services.&nbsp; Your dog will enjoy a full day of play in our facility on 10 acres.&nbsp;You can rest assured you dog will be well cared for &amp; have the time of their lives<br /><br /></p>
                    </div>
                  </div>
                </div>
              </li>
              {/* Other list items */}
            </ul>
          </div>
        </section>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
      </body>
    </html>
  );
};

export default CardWithSlideUpTextEffect;
