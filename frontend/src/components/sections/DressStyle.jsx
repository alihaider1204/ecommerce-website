import React from 'react';

const styles = [
  { name: 'Casual', image: '/casual.jpg' },
  { name: 'Formal', image: '/formal.jpg' },
  { name: 'Party', image: '/party.jpg' },
  { name: 'Gym', image: '/gym.jpg' },
];

const DressStyle = () => (
  <section className="dress-style">
    <h2 className="dress-style__title">BROWSE BY DRESS STYLE</h2>
    <div className="dress-style__grid">
      {styles.map((style) => (
        <div className="dress-style__item" key={style.name}>
          <img src={style.image} alt={style.name} />
          <span>{style.name}</span>
        </div>
      ))}
    </div>
  </section>
);

export default DressStyle;
