var fs = require('fs');
exports.storageConfig = JSON.parse(fs.readFileSync('./config.json', 'UTF-8'));
