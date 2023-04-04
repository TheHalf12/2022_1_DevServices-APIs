function validator(){
    var name = document.getElementById("textvalue").value;
    var infoerror = document.getElementById("error");
    if(name == ""){
        infoerror.innerHTML = "The value cannot be blank.";
        return false;
    }else{
       if(isNaN(name)){
            infoerror.innerHTML = "The value must be a number.";
       }else{
            if(value>0 && value<11){
                return true;
            }else{
                infoerror.innerHTML = "Value not allowed."
                return false;
            }
       }
    }
}