'use client';

import React, { useEffect } from 'react';
import { Row, Col } from 'reactstrap';
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import useSWR from 'swr';


import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import Highlight from '../../components/Highlight';


function Comdue() {
  const { user, isLoading } = useUser();

  function importComdue(r) {
    let comdues = {};
    r.keys().map((item, index) => {
      comdues[item.replace('./', '')] = r(item);
    });
    return comdues;
  }
  
  const comdues = importComdue(
    require.context(`../public/repfolder/${user.adp}/COMDUE`, false, /\.pdf$/)
  );
  
  return (
    <>
      <h1>Comdue</h1>

      <Row className="d-flex justify-content-between" data-testid="pdf-items">
      {Object.keys(comdues).map((comdueName, index) => (
        <Col key={index} md={5} className="mb-4">
          <h6 className="mb-3">
            <a key={index} href={`/repfolder/${user.adp}/COMDUE/` + comdueName}>{comdueName}</a>
            {/* <a key={index} href={'/repfolder/ADP1/COMDUE/' + comdueName}>{comdueName}</a> */}
          </h6>
        </Col>
      ))}
    </Row>

    </>
  );
}

export default withPageAuthRequired(Comdue, {
  onRedirecting: () => <Loading />,
  onError: error => <ErrorMessage>{error.message}</ErrorMessage>
});
