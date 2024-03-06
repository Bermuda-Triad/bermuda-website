export const sendMail = () => {
    // Get input field values
    var userName = document.getElementById("userName").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();
    var checkboxes = document.querySelectorAll('input[type="checkbox"][name="checkboxGroup"]');
    var selectedServices = [];

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            selectedServices.push(checkbox.value);
        }
    });

    var error = false;

    if (selectedServices.length === 0) {
        // alert("Please select at least one service.");
        document.getElementById("checkboxGroupError").textContent = "Select at least one option.";
        error = true;
    } else {
        document.getElementById("checkboxGroupError").textContent = "";
    }

    if (userName === "") {
        document.getElementById("nameError").textContent = "Name is a required field.";
        error = true;
    } else {
        document.getElementById("nameError").textContent = "";
    }

    if (email === "") {
        document.getElementById("emailError").textContent = "Email is a required field.";
        error = true;
    } else {
        document.getElementById("emailError").textContent = "";
    }

    if (message === "") {
        document.getElementById("messageError").textContent = "Please add a few details about your project";
        error = true;
    } else {
        document.getElementById("messageError").textContent = "";
    }


    if (error) {
        return;
    }


    var params = {
        userName: userName,
        email: email,
        message: message,
        services: selectedServices.join(", ")
    };

    const serviceID = "service_5sd2ebl";
    const templateID = "template_i1vv55y";

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            // Clear the input fields and display success message
            document.getElementById("userName").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            alert("Your message sent successfully!!");
            console.log("success")
        })
        .catch(err => console.log(err));

}
