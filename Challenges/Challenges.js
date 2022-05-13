//Fade
$("#fade").ready(function() {
        makeItFadeIn("p")
});

function makeItFadeIn(selector) {
        $(selector + ":hidden").fadeIn(2000);
}

//Form Validation
function checkForm() {
        let phoneNum = document.getElementById("phoneNumber").value;
        if (phoneNum === "") {
                alert("Please input phone number before submitting");
        }
        document.getElementById("phoneNumber").value = "";
}

//Popup Form
function showModal() {
        $("#popupForm:hidden").fadeIn(100);
}

function hideModal() {
        $("#popupForm").fadeOut(100);
}

//Slideshow
$("html").ready(function() {
        $("#slideshow > div:gt(0)").hide();

        setInterval( function() {

                $("#slideshow > div:first")
                .fadeOut(2000)
                .next()
                .fadeIn(2000)
                .end()
                .appendTo("#slideshow");
        }, 5000);
                

})

