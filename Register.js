const passwordInput = document.querySelector("#password_data");

passwordInput.addEventListener("keyup", () => {
    let password = passwordInput.value;
    
    var strongRegex = new RegExp("^(?=.{14,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    var mediumRegex = new RegExp("^(?=.{10,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");

    if(password.length===0)
    {
        document.querySelector(".safety").innerHTML = "Enter Password";
    }
    else
    {
        document.querySelector(".safety").innerHTML = '<span>Password Strength</span><span class="line" id="line1"></span><span class="line" id="line2"></span><span class="line" id="line3"></span>';
    }

    if (strongRegex.test(password)) 
    {
        document.querySelector("#line1").style.background = "green";
        document.querySelector("#line2").style.background = "green";
        document.querySelector("#line3").style.background = "green";
    } 
    else if (mediumRegex.test(password)) 
    {
        document.querySelector("#line1").style.background = "yellow";
        document.querySelector("#line2").style.background = "yellow";
    } 
    else 
    {
        document.querySelector("#line1").style.background = "red";
        
    }
})

var callAPI=()=>
{
    email=document.getElementById('email').value
    password=document.getElementById('password_data').value
    names=document.getElementById('Name').value
    // instantiate a headers object
    var myHeaders = new Headers();
    // add content type header to object
    myHeaders.append("Content-Type", "application/json");
    // using built in JSON utility package turn object to string and store in a variable
    var raw =["01",email,password]
    // create a JSON object with parameters for API call and store in a variable
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    // make API call with parameters and use promises to get response
    fetch("https://2es4gkfmcl.execute-api.ap-south-1.amazonaws.com/dev", requestOptions)
    .then(response => response.text())
    .catch(error => console.log('error', error));

}
const createAccountBtn = document.getElementById('btn primary');
    const registrationForm = document.getElementById('form-forma');
    const registrationStatus = document.getElementById('registerationStatus')

    // Add click event listener to the "Create Account" button
    createAccountBtn.addEventListener('click', callAPI());