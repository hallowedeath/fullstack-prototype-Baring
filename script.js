// PAGE NAVIGATION
function showPage(pageId) {

    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById(pageId).classList.add("active");
}

// SIMULATED LOGIN
function fakeLogin() {

    document.body.classList.remove("not-authenticated");
    document.body.classList.add("authenticated");

    document.getElementById("navUsername").textContent = "Student User";

    showPage("home");
}

// SIMULATED ADMIN LOGIN
function fakeAdminLogin() {

    document.body.classList.remove("not-authenticated");
    document.body.classList.add("authenticated");
    document.body.classList.add("is-admin");

    document.getElementById("navUsername").textContent = "Admin User";

    showPage("home");
}

// LOGOUT
function logout() {

    document.body.classList.remove("authenticated");
    document.body.classList.remove("is-admin");
    document.body.classList.add("not-authenticated");

    showPage("home");
}
