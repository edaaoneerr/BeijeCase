module.exports = {
  presets: [ ['@babel/preset-env', {targets: {node: 'current'}}],
  '@babel/preset-typescript', ['module:metro-react-native-babel-preset']
],
  plugins: [  ["@babel/plugin-proposal-private-property-in-object", { "loose": true }],  ["@babel/plugin-proposal-private-methods", { "loose": true }]],

env: {
  production: {
    plugins: ['react-native-paper/babel'],
  
  },

   
  }
}

