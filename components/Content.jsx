"use client";

import React from 'react';
import { Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import contentData from '../utils/contentData';
import { useUser } from '@auth0/nextjs-auth0/client';

const Content = () => {
  const { user, isLoading } = useUser();

  return (

  <div className="next-steps my-5" data-testid="content">

    <h2 className="my-4 text-center" data-testid="content-title">
      Rep Folders
    </h2>
    
    {user && (
    <>
      <h4 className="my-4 text-center" data-testid="content-title">
        Welcome, {user.first}
      </h4>

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
    </>
    )}

  </div>
  )
};

export default Content;
