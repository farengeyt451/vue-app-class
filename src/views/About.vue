<template>
  <div class="about">
    <h1>Interpolation: This is an {{ message }} page</h1>

    <span :title="message">
      Binding: Hover your mouse over me for a few seconds to see my dynamically bound title!
    </span>

    <p v-if="isMessageVisible">V-if: Now you see me!</p>

    <ol>
      <li v-for="todo in todos" :key="todo.message">
        {{ todo.text }}
      </li>
    </ol>
    <p>{{ message }}</p>
    <button v-on:click="reverseMessage">Reverse Message</button>

    <p>{{ twoWayMsg }}</p>
    <input v-model="twoWayMsg" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class Counter extends Vue {
  private message = 'about';
  private twoWayMsg = 'Two way binding';
  private readonly isMessageVisible = true;
  private readonly todos = [{ text: 'Learn JavaScript' }, { text: 'Learn Vue' }, { text: 'Build something awesome' }];

  reverseMessage() {
    this.message = this.message
      .split('')
      .reverse()
      .join('');
  }
}
</script>
