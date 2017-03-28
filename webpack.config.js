module.exports = {
  // ...other configuration
  resolve: {
    alias: {
      'react-native': 'react-native-web'
    }
  }
  externals: [
    require("react-native-for-web/src/macro/image")
  ],
}
