function checkForm(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if(username == "" || password == ""){
        alert("Please fill in all the fields.");
        return false;
    }else{
        return true;

    }
  
}