import Vue from 'vue';
import tippy from 'tippy.js';
import { DirectiveBinding } from 'vue/types/options';

Vue.directive('tippy', {
  bind: function(el: Element, binding: DirectiveBinding) {
    tippy(el, binding.value);
  },
});
