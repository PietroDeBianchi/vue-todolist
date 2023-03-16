const { createApp } = Vue;

createApp({
  data() {
    return {
      tasklist: [
        'task 1',
        'task 2',
        'task 3',
      ]
    };
  },
}).mount('#app');
