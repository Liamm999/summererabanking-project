<template>
  <div id="app" class="bg-purple-200">
    <div class="navbar">
      <Navbar />
    </div>
    <div class="breadcrum">
      <Breadcrum :title="component" />
    </div>
    <div class="main">
      <div class="left-navbar">
        <div
          id="left-navbar"
          class="flex flex-col justify-start items-start text-cyan-100 p-2 w-auto bg-purple-100 rounded-xl"
        >
          <div class="flex flex-col text-xs font-semibold">
            <span class="text-cyan-100 pt-2 pb-2 pl-2.5">
              Admin dashboard
            </span>
            <!-- <font-awesome-icon icon="fa-angle-left" /> -->
          </div>
          <hr class="bg-white" />
          <div class="flex flex-col justify-start text-xs pt-1 pb-2">
            <div
              class="title text-gray-300 hover:bg-orange-300 hover:text-white rounded-md px-3 py-2 text-sm font-medium w-full"
              v-for="tab in tabContents"
              :key="tab"
              @click="component = tab"
            >
              {{ tab }}
            </div>
          </div>
        </div>
      </div>
      <div class="content rounded-xl p-2 mr-2 ml-2">
        <component :is="component" />
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
import Account from "./Account.vue"
import Breadcrum from "../components/Breadcrum.vue"
import Saving from "./Saving.vue"
import Transaction from "./Transaction.vue"
export default {
  name: "admin",
  components: {
    Navbar,
    LeftNavbar,
    Footer,
    Account,
    Breadcrum,
    Saving,
    Transaction,
  },
  data() {
    return {
      tabContents: ["Account", "Transaction", "Saving"],
      component: "Account",
      tasks: false,
    }
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
    flex-direction: column;
    align-items: center;
    height: 80vh;
    padding: 0;
  }
  margin-top: 1vh;
}

.breadcrum {
  margin: 0.25rem 0 0.25rem 14vw;
  @media screen and (max-width: 640px) {
    margin-left: 8vw;
  }
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
hr {
  border: 1px solid white;
  width: 100%;
  margin: 2px 0;
}

.footer {
  height: 5vh;
}
</style>
