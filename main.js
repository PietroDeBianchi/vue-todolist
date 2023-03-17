const { createApp } = Vue;

createApp({
  data() {
    return {
      error: false,
      newTask: '',
      tasklist: []
    };
  },
  methods: {
    removeTask(index) {
      this.tasklist.splice(index, 1)
    },

    addTask() {
      if (this.newTask.length >= 5) {
        this.tasklist.push(this.newTask)
        this.newTask = "";
        this.error = false;
      } else {
        this.error = true;
      }
    },

    minLength() {
      if (this.newTask.length >= 5) {
        this.error = false;
      } else {
        this.error = true;
      }
    }

  }

}).mount('#app');
