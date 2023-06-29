const path = require('path');

module.exports = {
    // Autres options de configuration de Webpack

    resolve: {
        fallback: {
            stream: require.resolve('stream-browserify'),
        },
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react'],
                    },
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },

    // Reste de votre configuration de Webpack

};
