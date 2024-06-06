"use client";

import React from 'react';
import { Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import contentData from '../utils/contentData';

// import { images } from '../utils/imageLoader';

// import { Document, Page, pdfjs } from "react-pdf";
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const Content = () => (

  <div className="next-steps my-5" data-testid="content">


    {/* <div>
      {Object.keys(images).map((imageName, index) => (
        <a key={index} href={'/repfolder/ADP1/COMDUE/' + imageName}>{imageName}</a>
      ))}
    </div> */}

    {/* <Row className="d-flex justify-content-between" data-testid="pdf-items">
      {Object.keys(images).map((imageName, index) => (
        <Col key={index} md={5} className="mb-4">
          <h6 className="mb-3">
            <a key={index} href={'/repfolder/ADP1/COMDUE/' + imageName}>{imageName}</a>
          </h6>
        </Col>
      ))}
    </Row> */}



    <h2 className="my-4 text-center" data-testid="content-title">
      Rep Folders
    </h2>
    <div className='mt-5 text-center' data-testid="pdf-items" style={{textAlign:'center'}}>
            <h4 className="my-4">
              <a href="/comdue">Comdue</a>
            </h4>
            <h4 className="my-4">
              <a href="/daily">Daily</a>
            </h4>
            <h4 className="my-4">
              <a href="/rcp">Rep Commissions</a>
            </h4>
            <h4 className="my-4">
              <a href="/sample">Sample Bag</a>
            </h4>
            <h4 className="my-4">
              <a href="/territory">Territory Listings</a>
            </h4>
            <h4 className="my-4">
              <a href="/ytd">YTD Critical</a>
            </h4>
      </div>
  </div>
);

export default Content;
