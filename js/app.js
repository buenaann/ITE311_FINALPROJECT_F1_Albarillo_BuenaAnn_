const App = {
  items: [], filters: [], actions: [], summaries: [],
  save() { try { localStorage.setItem('books', JSON.stringify(this.items)); } catch (e) {} },
  load() { try { this.items = JSON.parse(localStorage.getItem('books')) || []; } catch (e) { this.items = []; } },
  render() {
    const ul = document.getElementById('book-list');
    const box = document.getElementById('summary');
    ul.innerHTML = ''; box.innerHTML = '';
    const shown = this.items.filter(b => this.filters.every(f => f(b)));
    if (!shown.length) ul.innerHTML = '<li class="empty">No books to show.</li>';
    shown.forEach(b => {
      const li = document.createElement('li');
      li.className = b.read ? 'read' : '';
      const s = document.createElement('span');
      s.textContent = b.title + ' by ' + b.author + ' [' + b.genre + ']';
      li.appendChild(s);
      this.actions.forEach(f => f(li, b));
      ul.appendChild(li);
    });
    this.summaries.forEach(f => f(shown, box));
  }
};
App.load();
App.render();
// Load feature modules (missing ones are skipped until their branch is merged)
['add', 'status', 'filter'].forEach(n => {
  const s = document.createElement('script');
  s.src = 'js/' + n + '.js';
  s.onerror = () => {};
  document.body.appendChild(s);
});