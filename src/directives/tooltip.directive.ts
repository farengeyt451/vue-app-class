import Vue from 'vue';
import tippy, { Instance, Props } from 'tippy.js';
import { DirectiveBinding } from 'vue/types/options';

const instances: Map<Element, Instance> = new Map();

function createTippyInstance(el: Element, props: Props): Instance {
  return tippy(el, props);
}

function setInstanceToStorage(el: Element, binding: DirectiveBinding) {
  instances.set(el, createTippyInstance(el, binding.value));
}

function getInstanceFromStorage(key: Element): Instance | undefined {
  return instances.get(key);
}

function updateContent(el: Element, binding: DirectiveBinding) {
  getInstanceFromStorage(el)?.setContent(binding.value.content);
}

Vue.directive('tippy', {
  bind: setInstanceToStorage,
  update: updateContent,
});
