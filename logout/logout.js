const logoutBtn = document.getElementById("confirmLogout");

if (logoutBtn) {
    logoutBtn.addEventListener("click", function () {
        localStorage.removeItem("user");

        alert("You have been logged out!");

        window.location.href = "../home/home.html";
    });
}