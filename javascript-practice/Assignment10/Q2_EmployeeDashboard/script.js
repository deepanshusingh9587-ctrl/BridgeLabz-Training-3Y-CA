const API_URL = 'http://localhost:3002/employees';

function loadEmployees() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', API_URL, true);
  xhr.onload = function () {
    if (xhr.status === 200) {
      const employees = JSON.parse(xhr.responseText);
      const tbody = document.getElementById('empTable');
      tbody.innerHTML = '';

      employees.forEach(emp => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${emp.id}</td>
          <td>${emp.name}</td>
          <td id="status-${emp.id}">${emp.status}</td>
          <td><button onclick="toggleStatus('${emp.id}')">Toggle</button></td>
        `;
        tbody.appendChild(row);
      });
    }
  };
  xhr.send();
}

function toggleStatus(id) {
  const statusCell = document.getElementById('status-' + id);
  const errorMsg = document.getElementById('errorMsg');
  errorMsg.textContent = '';

  const oldStatus = statusCell.textContent;
  const newStatus = oldStatus === 'active' ? 'inactive' : 'active';

  // Immediately update UI
  statusCell.textContent = newStatus;

  const xhr = new XMLHttpRequest();
  xhr.open('PATCH', `${API_URL}/${id}`, true);
  xhr.setRequestHeader('Content-Type', 'application/json');

  xhr.onload = function () {
    if (xhr.status !== 200) {
      statusCell.textContent = oldStatus;
      errorMsg.textContent = 'Failed to update status. Reverted changes.';
    }
  };

  xhr.onerror = function () {
    statusCell.textContent = oldStatus;
    errorMsg.textContent = 'Network error! Could not update status.';
  };

  xhr.send(JSON.stringify({ status: newStatus }));
}

loadEmployees();