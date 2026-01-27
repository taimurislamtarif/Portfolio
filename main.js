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
