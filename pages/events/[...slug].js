import EventList from 'components/events/EventList';
import ResultsTitle from 'components/results-title/results-title';
import Button from 'components/ui/Button';
import ErrorAlert from 'components/ui/error-alert';
import { getFilteredEvents } from 'dummy-data';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';

function FilteredEventsPage() {
  const router = useRouter();
  const filteredData = router.query.slug;
  if (!filteredData) {
    return <p className='center'>Loading...</p>;
  }
  const filteredYear = filteredData[0];
  const filteredMonth = filteredData[1];
  const numYear = +filteredYear;
  const numMonth = +filteredMonth;
  if (isNaN(numYear) || isNaN(numMonth) || numYear > 2023 || numYear < 2019 || numMonth < 1 || numMonth > 12) {
    <Fragment>
      <ErrorAlert>
        <p className='center'>Invalid Filter</p>
      </ErrorAlert>

      <div className='center'>
        <Button link='/events'>Show All Events</Button>
      </div>
    </Fragment>;
  }
  const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth });
  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p className='center'>No Events Found</p>
        </ErrorAlert>

        <div className='center'>
          <Button link='/events'>Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const date = new Date(numYear, numMonth - 1);
  return (
    <div>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </div>
  );
}

export default FilteredEventsPage;
