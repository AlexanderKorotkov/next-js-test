import Link from 'next/link';
import React from 'react';

function EventItem(props) {
  const { title, image, data, location, id } = props;

  const humanReadableDate = new Date(data).toDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const formattedAddress = location.replace(', ', '\n');
  const exploreLink = `/event/${id}`;

  return (
    <li>
      <img src={'/' + image} alt='' />
      <div>
        <div>
          <h2>{title}</h2>
          <div>
            <time>{humanReadableDate}</time>
          </div>
          <div>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div>
          <Link href={exploreLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
