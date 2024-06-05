// const fs = require('fs');
// const path = require('path');

import fs from 'fs';
import path from 'path';



/**
 * Filter files that contain a specific variable in their content.
 * @param {Array<string>} filePaths - Array of file paths to check.
 * @param {string} variable - The variable to search for inside the files.
 * @returns {Array<string>} - Array of file paths that contain the variable.
 */
const filterFilesContainingVariable = (filePaths, variable) => {
  return filePaths.filter(filePath => {
    try {
    //   const fileContent = fs.readFileSync(filePath, 'utf8');
      const fileContent = require.context(filePath, true, /\.pdf$/, 'lazy');

      return fileContent.includes(variable);
    } catch (error) {
      console.error(`Error reading file ${filePath}:`, error);
      return false;
    }
  });
};

module.exports = { filterFilesContainingVariable };
