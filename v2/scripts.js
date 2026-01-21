<script>
  function createAvatarFallback(initials, sizeClass){
    const el = document.createElement('div');
    el.className = sizeClass + ' avatar-fallback';
    el.textContent = initials;
    return el;
  }

  (function(){
    const btn = document.getElementById('menuBtn');
    const nav = document.getElementById('mobileNav');
    if(btn && nav){
      btn.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('show');
        btn.setAttribute('aria-expanded', String(isOpen));
      });
      nav.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
          nav.classList.remove('show');
          btn.setAttribute('aria-expanded', 'false');
        });
      });
    }

    const y = document.getElementById('year');
    if(y) y.textContent = new Date().getFullYear();
    
  })();
</script>
