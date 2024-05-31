// import { Document, Page, pdfjs } from 'react-pdf';
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0/client';


const ComdueList = () => {

  const { user, isLoading } = useUser();
  console.log(user);

  function importAllImages(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace('./', '')] = r(item);
    });
    return images;
  }

  const images = importAllImages(
    // require.context('../public/repfolder/ADP2', false, /\.(png|jpe?g|svg)$/)
    // require.context('../public/repfolder/ADP1/COMDUE', false, /\.pdf$/)
    require.context(`../public/repfolder/${user.adp}/COMDUE`, false, /\.pdf$/)
  );

};

export default ComdueList;



// function importAllImages(r) {
//     let images = {};
//     r.keys().map((item, index) => {
//       images[item.replace('./', '')] = r(item);
//     });
//     return images;
//   }
  
//   export const images = importAllImages(
//     // require.context('../public/repfolder/ADP2', false, /\.(png|jpe?g|svg)$/)
//     require.context('../public/repfolder/ADP1/COMDUE', false, /\.pdf$/)
//     // require.context(`../public/repfolder/${user.adp}/COMDUE`, false, /\.pdf$/)
//   );
  