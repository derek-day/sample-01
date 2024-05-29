"use client";

import React from 'react';
import { Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import contentData from '../utils/contentData';

const images = require.context('../public/repfolder/ADP2', false);
const imageList = images.keys().map(image => images(image));

console.log(imageList);



const Content = () => (

  

  <div className="next-steps my-5" data-testid="content">

<div>
{imageList.map((image, index) => (
  <img key={index} src={image.default} alt={`image-${index}`} />
))}
</div>


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
