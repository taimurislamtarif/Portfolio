const scrollBtn = document.getElementById('scrollTopBtn');
  window.onscroll = () => { scrollBtn.style.display = window.scrollY > 200 ? 'flex' : 'none'; };
  function scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }

  const items = document.querySelectorAll('.fade-up,.fade-left,.fade-right');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting) entry.target.classList.add('show');
    });
  }, { threshold: 0.2 });
  items.forEach(i => observer.observe(i));


const sideBar = document.querySelector('.sidebar');
const menuBtn = document.querySelector('.menu-icon');
const closeBtn = document.querySelector('.close-icon');

menuBtn.addEventListener('click', () => {
  sideBar.classList.remove('close-sidebar');
  sideBar.classList.add('open-sidebar');
});

closeBtn.addEventListener('click', () => {
  sideBar.classList.remove('open-sidebar');
  sideBar.classList.add('close-sidebar');
});

/* auto close when clicking a link */
document.querySelectorAll('.sidebar a').forEach(link => {
  link.addEventListener('click', () => {
    sideBar.classList.remove('open-sidebar');
    sideBar.classList.add('close-sidebar');
  });
});
