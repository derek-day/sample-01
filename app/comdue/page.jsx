'use client';

import React, { useEffect, useState } from 'react';
import { Row, Col } from 'reactstrap';
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import useSWR from 'swr';


import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import Highlight from '../../components/Highlight';

// import { images } from '../../utils/imageLoader';

function Comdue() {
  const { user, isLoading } = useUser();

  function importAllImages(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace('./', '')] = r(item);
    });
    return images;
  }

  const adp = user.adp;

  const images = importAllImages (
    require.context('../../public/repfolder/ADP1/COMDUE', false, /\.pdf$/)
    // require.context(`../../public/repfolder/ADP${adp}/COMDUE`, false, /\.pdf$/, 'lazy')
  );
  
  return (
    <>
      <h1>Comdue</h1>

      <Row className="d-flex justify-content-between" data-testid="pdf-items">
      {Object.keys(images).map((imageName, index) => (
        <Col key={index} md={5} className="mb-4">
          <h6 className="mb-3">
            <a key={index} href={`/repfolder/ADP${user.adp}/COMDUE/` + imageName}>{imageName}</a>
            {/* <a key={index} href={`/repfolder/Comdue/` + imageName}>{imageName}</a> */}
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
