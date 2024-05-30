"use client";

import React from 'react';
import { Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import contentData from '../utils/contentData';

import { images } from '../utils/imageLoader';

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



    <h2 className="my-5 text-center" data-testid="content-title">
      What can I do next?
    </h2>
    <Row className="d-flex justify-content-between" data-testid="content-items">
      {contentData.map((col, i) => (
        <Col key={i} md={5} className="mb-4">
          <h6 className="mb-3">
            <a href={col.link}>
              <FontAwesomeIcon icon="link" className="mr-2" />
              {col.title}
            </a>
          </h6>
          <p>{col.description}</p>
        </Col>
      ))}
    </Row>
  </div>
);

export default Content;
