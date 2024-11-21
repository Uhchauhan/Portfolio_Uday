// Animation Scroll 

function revealFunction() {

    window.sr = ScrollReveal({ duration: 1350, distance: '250px', easing: 'ease-out' });

    sr.reveal('.reveal-left', { origin: 'left', reset: true });
    sr.reveal('.reveal-right', { origin: 'right', reset: true });
    sr.reveal('.reveal-top', { origin: 'top', reset: true });
    sr.reveal('.image1', { delay: 200, easing: "ease-in", interval: 200, scale: 1, reset: true });
    sr.reveal('.image2', { delay: 200, easing: "ease-in-out", interval: 200, scale: 1, reset: true });


}

window.addEventListener('load', () => {

    revealFunction();

});




// typing animation

var typed = new Typed(".typing", {
    strings: ["", "Web Developer", "Web Designer or", "Web Animation and more....."],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})






// // email

// function SendMail() {
//     var params = {
//         from_name: document.getElementById("fullName").value,
//         email_id: document.getElementById("email_id").value,
//         message: document.getElementById("message").value
//     }
//     emailjs.send("service_j1gwc9n", "template_hi3gw7r", params).then(function (res) {
//         alert("Success! " + res.status)
//     })
// }








