<template>
  <div>
    <div id="logo">学生信息后台</div>
    <div id="from">
      <el-table
          :data="tableData"
          height="400"
          border
          style="width: 100%">
        <el-table-column
            prop="className"
            label="班级"
            width="180">
        </el-table-column>
        <el-table-column
            prop="name"
            label="姓名"
            width="180">
        </el-table-column>
        <el-table-column
            prop="age"
            label="年龄">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'IndexPage',
  data() {
    return {
      tableData: []
    };
  },
  mounted() {
   this.fetchData();
  },
  methods: {
   fetchData() {
      // 发起异步请求获取后台数据
      // 例如，使用 axios 库发送 GET 请求，跨域访问
      axios.get('http://localhost:8081/ComponentIndex')  // 假设后台接口地址为 '/api/data'
          .then(response => {
            // 请求成功，将返回的数据赋值给 tableData
            this.tableData = response.data.data;
          })
          .catch(error => {
            // 处理错误
            console.error('Error fetching data:', error);
          });
    },
  }
}
</script>


<style>

#logo {
  color: aliceblue;
  font-size: 30px;
  font-weight: 800;
  text-transform: uppercase;
  position: absolute;
  top: 15%;
  left: 15%;
}

#from {
  position: absolute;
  top: 10%;
  left: 38%
}

.el-table {
  width: 1000px;
  height: 400px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 30px;
}
</style>