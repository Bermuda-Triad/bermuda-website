export const sendMail = () =>{
    // Get input field values
    var userName = document.getElementById("userName").value.trim();
    var services = document.getElementById("services").value.trim();
    var email = document.getElementById("email").value.trim();
    var description = document.getElementById("description").value.trim();

    // Check if any required field is empty
    // if (userName === "" || services === "" || email === "") {
    //     alert("Please fill out all required fields.");
    //     document.getElementById("ErrorText").textContent = "This field is required";
    //     return; // Exit the function if any field is empty
    // }
    var error = false;
    
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

    if (services === "") {
        document.getElementById("servicesError").textContent = "Services is a required field.";
        error = true;
    } else {
        document.getElementById("servicesError").textContent = "";
    }


    if (error) {
        // If any required field is empty, exit the function
        return;
    }
    

    var params = {
        userName: userName,
        email: email,
        description: description,
        services: services,
    };

    const serviceID = "service_w0m94zq";
    const templateID = "template_ea0686g";

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            // Clear the input fields and display success message
            document.getElementById("userName").value = "";
            document.getElementById("email").value = "";
            document.getElementById("services").value = "";
            document.getElementById("description").value = "";
            alert("Your message sent successfully!!");
            // openSuccessModal();
            resetForm();
        })
        .catch(err => console.log(err));
}






