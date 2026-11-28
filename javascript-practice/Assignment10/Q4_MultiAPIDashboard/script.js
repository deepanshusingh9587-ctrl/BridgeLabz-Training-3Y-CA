const LOCAL_API = 'http://localhost:3004/projects';
const EXTERNAL_API = 'https://jsonplaceholder.typicode.com/posts?_limit=5';

function loadDashboard() {
  const banner = document.getElementById('statusBanner');
  const localList = document.getElementById('localList');
  const externalList = document.getElementById('externalList');

  banner.className = '';
  banner.textContent = 'Fetching data from both APIs...';
  localList.innerHTML = '';
  externalList.innerHTML = '';

  Promise.all([
    fetch(LOCAL_API).then(res => {
      if (!res.ok) throw new Error('Local server error');
      return res.json();
    }),
    fetch(EXTERNAL_API).then(res => {
      if (!res.ok) throw new Error('External API error');
      return res.json();
    })
  ])
    .then(([projects, posts]) => {
      projects.forEach(proj => {
        const li = document.createElement('li');
        li.textContent = `${proj.name} — ${proj.status}`;
        localList.appendChild(li);
      });

      posts.forEach(post => {
        const li = document.createElement('li');
        li.textContent = post.title;
        externalList.appendChild(li);
      });

      banner.textContent = 'Both APIs loaded successfully!';
    })
    .catch(err => {
      banner.className = 'error';
      banner.textContent = `Failed to load dashboard: ${err.message}`;
    });
}

document.getElementById('reloadBtn').addEventListener('click', loadDashboard);
loadDashboard();