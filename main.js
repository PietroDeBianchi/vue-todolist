// import the createApp function from the Vue library
const { createApp } = Vue;

// create a new Vue app
createApp({
  // define the data properties of the app
  data() {
    return {
      // boolean variable to indicate whether there is an error or not
      error: false,
      // variable to hold the user input for a new task
      newTask: { 
        name: '', 
        completed: false 
      },
      // array of tasks to display
      tasklist: [ 
        { 
          name: 'Example task', 
          completed: false 
        }
      ],
      // Add an array to track completed tasks
      tasklistCompleted: [ false ]
    };
  },

  // define the methods of the app
  methods: {
    // method to remove a task from the tasklist
    removeTask(index) {
      this.tasklist.splice(index, 1)
    },

    // method to add a new task to the tasklist
    addTask() {
      // check if the length of the newTask is greater than or equal to 5 characters
      if (this.newTask.name.length >= 5) {
        // add the newTask to the tasklist array
        this.tasklist.push(this.newTask);
        // reset the value of newTask to an empty string
        this.newTask = { name: '', completed: false };
        // set error to false since there is no error
        this.error = false;
      } else {
        // set error to true since there is an error
        this.error = true;
      }
    },    

    // method to check the minimum length of the new task input
    minLength() {
      if (this.newTask.length >= 5) {
        // set error to false since there is no error
        this.error = false;
      } else {
        // set error to true since there is an error
        this.error = true;
      }
    },

    // method to toggle the completion status of a task
    toggleTask(index) {
      // toggle the completion status of the task at the given index
      this.tasklist[index].completed = !this.tasklist[index].completed;
      // update the tasklistCompleted array with the current completion status
      this.tasklistCompleted[index] = this.tasklist[index].completed;
    },    

  }

// mount the app to the #app element in the HTML
}).mount('#app');


