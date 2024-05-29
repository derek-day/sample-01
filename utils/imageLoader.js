import { Document, Page, pdfjs } from 'react-pdf';


function importAllImages(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace('./', '')] = r(item);
    });
    return images;
  }
  
  export const images = importAllImages(
    // require.context('../public/repfolder/ADP2', false, /\.(png|jpe?g|svg)$/)
    require.context('../public/repfolder/ADP1/COMDUE', false, /\.(pdf)$/)
  );
  