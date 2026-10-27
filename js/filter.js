(function () {
  const s = document.getElementById('filter-section');
  s.innerHTML = '<input id="f-q" placeholder="Search title or author..."><select id="f-genre"><option value="all">All genres</option><option>Fiction</option><option>Non-fiction</option><option>Science</option><option>Other</option></select>';
  let genre = 'all', q = '';
  App.filters.push(b => genre === 'all' || b.genre === genre);
  App.filters.push(b => (b.title + ' ' + b.author).toLowerCase().includes(q));
  document.getElementById('f-genre').onchange = e => { genre = e.target.value; App.render(); };
  document.getElementById('f-q').oninput = e => { q = e.target.value.toLowerCase(); App.render(); };
})();