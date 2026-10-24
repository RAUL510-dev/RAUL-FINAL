// ===========================
// SIGN UP SYSTEM
// ===========================


const signupForm = document.getElementById("signupForm");


signupForm.addEventListener("submit", function(e){

    e.preventDefault();



    // FormData

    const formData = new FormData(signupForm);



    const name = formData.get("name");

    const email = formData.get("email");

    const password = formData.get("password");





    // Empty check

    if(name === "" || email === "" || password === ""){

        alert("Please fill all fields");

        return;

    }





    // User object

    const user = {

        name:name,

        email:email,

        password:password

    };





    // Save user

    localStorage.setItem(
        "user",
        JSON.stringify(user)
    );





    alert("Account created successfully!");





    // Go Login page

    window.location.href = "../login/login.html";



});