'use client';

import React, { useEffect, useState } from 'react';
import { Row, Col } from 'reactstrap';
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import useSWR from 'swr';

import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import Highlight from '../../components/Highlight';

// import { images } from '../../utils/imageLoader';

import { images } from '../../utils/comdueList';

// import fs from 'fs';
import fs from 'fs/promises';

import path from 'path';



function Comdue2() {
  const { user, isLoading } = useUser();
  const pdfDirectory = path.join(process.cwd(), 'public/pdfs');
  const filenames = fs.readdirSync(pdfDirectory);

  console.log(pdfDirectory);
  console.log(filenames);  

  
  return (
    <>
      <h1>Comdue</h1>

      <div>
      <h1>List of PDF Files</h1>
      <h2>jg</h2>
      <ul>
        {files?.map((file, index) => (
          <li key={index}>
            <a href={`pdfs/${file}`} target="_blank" rel="noopener noreferrer">
              {file}
            </a>
          </li>
        ))}
        <li><a href={`pdfs/1_Commission_Report.pdf`} target="_blank" rel="noopener noreferrer">test</a></li>
        <li>gd</li>
      </ul>
    </div>

    </>
  );
}

export default withPageAuthRequired(Comdue2, {
  onRedirecting: () => <Loading />,
  onError: error => <ErrorMessage>{error.message}</ErrorMessage>
});
