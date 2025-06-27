document.getElementById('bookingForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('✅ Thank you! Your booking request has been submitted.');
    this.reset();
  });
  