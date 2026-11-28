const USERS_API = 'http://localhost:3006/users';

const form = document.getElementById('regForm');
const nameInput = document.getElementById('nameInput');
const emailInput = document.getElementById('emailInput');
const roleInput = document.getElementById('roleInput');
const feedback = document.getElementById('feedback');
const usersTable = document.getElementById('usersTable');

function showMessage(text, type) {
  feedback.textContent = text;
  feedback.className = type;
}

function loadUsers() {
  fetch(USERS_API)
    .then(res => {
      if (!res.ok) throw new Error('Failed to fetch users');
      return res.json();
    })
    .then(users => {
      usersTable.innerHTML = '';
      users.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${user.id}</td>
          <td>${user.name}</td>
          <td>${user.email}</td>
          <td>${user.role}</td>
        `;
        usersTable.appendChild(row);
      });
    })
    .catch(() => {
      showMessage('Could not load users. Check if json-server is running on port 3006.', 'error');
    });
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const role = roleInput.value;

  if (!name || !email || !role) {
    showMessage('Please fill out Name, Email, and Role.', 'error');
    return;
  }

  fetch(USERS_API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, role })
  })
    .then(res => {
      if (!res.ok) throw new Error('Failed to register user');
      return res.json();
    })
    .then(() => {
      showMessage('User registered successfully!', 'success');
      form.reset();
      loadUsers();
    })
    .catch(() => {
      showMessage('Error saving user. Please try again.', 'error');
    });
});

loadUsers();