var atomify = require('atomify');
var autoprefixer = require('autoprefixer');

function cssTransform(css) {
  return autoprefixer.process(css).css;
}

var cssConfig = {
  entry: './src/ks-patterns.less',
  transform: cssTransform,
  output: './dist/ks-patterns.css'
};

atomify({ css: cssConfig });
