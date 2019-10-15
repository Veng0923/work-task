export default {
  columns: [
    {
      title: "id",
      width: 180,
      prop: "id"
    },
    {
      title: "FastDFS_ID",
      width: 200,
      prop: "fastID",
    },
    {
      title: "文件名称",
      width: 180,
      prop: "fileName"
    },
    {
      title: "文件大小",
      width: 180,
      prop: "fileSize",
      formatter: function (row, column, cellValue) {
        return `${(Number.parseFloat(cellValue)/1024/1000).toFixed(2)}M`;
      }
    },
    {
      title: "上传时间",
      width: 180,
      prop: "uploadTime",
      formatter: function (row, column, cellValue) {
        return new Date(cellValue).toLocaleString();
      }
    },
    {
      title: "文件描述",
      prop: "description"
    }
  ]
}