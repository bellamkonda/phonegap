/**
 * Created with JetBrains WebStorm.
 * User: srikanthbellamkonda
 * Date: 9/3/13
 * Time: 12:11 PM
 * To change this template use File | Settings | File Templates.
 */

function validation_credentials(className){
    var x_user;
    var y_pswd;
    x_user=document.getElementById("fname").value;    // getting the values
    y_pswd=document.getElementById("lname").value;

          if(x_user=="srikanth" && y_pswd=="sri" )
          {


                  cordova.exec(function() {console.log("Success");}, function(e) {console.log("Error: "+e);}, "Activity", "start", [className]);


              localStorage.lifecyclestatus = "";
              localStorage.backgroundstatus = "";
          } else{

              alert('Missing....! values dear')

          }


}