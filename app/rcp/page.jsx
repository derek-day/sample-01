'use client';

import React, { useEffect, useState } from 'react';
import { Row, Col } from 'reactstrap';
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import useSWR from 'swr';

import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import Highlight from '../../components/Highlight';

function RepCommissions() {
  const { user, isLoading } = useUser();

  //get all pdfs collected from the specified folder (cannot dynamically import files with adp variable, need to shorten list later)
  function importAllImages(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace('./', '')] = r(item);
    });
    return images;
  }

  const images = importAllImages (
    require.context('../../public/repfolder/RepCommissions/', true, /\.pdf$/, 'lazy')
  );

  //after getting map of all pdfs inside of specified folder, create a new map that contains just the pdfs for the logged in rep
  const adp = user.adp;

  function getRepList(r) {
    let list = {};
    {Object.keys(r).map((imageName, index) => {
      if(imageName.includes('ADP'+adp)){
        list[imageName.replace('./', '')] = imageName;
      }
    })}
    return list;
  }

  const list = getRepList(images);

  return (
    <>
      <h1>Rep Commissions</h1>

      <Row className="d-flex justify-content-between" data-testid="pdf-items">
      {/* {Object.keys(images).map((imageName, index) => ( */}
      {Object.keys(list).map((imageName, index) => (
        <Col key={index} md={5} className="mb-4">
          <h6 className="mb-3">
            <a key={index} href={'repfolder/RepCommissions/'+imageName}>{imageName}</a>
          </h6>
        </Col>
      ))}
    </Row>

    </>
  );
}

export default withPageAuthRequired(RepCommissions, {
  onRedirecting: () => <Loading />,
  onError: error => <ErrorMessage>{error.message}</ErrorMessage>
});
