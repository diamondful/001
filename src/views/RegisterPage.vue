
<template>
    <div>
        <div id="logo">学生注册平台</div>
        <!-- <el-card class="box-card" id="card">
            <div id="fromRe"> -->
        <div id="res">
            <div id="inputLine">
                <el-input class="01" placeholder="请输入班级" v-model="classInput" clearable> </el-input>
                <el-input class="02" placeholder="请输入学生姓名" v-model="input" clearable></el-input>
                <el-input class="03" placeholder="请输入学生年龄" v-model="ageInput" clearable></el-input>
                <el-button @click="handleCreateStudent">创建学生</el-button>
            </div>
        </div>
    </div>
    <!--       </el-card>
    </div> -->
</template>

<script>

export default {
    name: 'RegisterPage',
    data() {
        return {
            input: '',
            classInput: '',
            nameInput: '',
            ageInput: ''
        }
    },
    methods: {
        handleCreateStudent() {
            const student = {
                class: this.classInput,
                name: this.nameInput,
                age: this.ageInput
            };
            const json = JSON.stringify(student);
            console.log(json);
            window.location.href = 'http://localhost:8081/register';

            fetch('http://localhost:8081/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON
            })

                /* .stringify(student) */.then(response => response.json())
                .then(data => {
                    console.log(data);

                }).catch(error => {
                    console.error('Error', error);
                })
        }
    }
}

</script>

<style>
#res {
    position: absolute;
    top: 30%;
    left: 38%
}

#inputLine {
    line-height: 60px;
    width: 373px;
    height: 210px;
}
</style>
