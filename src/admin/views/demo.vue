<template>
  <div id="app" class="bg-purple-200">
    <div class="navbar">
      <Navbar />
    </div>
    <div class="main">
      <div class="left-navbar">
        <LeftNavbar />
      </div>
      <div class="content rounded-xl p-2 mr-2 ml-2">Hi</div>
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

<style lang="scss" scoped>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  height: 100vh;
  width: 100vw;
}
.navbar {
  margin-top: 1%;
  height: 10vh;
  padding: 0 2%;
  @media screen and (max-width: 640px) {
    height: auto;
    
  }
}

.main {
  height: 80vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 640px) {
    justify-content: center;
    height: 80vh;
    padding: 0;
  }
  margin-top: 3vh;
}

.left-navbar {
  width: 13vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 640px) {
    display: none;
    height: 10vh;
  }
}

.content {
  width: 84vw;
  border: 1px solid white;
}

.footer {
  height: 5vh;
}
</style>
