var looking = "";

function saveSubmit() {
   var fname = document.getElementById("firstName");
   fname = fname.lower();
   var mname = document.getElementById("middleName");
   mname = mname.lower();
   var lname = document.getElementById("lastName");
   lname = lname.upper();
   var dob = document.getElementById("dob");
   var camp = document.getElementById("campName")
   var home = document.getElementById("home");
   home = home.lower();
   
   var fh = fopen("data.txt", 3); // Open the file for writing

   if (document.getElementById("no").checked) {
      document.location.reload();
   }

   if(fh!=-1) // If the file has been successfully opened
   {
      fwrite(fh, fname + "|" + mname + "|" + lname + "|" + dob + "|" + camp + "|" + home + "|" + looking); // Write the string to a file
      fclose(fh); // Close the file
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