// Mobile sidebar toggle
const toggle = document.getElementById('navToggle');
const sidebar = document.getElementById('mobileSidebar');
const overlay = document.getElementById('sidebarOverlay');
const closeBtn = document.getElementById('sidebarClose');

function openSidebar() {
  sidebar.classList.add('open');
  overlay.classList.add('active');
  toggle.setAttribute('aria-expanded', 'true');
  sidebar.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  // Move focus into the sidebar so screen readers enter it correctly
  closeBtn.focus();
}

function closeSidebar() {
  sidebar.classList.remove('open');
  overlay.classList.remove('active');
  toggle.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
  // Move focus back to the toggle BEFORE setting aria-hidden
  // so no focused element is ever inside a hidden container
  toggle.focus();
  sidebar.setAttribute('aria-hidden', 'true');
}

toggle.addEventListener('click', () => {
  sidebar.classList.contains('open') ? closeSidebar() : openSidebar();
});

if (closeBtn) closeBtn.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeSidebar();
});