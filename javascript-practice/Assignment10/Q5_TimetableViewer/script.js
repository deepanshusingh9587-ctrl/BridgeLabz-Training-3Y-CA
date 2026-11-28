const TIMETABLE_URL = 'http://localhost:3005/timetable';

function loadTimetable(selectedDay = '') {
  const msg = document.getElementById('msg');
  const tbody = document.getElementById('timetableBody');
  msg.style.color = '#333';
  msg.textContent = 'Loading timetable...';
  tbody.innerHTML = '';

  const requestUrl = selectedDay
    ? `${TIMETABLE_URL}?day=${encodeURIComponent(selectedDay)}`
    : TIMETABLE_URL;

  axios.get(requestUrl)
    .then(response => {
      let rows = response.data;

      // Fallback filter in case json-server ignores query param
      if (selectedDay && rows.length > 0) {
        const hasOtherDays = rows.some(item => item.day !== selectedDay);
        if (hasOtherDays) {
          rows = rows.filter(item => item.day === selectedDay);
        }
      }

      if (rows.length === 0) {
        msg.textContent = 'No classes scheduled for this selection.';
        return;
      }

      msg.textContent = `Showing ${rows.length} class(es).`;
      rows.forEach(item => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>${item.day}</td>
          <td>${item.time}</td>
          <td>${item.subject}</td>
          <td>${item.room}</td>
        `;
        tbody.appendChild(tr);
      });
    })
    .catch(() => {
      msg.style.color = 'red';
      msg.textContent = 'Could not load timetable. Make sure json-server is running on port 3005.';
    });
}

document.getElementById('daySelect').addEventListener('change', function () {
  loadTimetable(this.value);
});

loadTimetable();