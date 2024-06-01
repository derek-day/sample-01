// pages/pdfList.js

import React from 'react';
import fs from 'fs';
import path from 'path';

const PdfList = ({ files }) => {
  return (
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
    
  );
};

export async function getStaticProps() {
  const pdfDirectory = path.join(process.cwd(), 'public', 'pdfs');
  console.log(pdfDirectory);
  const filenames = fs.readdirSync(pdfDirectory);
  console.log(filenames);

  return {
    props: {
      files: filenames,
    },
  };
}

export default PdfList;
