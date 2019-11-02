function SaveForm() {
   var fname = document.getElementById("firstName");
   fname = fname.lower()
   var mname = document.getElementById("middleName");
   mname = mname.lower()
   var lname = document.getElementById("lastName");
   lname = lname.lower()
   var dob = document.getElementById("dob");
   dob = dob.lower()
   var home = document.getElementById("home");
   home = home.lower()

   var theirDOB = "";

   if (document.getElementById("theirDOB") == "mm/dd/yyyy") {
      theirDOB = "00000000";
   }
   else{
      theirDOB = document.getElementById("theirDOB");
   }

   var looking = document.getElementById("theirName") + theirDOB;
   
   var fh = fopen("data.txt", 3); // Open the file for writing

   if(fh!=-1) // If the file has been successfully opened
   {
      fwrite(fh, fname + "|" + mname + "|" + lname + "|" + dob + "|" + home + "|" + looking); // Write the string to a file
      fclose(fh); // Close the file
   }
}