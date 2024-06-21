const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', function() {
    navbar.classList.toggle('active');
});

document.querySelector('.clickable-div').addEventListener('click', function(event) {
    event.stopPropagation();
});

function openGmailCompose() {
    const recipient = "michellevuelta1993@gmail.com";
    const subject = encodeURIComponent("Hello Michelle");
    const body = encodeURIComponent("Hi Michelle,\n\nI hope you are doing well. ");
    const gmailUrl = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${recipient}&su=${subject}&body=${body}&tf=1`;
    window.open(gmailUrl, 'https://mail.google.com/mail/u/1/#inbox?compose=new');
}
    

function sendEmail() {
    const recipient = "michellevuelta1993@gmail.com";
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    const emailSubject = encodeURIComponent(`Subject: ${subject}`);
    const emailBody = encodeURIComponent(`Full Name: ${fullName}\nEmail: ${email}\nPhone Number: ${phoneNumber}\n\nMessage:\n${message}`);

    const mailtoUrl = `mailto:${recipient}?subject=${emailSubject}&body=${emailBody}`;
    window.location.href = mailtoUrl;
}


document.querySelectorAll('.service-box').forEach(box => {
    box.addEventListener('mouseover', () => {
      box.querySelector('.service-details').style.transform = 'translateY(0)';
    });
    box.addEventListener('mouseleave', () => {
      box.querySelector('.service-details').style.transform = 'translateY(100%)';
    });
  });


