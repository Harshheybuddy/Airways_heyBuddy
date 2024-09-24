module: {
    rules: [
      {
        test: /\.svg$/,
        use: ['file-loader'], // or similar loader to handle large assets
        exclude: /node_modules/,
      },
    ],
  },
  