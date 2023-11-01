
    let SignUp = document.getElementById("signupBtn");
    let SignIn = document.getElementById("signinBtn");
    let nameField = document.getElementById("nameField");
    let title = document.getElementById("title");

    SigninBtn.onclick = function(){
        nameField.style.maxHeight = "0";
        title.innerHTML = "Sign In"
        SignupBtn.classList.add("disable");
        SigninBtn.classList.remove("disable");
    }
    SignupBtn.onclick = function(){
        nameField.style.maxHeight = "60px";
        title.innerHTML = "Sign Up"
        SignupBtn.classList.remove("disable");
        SigninBtn.classList.add("disable");
    }