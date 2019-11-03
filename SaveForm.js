import "fs-module";
const fs = require('fs')

var looking = "";

function saveSubmit() {
   var fname = document.getElementById("firstName");
   var mname = document.getElementById("middleName");
   var lname = document.getElementById("lastName");
   var dob = document.getElementById("dob");
   var camp = document.getElementById("campName")
   var home = document.getElementById("home");

   let data = fname + "|" + mname + "|" + lname + "|" + dob + "|" + camp + "|" + home;

   
   if (document.getElementById("no").checked) {
      fs.writeFile('data.txt', data, (err) => { 
         if (err) throw err; 
      }) 
      document.location.reload();
   }


}

function saveAdd(){
   var theirDOB = "";

   if (document.getElementById("theirDOB") == "mm/dd/yyyy") {
      theirDOB = "00000000";
   }
   else{
      theirDOB = document.getElementById("theirDOB");
   }

   var name = document.getElementById("theirFirstName") + " " + document.getElementById("theirMiddleName") + " " + document.getElementById("theirLastName");


   if (looking == ""){
      looking = name + " " + theirDOB;
   }
   else{
      looking = looking + "&" + name + " " + theirDOB;
   }
}