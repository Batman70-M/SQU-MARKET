function validation(){
    //get elements from the form to check them if they are validated or not
    let uname = document.forms["feedback"]["uname"];
    let eemail =  document.forms["feedback"]["e-mail"];
    let age = document.forms["feedback"]["age"];
    let accounts = document.forms["feedback"]["account"]
    var radiosSelection = document.getElementsByName('category');
    var radioValid = false;
    //check if the inputs written as requirement
    //Name should contain at least 4 characters
    if(uname.value.search(/\w{4,10}/)==-1){
        alert("Invalid Name");
        uname.focus();
        return false;
    }
    //must enter the email
    if(eemail.value == ""){
        alert("Please enter your email");
        eemail.focus();
        return false;
    }
    // Check for a valid email format
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(eemail.value)) {
        alert("Please enter a valid email address");
        eemail.focus();
        return false;
    }
    //For account, if user want to write a user it must be in spicific format: @account
    if(accounts.value !== ""){
        if(accounts.value.indexOf("@",0)){
            alert("Make sure that account written as this @account");
            accounts.focus();
            return false;
        }
    }
    //cohort, who sent this feedback must be a student of SQU
    if(age.value < 2017 || age.value > 2023){
        alert("Make sure that you write it as follow: 20##");
        age.focus();
        return false;
    }
    //cheak radio botton
    //Going through each radio btn and cheak if selected or not
    for (var i = 0; i < radiosSelection.length; i++) {
        if (radiosSelection[i].checked) {
            radioValid = true;
            break;
        }
    } //if the user not cheak one of radious
    if (!radioValid) {
        alert('Please select a category');
        return false;
    }
   return true; 
}