// ===========================
// LOGIN SYSTEM
// ===========================


const loginForm = document.getElementById("loginForm");


loginForm.addEventListener("submit", function(e){

    e.preventDefault();


    // FormData
    const formData = new FormData(loginForm);


    const email = formData.get("email");
    const password = formData.get("password");


    // Check empty
    if(email === "" || password === ""){

        alert("Please fill all fields");

        return;

    }



    // User object

    const user = {

        email: email,
        password: password,
        login: true

    };



    // Save user

    localStorage.setItem(
        "user",
        JSON.stringify(user)
    );



    alert("Login successful!");



    // Go Home

    window.location.href = "../home/home.html";


}); 