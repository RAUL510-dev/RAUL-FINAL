// ===========================
// ACCOUNT SYSTEM
// ===========================

const accountForm = document.getElementById("accountForm");

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const address = document.getElementById("address");

const currentPassword = document.getElementById("currentPassword");
const newPassword = document.getElementById("newPassword");
const confirmPassword = document.getElementById("confirmPassword");


// ===========================
// LOAD USER
// ===========================

let user = JSON.parse(localStorage.getItem("user"));

if(user){

    firstName.value = user.firstName || "";
    lastName.value = user.lastName || "";
    email.value = user.email || "";
    phone.value = user.phone || "";
    address.value = user.address || "";

}



// ===========================
// SAVE CHANGES
// ===========================

accountForm.addEventListener("submit",function(e){

    e.preventDefault();



    if(newPassword.value !== confirmPassword.value){

        alert("Passwords do not match!");

        return;

    }



    const updatedUser = {

        firstName:firstName.value,

        lastName:lastName.value,

        email:email.value,

        phone:phone.value,

        address:address.value,

        password:newPassword.value || (user ? user.password : "")

    };



    localStorage.setItem(

        "user",

        JSON.stringify(updatedUser)

    );



    alert("Profile updated successfully!");


    currentPassword.value = "";
    newPassword.value = "";
    confirmPassword.value = "";

});