import React from 'react';
import './DetailsFooter.scss';
import { Facebook, Pinterest, Twitter } from 'react-bootstrap-icons';
import { detailStore } from '../../../stores.js';

function DetailsFooter() {
  const slogan = detailStore((state) => state.productDetails.slogan);
  const description = detailStore((state) => state.productDetails.description);
  // console.log(window.location.href);

  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`;
  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${window.location.href}`;
  const pinterestShareUrl = `https://pinterest.com/pin/create/button/?url=${window.location.href}`;

  return (
    <div className="details-footer">
      <h3 className="dp-slogan">
        {slogan}
      </h3>
      <div className="dp-description">
        {description}
      </div>
      <div className="dp-social-container">
        <a href={facebookShareUrl} rel="noreferrer" target="_blank">
          <Facebook className="dp-social-icon icon-facebook" />
        </a>
        <a href={twitterShareUrl} rel="noreferrer" target="_blank">
          <Twitter className="dp-social-icon icon-twitter" />
        </a>
        <a href={pinterestShareUrl} rel="noreferrer" target="_blank">
          <Pinterest className="dp-social-icon icon-pinterest" />
        </a>
      </div>
    </div>
  );
}

export default DetailsFooter;
