import { createApp } from "vue"
import App from "./App.vue"
import router from "./shared/router"
import store from "./shared/store"
import "@/shared/assets/css/style.css"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { far } from "@fortawesome/free-regular-svg-icons"
import Vue3Transitions from "vue3-transitions"
import VTextMarquee from "vue-text-marquee"

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
library.add(fas, fab, far)
createApp(App)
  .use(store)
  .use(router)
  .use(Vue3Transitions)
  .use(VTextMarquee)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app")
