const BASE_URL = 'http://localhost:3003/tasks';

function fetchTasks(queryParams = '') {
  $.ajax({
    url: BASE_URL + queryParams,
    method: 'GET',
    success: function (tasks) {
      $('#taskList').empty();
      tasks.forEach(function (task) {
        const isChecked = task.completed ? 'checked' : '';
        $('#taskList').append(`
          <li>
            <input type="checkbox" class="task-check" data-id="${task.id}" ${isChecked}>
            ${task.title} <strong>[${task.priority}]</strong>
          </li>
        `);
      });
    }
  });
}

$(document).ready(function () {
  fetchTasks();

  $('#filterSelect').on('change', function () {
    const query = $(this).val();
    fetchTasks(query);
  });

  $(document).on('change', '.task-check', function () {
    const id = $(this).data('id');
    const completedStatus = $(this).is(':checked');

    $.ajax({
      url: `${BASE_URL}/${id}`,
      method: 'PATCH',
      contentType: 'application/json',
      data: JSON.stringify({ completed: completedStatus })
    });
  });
});