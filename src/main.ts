import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

Vue.filter('pluralize', function(count: number, words: string[]) {
  const cases = [2, 0, 1, 1, 1, 2];
  return words[count % 100 > 4 && count % 100 < 20 ? 2 : cases[Math.min(count % 10, 5)]];
});

const app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

console.log(app);
