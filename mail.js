function checkFields() {
    missinginfo = "";
    if (document.form.name.value == "") {
    missinginfo += "\n - Your Name";
    }
    if ((document.form.email.value == "") || 
    (document.form.email.value.indexOf('@') == -1) || 
    (document.form.email.value.indexOf('.') == -1)) {
    missinginfo += "\n - Your Email";
    }
    if(document.form.message.value == "") {
    missinginfo += "\n - Your Message.";
    }
    if (missinginfo != "") {
    missinginfo ="\n" +
    "You did not (correctly) fill in the following field(s):\n" +
    missinginfo + "\n" + "\nPlease make the necessary corrections.";
    alert(missinginfo);
    return false;
    }
    else return true;
    }