'use client';

import React, { useEffect, useState } from 'react';
import { Row, Col } from 'reactstrap';
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import useSWR from 'swr';

import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import Highlight from '../../components/Highlight';

function COMDUE() {
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
    require.context('../../public/repfolder/COMDUE/', true, /\.pdf$/, 'lazy')
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
  var count = Object.keys(list).length; 

  return (
    <>
      <h1>Comdue ({count})</h1>

      <div className='my-5 pl-2' data-testid="pdf-items">
        {Object.keys(list).map((imageName, index) => (
          <Col key={index} md={5} className="mb-4">
            <h6 className="mb-3 pl-3">
              <a key={index} href={'repfolder/COMDUE/'+imageName}>{imageName}</a>
            </h6>
            <hr />
          </Col>
        ))}
      </div>
    </>
  );
}

export default withPageAuthRequired(COMDUE, {
  onRedirecting: () => <Loading />,
  onError: error => <ErrorMessage>{error.message}</ErrorMessage>
});
