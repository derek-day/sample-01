function importAllImages(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace('./', '')] = r(item);
    });
    return images;
  }
  
  export const images = importAllImages(
    require.context('../public/repfolder/ADP1/COMDUE', false, /\.pdf$/)
    // require.context(`../public/repfolder/${user.adp}/COMDUE`, false, /\.pdf$/)
  );
  