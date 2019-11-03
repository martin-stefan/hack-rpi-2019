var looking = "";

function saveSubmit() {

   //ran out of time but instead of passing data to a file (because that
   //does not work for client side) would have used jquery ajax instead to get
   //form data and post it directly to python where it would be parsed and
   //put into the mongodb that we have set up

   /*
   username = $("#username").val(); 
   password = $("#password").val();

   $("#post-btn").click(function(){        
       $.post("process.php", { username:username, password:password } ,function(data){
           alert(data);
       });
   });
   */

   var fs = require('fs');

   var fname = document.getElementById("firstName");
   var mname = document.getElementById("middleName");
   var lname = document.getElementById("lastName");
   var dob = document.getElementById("dob");
   var camp = document.getElementById("campName")
   var home = document.getElementById("home");

   let data = fname + "|" + mname + "|" + lname + "|" + dob + "|" + camp + "|" + home;

   
   if (document.getElementById("no").checked) {
      document.location.reload();
      fs.writeFile('data.txt', data, (err) => { 
         if (err) throw err;
         console.log('Saved!'); 
      }) 

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