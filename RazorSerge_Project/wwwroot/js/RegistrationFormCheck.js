// --- Form Validation ---
function CheckForm() {
    var fnameOK = validateName("fName", "mfName", "שם פרטי קצר מדי או לא קיים");
    var unameOK = validateName("uName", "muName", "שם משתמש קצר מדי או לא קיים");
    var lnameOK = validateName("lName", "mlName", "שם משפחה קצר מדי או לא קיים");
    var addressOK = validateName("address", "mAddress", "הכתובת קצר מדי או לא קיים");
    var phoneNumberOK = validatePhoneNumber("phone", "phoneError", "מספר הטלפון לא חוקי");
    var numberOK = validateNumber("number", "mNumber", "חסר מספר הבניין או לא קיים");
    var passWordOK = checkPassword(document.getElementById("password").value);
    var rePassWordOK = checkRepeatPassword(document.getElementById("valPassword").value, document.getElementById("password").value);
    var hobbiesOK = CheckHobbies();

    return fnameOK && unameOK && lnameOK && addressOK && numberOK && passWordOK && phoneNumberOK && rePassWordOK && hobbiesOK;
}

function validateName(inputId, messageId, message) {
    var value = document.getElementById(inputId).value;
    if (value.length < 2) {
        document.getElementById(messageId).value = message;
        document.getElementById(messageId).style.display = "inline";
        return false;
    } else {
        document.getElementById(messageId).style.display = "none";
        return true;
    }
}

function validateNumber(inputId, messageId, message) {
    var value = document.getElementById(inputId).value;
    if (value.length < 1) {
        document.getElementById(messageId).value = message;
        document.getElementById(messageId).style.display = "inline";
        return false;
    }
        else 
    {
        document.getElementById(messageId).style.display = "none";
        return true;
    }
}
function validatePhoneNumber(inputId, messageId, message) { 
    var reg = /^\d+$/;
//הערות
    var value = document.getElementById(inputId).value;
    if (!(reg.test(value))) {
        document.getElementById(messageId).value = message;
        document.getElementById(messageId).style.display = "inline";
        return false;
    }
    else {
        document.getElementById(messageId).style.display = "none";
        return true;
    }
}
function checkPassword(password) {
    var messageElement = document.getElementById("mPassword");
    if (password.length < 6) {
        messageElement.value = "הסיסמה קצרה מדי";
        messageElement.style.display = "inline";
        return false;
    } else {
        messageElement.style.display = "none";
        return true;
    }
}

function checkRepeatPassword(rePassword, password) {
    var messageElement = document.getElementById("PassError");
    if (rePassword.length == 0) {
        messageElement.value = "חייב להכניס אימות סיסמא*";
        messageElement.style.display = "inline";
        return false;
    } else if (rePassword !== password) {
        messageElement.value = "אימות סיסמא חייב להיות זהה לסיסמא*";
        messageElement.style.display = "inline";
        return false;
    } else {
        messageElement.style.display = "none";
        return true;
    }
}

function CheckHobbies() {
    const checkboxes = document.querySelectorAll('#hobby-group input[type="checkbox"]');

    // var hobbies = document.getElementsByName("hobbies");
    //var hobChecked = false;

    let count = 0;

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            count++;
        }
    });
    /*
    for (var i = 0; i < hobbies.length; i++) {
        if (hobbies[i].checked) {
            hobChecked = true;
            break;
        }
    }
    */

    var messageElement = document.getElementById("mHobbies");
    if (count == 0) //(!hobChecked) 
    {
        messageElement.value = "לא נבחר תחביב";
        messageElement.style.display = "inline";
        return false;
    } else {
        messageElement.style.display = "none";
        return true;
    }
}

function checkEmail(that) {
    var email = that.value;
    var messageElement = document.getElementById("EmailError");
    messageElement.style.display = "none";

    if (email.length == 0) {
        messageElement.value = "חובה למלא אימייל";
        messageElement.style.display = "inline";
        that.select();
        return false;
    }
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        messageElement.value = "אימייל לא תקין";
        messageElement.style.display = "inline";
        that.select();
        return false;
    }
    return true;
}

function HideWarnings() {
    document.getElementById("mlName").style.background = null;
    document.getElementById("mfName").style.background = null;
}

function isValidString(str) {
    var forbiddenChars = "$%^&*()_+[]{}<>?אבגדהוזחטיכךלמםנןסעפצקרשת ";
    for (var i = 0; i < forbiddenChars.length; i++) {
        if (str.includes(forbiddenChars.charAt(i))) {
            return false;
        }
    }
    return true;
}
