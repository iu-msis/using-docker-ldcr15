var randomUserApp = new Vue({
  el: '#randomUserAppInput',
  data: {
    users: [{
      name:{
        first:'',
        last:''
      },
      dob:{
        date:'',
        age:''
      },

      nat:'',
      picture:{
        large:''
      },
      email:''
    }]
  },

  //methods will be what fetches the data, where at and then what it will do (then)
    methods: {
      fetchUser() {
        fetch('https://randomuser.me/api/') //this could be a URL of where you're getting the data
        .then( function(response) {return response.json()}) //will print JSON to console
        .then(json => {randomUserApp.users = json.results});


        // Means the same at this
        // fetch('https://randomuser.me/api/')
        // .then(function(response) {return response.json()})
        // .then(function(json) {waitingApp.people = json});

      }
    },

  created() {
    this.fetchUser(); // need this.function name in the created for the methods function to be found
  }
})





// var waitingApp = new Vue({
//   el: '#patientWaitingApp',
//   data: {
//     patients: []
//   },
//   methods: {
//     fetchPatients() {
//       fetch('dummy.php')
//       .then(response => response.json())
//       .then(json => {waitingApp.patients = json});
//
//       // Means the same at this
//       // fetch('https://randomuser.me/api/')
//       // .then(function(response) {return response.json()})
//       // .then(function(json) {waitingApp.people = json});
//
//     }
//   },
//   created: function() {
//     this.fetchPatients();
//   }
//
// })
