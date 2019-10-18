const fs = require('fs');
const process = require("process");

const argv = process.argv.slice(2);
if (argv.length === 0){
    console.log('请输入有效路径');
    return;
}
if (argv.length ===1){
    console.log('请输入后端路径');
    return;
}
const distDir = `${argv[0]}/dist`;
const nodejsPath = argv[1];
const publicTargetPath = `${nodejsPath}/app/public`;
const viewTargetPath = `${nodejsPath}/app/view`;
const childProcess = require("child_process");
console.log('依赖开始下载');
childProcess.execFileSync('npm', ['install']);
console.log("依赖下载完成");
console.log('开始build');
childProcess.execFileSync('npm', ['run','build']);
console.log('build 结束');
console.log('将前端项目移动到egg项目');
fs.readdir(distDir, (error, files) => {
    if (!error) {
        files.forEach(file => {
            const sourcePath = `${distDir}/${file}`;
            fs.stat(sourcePath, (error, stat) => {
                if (!error) {
                    // console.log(stat);
                    if (stat.isDirectory()) {
                        const targetPath = `${publicTargetPath}`;
                        childProcess.execFile('cp', ['-rf', sourcePath, targetPath]);
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
console.log('finished');

