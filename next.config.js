module.exports = {
  poweredByHeader: false
};

module.exports = {
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.pdf$/i,
      type: 'asset/source'
  })
    if (!isServer) {
      config.resolve = {
        ...config.resolve,
        fallback: {
          net: false,
          dns: false,
          tls: false,
          fs: false,
          request: false,
        },
      };
} else {
    }

    return config;
  },
};


// module.exports = {
//   webpack: (config, options) =>
//   {
//       config.module.rules.push({
//           test: /\.pdf$/i,
//           type: 'asset/source'
//       })

//       return config
//   },
// }

// module.exports = {
//   webpack: (config, { isServer }) => {
//     if (!isServer) {
//       config.resolve = {
//         ...config.resolve,
//         fallback: {
//           net: false,
//           dns: false,
//           tls: false,
//           fs: false,
//           request: false,
//         },
//       };
//     }
//     return config;
//   },
// }