App.actions.push((li, b) => {
  const btn = document.createElement('button');
  btn.className = 'btn';
  btn.textContent = b.read ? 'Unread' : 'Mark read';
  btn.onclick = () => { b.read = !b.read; App.save(); App.render(); };
  li.appendChild(btn);
});
App.render();