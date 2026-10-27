(function () {
  const s = document.getElementById('add-section');
  s.innerHTML = '<input id="b-title" placeholder="Book title"><input id="b-author" placeholder="Author"><select id="b-genre"><option>Fiction</option><option>Non-fiction</option><option>Science</option><option>Other</option></select><button id="b-add" class="btn">Add</button>';
  document.getElementById('b-add').onclick = () => {
    App.items.push({
      id: Date.now(),
      title: document.getElementById('b-title').value,
      author: document.getElementById('b-author').value,
      genre: document.getElementById('b-genre').value,
      read: false
    });
    App.save(); App.render();
  };
})();
