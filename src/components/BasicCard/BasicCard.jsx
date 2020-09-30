import React from 'react';

import './BasicCard.scss';

function BasicCard({ thumbnailUrl, title, textLink, linkUrl }) {
  return (
    <div className="BasicCard">
      <h1>{title}</h1>
      <img className="BasicCard__thumbnail" alt="todo" src={thumbnailUrl} />
      <a href={linkUrl}>{textLink}</a>
    </div>
  );
}

export default BasicCard;
