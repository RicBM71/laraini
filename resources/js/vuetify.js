
import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)
import es from 'vuetify/src/locale/es.ts'

const opts = {
    lang: {
        locales: { es },
        current: 'es',
      },
      icons: {
        iconfont: 'mdi', // default - only for display purposes
      },
}

export default new Vuetify(opts)
