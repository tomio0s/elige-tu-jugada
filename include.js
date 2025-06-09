function includeHTML(id, url) {
  fetch(url)
    .then(resp => {
      if (!resp.ok) throw new Error('Error al cargar ' + url);
      return resp.text();
    })
    .then(html => {
      document.getElementById(id).innerHTML = html;
    })
    .catch(err => console.error('Error al cargar fragmento:', err));
}

window.addEventListener('DOMContentLoaded', () => {
  includeHTML('header-placeholder', 'header.html');
  includeHTML('footer-placeholder', 'footer.html');
});


