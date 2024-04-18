document.addEventListener('DOMContentLoaded', function() {
    const calendar = document.getElementById('calendar');
    const addEventBtn = document.getElementById('addEventBtn');
    const eventModal = document.getElementById('eventModal');
    const eventForm = document.getElementById('eventForm');
    const closeModal = document.querySelector('.close');

    // Show event modal
    addEventBtn.addEventListener('click', function() {
        eventModal.style.display = 'block';
    });

    // Close event modal
    closeModal.addEventListener('click', function() {
        eventModal.style.display = 'none';
    });

    // Form submission
    eventForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const reminder = document.getElementById('reminder').checked;

        // Send data to server (PHP)
        
        // xhr.onload = function() {
        //     if (this.status === 200) {
        //         // Handle response
        //     }
        // };
        // xhr.send(`title=${title}&description=${description}&date=${date}&time=${time}&reminder=${reminder}`);

        // Close modal
        eventModal.style.display = 'none';

        // Clear form fields
        eventForm.reset();
    });

    // Calendar initialization and event handling
    // You can use libraries like FullCalendar for more advanced features
});
