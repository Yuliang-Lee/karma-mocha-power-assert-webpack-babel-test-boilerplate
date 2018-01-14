import Vue from 'vue';
import HelloWorld from '@/HelloWorld';

describe('HelloWorld.vue', function() {
  it('should render correct contents', function() {
    const Constructor = Vue.extend(HelloWorld)
    const vm = new Constructor().$mount()
    assert(vm.$el.querySelector('.hello h1').textContent === 'Welcome to Your Vue.js App')
  })

})