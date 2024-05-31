'use client';

import React, { useEffect, useState } from 'react';
import { Row, Col } from 'reactstrap';
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import useSWR from 'swr';


import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import Highlight from '../../components/Highlight';

// import { images } from '../../utils/imageLoader';
import imageLoader from '../../utils/imageLoader';


// import comdueList from '../../utils/comdueList';




function Comdue() {
  const { user, isLoading } = useUser();

  const [images, setResults] = useState([]);

  useEffect(() => {
    //Attempt to retreive data
    try {
      // const images = transformData();
      const images = importAllImages(require.context(`../../public/repfolder/ADP${user.adp}/COMDUE`, false, /\.pdf$/));
      // const images = importAllImages(require.context(`../../public/repfolder/ADP1/COMDUE`, false, /\.pdf$/));

      if (images) {
        // Add any data transformation
        setResults(images)
      }
      else {
        throw (error)
      }
    }
    catch (error) {
      //Handle error
    }
  }, [images])

  const importAllImages = async (r) => {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace('./', '')] = r(item);
    });
    return images;
  }

  if (!images) {
    // Return something until the data is loaded (usually a loader)
    return null
  }

  console.log(images);




  // function importAllImages(r) {
  //   let images = {};
  //   r.keys().map((item, index) => {
  //     images[item.replace('./', '')] = r(item);
  //   });
  //   return images;
  // }

  // const adp = user.adp;

  // const images = importAllImages (
  //   // require.context('../../public/repfolder/ADP1/COMDUE', false, /\.pdf$/)
  //   require.context(`../../public/repfolder/ADP${adp}/COMDUE`, false, /\.pdf$/, 'lazy')
  // );


  // const [comdueList, setComdueList] = useState([]);

  // const getComdueList = async () => {
  //   try {
  //     function importComdue(r) {
  //       let comdues = {};
  //       r.keys().map((item, index) => {
  //         comdues[item.replace('./', '')] = r(item);
  //       });
  //       return comdues;
  //     }

  //     const comdues = importComdue(
  //       require.context(`../public/repfolder/${user.adp}/COMDUE`, false, /\.pdf$/)
  //     );

  //     setComdueList(comdues);

  //     console.log(comdues);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // getComdueList();


  // function importComdue(r) {
  //   let comdues = {};
  //   r.keys().map((item, index) => {
  //     comdues[item.replace('./', '')] = r(item);
  //   });
  //   return comdues;
  // }
  
  // const comdues = importComdue(
  //   require.context(`../public/repfolder/${user.adp}/COMDUE`, false, /\.pdf$/)
  // );

  // const getComdue = async () => {
  //   try {
  //     function importComdue(r) {
  //       let comdues = {};
  //       r.keys().map((item, index) => {
  //         comdues[item.replace('./', '')] = r(item);
  //       });
  //       return comdues;
  //     }
    
  //     const comdues = importComdue(
  //       require.context(`../public/repfolder/${user.adp}/COMDUE`, false, /\.pdf$/)
  //     );
      
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // getComdue();

  
  
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
