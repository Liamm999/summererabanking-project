<template>
  <div id="app">
    <div class="navbar">
      <Navbar />
    </div>
    <div class="main">
      <div class="left-navbar">
        <LeftNavbar />
      </div>
      <div class="content text-cyan-50 flex justify-center items-center">
        <div>Main</div>
      </div>
    </div>
    <div class="footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue"
import LeftNavbar from "../components/LeftNavbar.vue"
import Footer from "../components/Footer.vue"

export default {
  name: "admin",
  components: {
    Navbar,
    LeftNavbar,
    Footer,
  },
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  background-color: #18122b;
  box-sizing: border-box;
}
#app {
  width: 100vw;
  height: 100vh;
  padding-top: 1%;
}
.navbar {
  width: 100vw;
  height: 15vh;
  padding: 0px 5%;
}

.main {
  width: 100vw;
  height: 76vh;
  padding: 0px;
  margin: 0px;
  display: flex;
  flex-direction: row;
}

.left-navbar {
  width: 20vw;
  
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: beige;
}

.content {
  width: 80vw;
 
  background-color: #18122b;
  background-color: aliceblue;
}

.footer {
  height: 9vh;
  background-color: coral;
}
</style>
