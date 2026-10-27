(function () {
  const s = document.getElementById('add-section');
  s.innerHTML = '<input id="b-title" placeholder="Book title"><input id="b-author" placeholder="Author"><select id="b-genre"><option>Fiction</option><option>Non-fiction</option><option>Science</option><option>Other</option></select><button id="b-add" class="btn">Add</button>';
  const titleEl = document.getElementById('b-title');
  const authorEl = document.getElementById('b-author');
  function addBook() {
    const title = titleEl.value.trim();
    const author = authorEl.value.trim();
    if (!title || !author) { alert('Please enter both title and author.'); return; }
    if (App.items.some(b => b.title.toLowerCase() === title.toLowerCase())) { alert('This book is already on your shelf.'); return; }
    App.items.push({ id: Date.now(), title: title, author: author, genre: document.getElementById('b-genre').value, read: false });
    titleEl.value = ''; authorEl.value = '';
    App.save(); App.render();
  }
  document.getElementById('b-add').onclick = addBook;
  [titleEl, authorEl].forEach(el => el.addEventListener('keydown', e => { if (e.key === 'Enter') addBook(); }));
})();