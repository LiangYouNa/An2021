<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/home" tag="span" active-class="active"
        >首页</router-link
      >
      <router-link to="/login" active-class="active">登录</router-link>
      <router-link to="/reg" active-class="active">注册</router-link>
    </nav> -->
    <!-- <button @click="$router.back()">上一页</button>
    <button @click="$router.forward()">下一页</button>
    <nav>
      <ul>
        <li
          v-for="item in nav"
          :key="item.name"
          @click="goto(item)"
          :class="{ active: item.path === current }"
        >
          {{ item.text }}
        </li>
      </ul>
    </nav>

    <h4>router-view 显示路由内容</h4> -->

  <el-row style="background-color:#545c64">
    <el-col :span="16">
    <el-menu
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
      :default-active="current"
      
    >
      <el-menu-item :index="item.path" v-for="item in nav" :key="item.name"
        ><i :class="item.icon"></i>{{ item.text }}</el-menu-item
      >
    </el-menu>
    </el-col>
    <el-col :span="8" style="border-bottom:solid 1px #e6e6e6;height:61px;overflow:hidden;text-align:right;line-height:61px;padding-right:20px;">
      <el-button type="success" plain @click="goto('/reg')">登录</el-button>
      <el-button type="info" plain @click="goto('/login')">注册</el-button>
    </el-col>
  </el-row>



    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      nav: [
        {
          name: "home",
          path: "/home",
          text: "首页",
          icon: "el-icon-s-home",
        },
        {
          name: "discover",
          path: "/discover",
          text: "发现",
          icon: "el-icon-view",
        },
        {
          name: "cart",
          path: "/cart",
          text: "购物车",
          icon: "el-icon-shopping-cart-2",
        },
        // {
        //   name: "login",
        //   path: "/login",
        //   text: "登录",
        //   icon:"el-icon-s-check"
        // },
        // {
        //   name: "reg",
        //   path: "/reg",
        //   text: "注册",
        //   icon:"el-icon-paperclip"
        // },
      ],
      current: "/home",
    };
  },
  // 组件
  components: {},

  // 方法
  methods: {
    // 跳转
    goto(path) {
      // 编程式导航
      this.$router.push(path);
      // this.current = item.path;
      // console.log("$route", this.$route);
    },
  },

  // 监听数据  监听实列的属性
  watch: {
    // 监听路由变化  实现高亮效果
    "$route.path": function(newVal) {
      // console.log(newVal, oldVal, this);
      this.current = newVal;
    },
  },

  created() {
    let { path } = this.$route;
    this.current = path;
  },
};
</script>

<style>
.active {
  color: red;
  font-weight: bold;
}
nav a {
  margin: 0 10px;
}
nav ul li {
  list-style: none;
}
</style>
