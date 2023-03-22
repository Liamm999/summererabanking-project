import { createApp } from "vue"
import App from "./App.vue"
import router from "./shared/router"
import store from "./shared/store"
import "@/shared/assets/css/style.css"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faMoneyBillTransfer } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
// eslint-disable-next-line no-unused-vars
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons"

library.add(faMoneyBillTransfer)
createApp(App)
  .use(store)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app")
