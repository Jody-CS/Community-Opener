var execSync = require('child_process').execSync;
var userName = process.argv[2];

var protocol = 'https:'
var apexFilePath = __dirname + '/stuff.apex';
var apexCommand = 'sfdx force:apex:execute -f ';
var communityData = execSync(apexCommand + apexFilePath + ' --json').toString();

var url = communityData.split(protocol).pop();
url = protocol + url.split('"')[0].replace('\\', '');

execSync('open -na "Google Chrome" --args --incognito "' + url + '"');