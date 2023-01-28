const path = require('path');

module.exports = {
    entry: './dist/index.js',
    mode: 'production',
    output: {
        filename: 'windows-1250-codes.min.js',
        path: path.resolve(__dirname, 'dist/browser'),
        library: 'Windows1250',
        libraryTarget: 'umd',
        umdNamedDefine: true,
        auxiliaryComment: 'Convert characters to windows-1250 codes and back.',
    },
};