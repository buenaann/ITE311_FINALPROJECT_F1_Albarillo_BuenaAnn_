App.actions.push((li, b) => {
  const btn = document.createElement('button');
  btn.className = 'btn';
  btn.textContent = b.read ? 'Unread' : 'Mark read';
  btn.onclick = () => { b.read = !b.read; App.save(); App.render(); };
  li.appendChild(btn);
});
App.actions.push((li, b) => {
  const del = document.createElement('button');
  del.className = 'btn danger';
  del.textContent = 'Delete';
  del.onclick = () => {
    if (!confirm('Remove this book?')) return;
    App.items = App.items.filter(x => x.id !== b.id);
    App.save(); App.render();
  };
  li.appendChild(del);
});
App.summaries.push((shown, box) => {
  const done = App.items.filter(b => b.read).length;
  box.textContent = 'Reading progress: ' + done + ' of ' + App.items.length + ' books read';
});
App.render();