(function(){
  var header = document.getElementById('header');
  function onScroll(){
    if(header){
      var y = window.pageYOffset || document.documentElement.scrollTop || 0;
      if(y > 20){ header.classList.add('header--shrink'); }
      else { header.classList.remove('header--shrink'); }
    }
    // Subtle hero parallax
    var hero = document.querySelector('.hero .hero-content');
    if(hero){
      var y2 = window.pageYOffset || 0;
      var translate = Math.min(20, y2 * 0.05);
      hero.style.transform = 'translateY(' + translate + 'px)';
    }
  }

  // Scroll reveal
  function setupReveal(){
    var elements = Array.prototype.slice.call(document.querySelectorAll('section'));
    elements.forEach(function(el){
      if(!el.classList.contains('reveal')){ el.classList.add('reveal'); }
    });
    if('IntersectionObserver' in window){
      var observer = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
          if(entry.isIntersecting){
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { rootMargin: '0px 0px -10% 0px', threshold: 0.15 });
      elements.forEach(function(el){ observer.observe(el); });
    } else {
      // Fallback
      elements.forEach(function(el){ el.classList.add('is-visible'); });
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('load', function(){ onScroll(); setupReveal(); });
})();


