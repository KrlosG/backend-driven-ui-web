import React from 'react';

import './GridCard.scss';

function GridCard({ title, textLink, linkUrl, grid }) {
  return (
    <div className="GridCard">
      <h1>{title}</h1>
      <div className="GridCard__grid">
        {grid.map(({ thumbnailUrl, subTitle }) => (
          <div className="GridCard__thumbnail">
            <img alt="todo" src={thumbnailUrl} />
            <span>{subTitle}</span>
          </div>
        ))}
      </div>
      <a href={linkUrl}>{textLink}</a>
    </div>
  );
}

export default GridCard;
