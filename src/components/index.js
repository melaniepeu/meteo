import Vue from 'vue'
import meteo from './Meteo.vue'

const Components = {
  meteo
}

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})

export default Components