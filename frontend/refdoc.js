const tabs = document.querySelectorAll('.tab');
const content = document.querySelector('.content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
  });
});

const form = document.getElementById('uploadForm');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  // Here you can access the uploaded file using
  const uploadedFile = document.getElementById('documentInput').files[0];

  // Implement your logic to handle the uploaded file (e.g., send to server, display details)

  alert(`You uploaded: ${uploadedFile.name}`);
});
