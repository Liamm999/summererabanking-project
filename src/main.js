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
import axios from "axios"
import VueCookies from "vue3-cookies"
import VueScrollingTable from "vue-scrolling-table"
import "@/shared/helper/routeGuard"
import Userfront from "@userfront/core"
import VeeValidate from "vee-validate"

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

axios.defaults.baseURL = "http://localhost:8080/"
const config = {
  aria: true,
  classNames: {},
  classes: false,
  delay: 0,
  dictionary: null,
  errorBagName: "errors", // change if property conflicts
  events: "input|blur",
  fieldsBagName: "fields",
  i18n: null, // the vue-i18n plugin instance
  i18nRootKey: "validations", // the nested key under which the validation messages will be located
  inject: true,
  locale: "en",
  validity: false,
  useConstraintAttrs: true,
}
library.add(fas, fab, far)
let app = createApp(App)
app
  .use(store)
  .use(router)
  .use(Vue3Transitions)
  .use(VueCookies, {
    expireTimes: "5m",
    path: "/",
    domain: "",
    secure: true,
    sameSite: "None",
  })
  .use(VeeValidate, config)
  .use(Userfront)
  .use(VTextMarquee)
  .component("font-awesome-icon", FontAwesomeIcon)
  .component(VueScrollingTable.name, VueScrollingTable)
  .mount("#app")
