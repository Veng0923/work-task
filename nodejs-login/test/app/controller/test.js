'use strict';

const fdfsClient = require('../../../app/config/fastDFS-config');
fdfsClient.download('group1/M00/00/00/ChKLrV2lg7WAaXtbAC8Vcf_Anlo15..jpg', 'k.jpg').then(data => {
    console.log(data);
});
