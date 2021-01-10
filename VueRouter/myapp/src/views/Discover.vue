<template>
  <div>
    Discover
  </div>
</template>

<script>
import axios from "axios";

export default {
    name:"Discover",
    data(){
        return{
            goodslist:[]
        }
    },
   async created(){
        // 发起ajax请求 axios
       const result = await axios.get("http://localhost:2008/api/goods");
       console.log(result);
    }
}
</script>
