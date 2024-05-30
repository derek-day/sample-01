// import { Document, Page, pdfjs } from 'react-pdf';
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function importAllImages(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace('./', '')] = r(item);
    });
    return images;
  }
  
  export const images = importAllImages(
    // require.context('../public/repfolder/ADP2', false, /\.(png|jpe?g|svg)$/)
    require.context('../public/repfolder/ADP1/COMDUE', false, /\.pdf$/)
  );
  