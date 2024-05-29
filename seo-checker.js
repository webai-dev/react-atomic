const SeoAnalyzer = require('seo-analyzer');

new SeoAnalyzer()
  .inputFolders(['dist', 'out'])
  .addRule('imgTagWithAltAttributeRule')
  .outputObject(obj => console.log(obj));