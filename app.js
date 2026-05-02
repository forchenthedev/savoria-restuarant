
const hamburger = document.querySelector('.hamburger')
const navLinks = document.querySelector('.nav-links')
const reserveBtn = document.querySelector("#reserveBtn");
const intro = document.querySelector(".intro-loader");

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active')
});

window.addEventListener("load", ()=> {
    const name = document.querySelector(".name")
    const intro = document.querySelector(".intro-loader");

    setTimeout(()=> {
        name.style.opacity = '1'
        name.style.transform = "translate(0)"
    }, 300)

    setTimeout(() => {
        intro.style.top = '-100%'

    }, 2000)

    setTimeout(()=> {
        intro.style.display = 'none'
    }, 3000)
})




      // Basic validation
document.getElementById('reserveBtn').addEventListener('click', function () {

    // Grab values
    const name    = document.getElementById('fullName');
    const email   = document.getElementById('email');
    const date    = document.getElementById('date');
    const time    = document.getElementById('time');
    const guests  = document.getElementById('guests');
    const phone   = document.getElementById('phone');
    const message = document.getElementById('specialRequests');

    // Clear previous errors
    document.querySelectorAll('.error-msg').forEach(e => e.textContent = '');
    document.querySelectorAll('.invalid').forEach(e => e.classList.remove('invalid'));

    // Validate each field
    let isValid = true;

    if (!name.value.trim()) {
        document.getElementById('nameError').textContent = 'Please enter your full name.';
        name.classList.add('invalid');
        isValid = false;
    }

    if (!email.value.trim()) {
        document.getElementById('emailError').textContent = 'Please enter your email address.';
        email.classList.add('invalid');
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email.value)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        email.classList.add('invalid');
        isValid = false;
    }

    if (!date.value) {
        document.getElementById('dateError').textContent = 'Please select a date.';
        date.classList.add('invalid');
        isValid = false;
    }

    if (!time.value) {
        document.getElementById('timeError').textContent = 'Please select a time.';
        time.classList.add('invalid');
        isValid = false;
    }

    if (!guests.value) {
        document.getElementById('guestsError').textContent = 'Please select number of guests.';
        guests.classList.add('invalid');
        isValid = false;
    }

    if (!phone.value.trim()) {
        document.getElementById('phoneError').textContent = 'Please enter your phone number.';
        phone.classList.add('invalid');
        isValid = false;
    }

    // Stop here if any field is invalid
    if (!isValid) return;

    // If all valid — send the email
    const templateParams = {
        from_name: name.value,
        to_email:  email.value,
        date:      date.value,
        time:      time.value,
        guests:    guests.value,
        phone:     phone.value,
        message:   message.value || 'None',
    };

    this.textContent = 'Sending...';
    this.disabled = true;

    emailjs.send('service_uf6f4ke', 'template_9c891o9', templateParams)
        .then(() => {
    // Hide the form
    document.querySelector('.reservation-form').style.display = 'none';

    // Fill in the success screen details
    document.getElementById('successName').textContent = name.value;
    document.getElementById('successDate').textContent = date.value;
    document.getElementById('successTime').textContent = time.value;
    document.getElementById('successGuests').textContent = guests.value;
    document.getElementById('successEmail').textContent = email.value;

    // Show the success screen
    const successScreen = document.getElementById('successScreen');
    successScreen.style.display = 'flex';

    // Reset button
    this.textContent = 'Confirm Reservation';
    this.disabled = false;

}, (error) => {
    alert('Something went wrong. Please try again.');
    console.error(error);
    this.textContent = 'Confirm Reservation';
    this.disabled = false;
   });
});

document.getElementById('newReservationBtn').addEventListener('click', function() {
    // Hide success screen
    document.getElementById('successScreen').style.display = 'none';

    // Show the form again
    document.querySelector('.reservation-form').style.display = 'flex';

    // Clear all fields
    document.getElementById('fullName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('date').value = '';
    document.getElementById('time').value = '';
    document.getElementById('guests').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('specialRequests').value = '';
});





