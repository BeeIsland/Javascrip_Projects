
function validateForm() {
        let entry1 = document.forms["contactForm"]["email"].value;
        if (entry1 == "") {
                alert("Email must be filled out");
                return false;
        }
        let entry2 = document.forms["contactForm"]["name"].value;
        if (entry2 == "") {
                alert("Name must be filled out");
                return false;
        }
        let entry3 = document.forms["contactForm"]["number"].value;
        if (entry3 == "") {
                alert("Phone Number must be filled out");
                return false;
        }
}