<template>
  <div class="designer">
    <div v-tap="{ methods:cgLink , pagename:'vuxtest' }" class="msg">{{ msg }}</div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'Welcome to designer'
      }
    },
    methods: {
      cgLink: function (param) {
        this.msg = '首页'
        this.$router.push({name: param.pagename})
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
