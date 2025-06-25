import React from 'react';

const reviews = [
  { name: 'Sarah M.', rating: 5, text: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.", date: 'August 14, 2023' },
  { name: 'Alex K.', rating: 5, text: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.", date: 'August 15, 2023' },
  { name: 'Ethan R.', rating: 5, text: "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.", date: 'August 16, 2023' },
  { name: 'Olivia P.', rating: 5, text: "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out!", date: 'August 17, 2023' },
];

const HappyCustomers = () => (
  <section className="happy-customers">
    <h2 className="happy-customers__title">OUR HAPPY CUSTOMERS</h2>
    <div className="happy-customers__reviews">
      {reviews.map((r, i) => (
        <div className="review-card" key={i}>
          <div className="review-card__header">
            <span className="review-card__name">{r.name}</span>
            <span className="review-card__stars">{'★'.repeat(r.rating)}</span>
          </div>
          <div className="review-card__text">{r.text}</div>
          <div className="review-card__date">{r.date}</div>
        </div>
      ))}
    </div>
  </section>
);

export default HappyCustomers;
