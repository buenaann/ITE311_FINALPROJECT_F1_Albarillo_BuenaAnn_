(function () {
  const s = document.getElementById('filter-section');
  s.innerHTML = '<select id="f-genre"><option value="all">All genres</option><option>Fiction</option><option>Non-fiction</option><option>Science</option><option>Other</option></select>';
  let genre = 'all';
  App.filters.push(b => genre === 'all' || b.genre === genre);
  document.getElementById('f-genre').onchange = e => { genre = e.target.value; App.render(); };
})();