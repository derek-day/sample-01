'use client';

import React from 'react';
import { Row, Col } from 'reactstrap';
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import useSWR from 'swr';


import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import Highlight from '../../components/Highlight';

function TerritoryListings() {
  const { user, isLoading } = useUser();

  return (
    <>
      <h1>Territory Listings</h1>
    </>
  );
}

export default withPageAuthRequired(TerritoryListings, {
  onRedirecting: () => <Loading />,
  onError: error => <ErrorMessage>{error.message}</ErrorMessage>
});
