const fs = require('fs');

const distDir = './dist';
const publicTargetPath = '../nodejs-login/app/public';
const viewTargetPath = '../nodejs-login/app/view';
const childProcess = require("child_process");

fs.readdir(distDir, (error, files) => {
    if (!error) {
        files.forEach(file => {
            const sourcePath = `${distDir}/${file}`;
            fs.stat(sourcePath, (error, stat) => {
                if (!error) {
                    // console.log(stat);
                    if (stat.isDirectory()) {
                        const targetPath = `${publicTargetPath}`;
                        childProcess.execFile('cp',['-rf',sourcePath,targetPath]);
                    } else if (stat.isFile()) {
                        const sourceReadStream = fs.createReadStream(sourcePath);
                        const targetPath = `${viewTargetPath}/${file}`;
                        const targetWriteStream = fs.createWriteStream(targetPath);
                        sourceReadStream.pipe(targetWriteStream);
                    }
                }
            });
        });
    }
});
