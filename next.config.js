module.exports = {
  poweredByHeader: false
};

module.exports = {
  webpack: (config, options) =>
  {
      config.module.rules.push({
          test: /\.pdf$/i,
          type: 'asset/source'
      })

      return config
  },
}


// module.exports = (phase, { defaultConfig }) => {
//   return {
//     ...defaultConfig,

//     webpack: (config) => {
//       config.resolve = {
//         ...config.resolve,
//         fallback: {
//           "fs": false,
//           "path": false,
//           "os": false,
//         }
//       }
//       return config
//     },
//   }
// }
