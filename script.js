(function () {
  var form = document.getElementById('form');
  var user = document.getElementById('username');
  var pass = document.getElementById('password');
  var toggle = document.getElementById('toggle');
  var submit = document.getElementById('submit');
  var rules = document.querySelectorAll('#rules li');
  var signup = document.getElementById('signup');
  var reveal = document.getElementById('reveal');
  var outUser = document.getElementById('outUser');
  var outPass = document.getElementById('outPass');
  var again = document.getElementById('again');
  var title = document.getElementById('revealTitle');
  var busy = false;

  var checks = {
    len: function (v) { return v.length >= 8; },
    upper: function (v) { return /\p{Lu}/u.test(v); },
    lower: function (v) { return /\p{Ll}/u.test(v); },
    special: function (v) { return /[^\p{L}\p{N}\s]/u.test(v); }
  };

  function validate() {
    var v = pass.value, allOk = true;
    rules.forEach(function (li) {
      var ok = checks[li.getAttribute('data-rule')](v);
      li.classList.toggle('ok', ok);
      if (!ok) allOk = false;
    });
    var userOk = user.value.trim().length >= 3;
    submit.disabled = busy || !(allOk && userOk);
    return allOk && userOk;
  }

  user.addEventListener('input', validate);
  pass.addEventListener('input', validate);

  toggle.addEventListener('click', function () {
    var show = pass.type === 'password';
    pass.type = show ? 'text' : 'password';
    toggle.textContent = show ? 'Gizlət' : 'Göstər';
    toggle.setAttribute('aria-label', show ? 'Parolu gizlət' : 'Parolu göstər');
    pass.focus();
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (busy || !validate()) return;
    busy = true;
    submit.disabled = true;
    submit.innerHTML = '<span class="spinner"></span>Hesab yaradılır…';

    // Real qeydiyyat təəssüratı üçün qısa gözləmə. Heç bir məlumat göndərilmir.
    setTimeout(function () {
      outUser.textContent = user.value.trim();
      outPass.textContent = pass.value;
      signup.classList.add('hidden');
      reveal.classList.remove('hidden');
      title.focus();
      window.scrollTo(0, 0);
    }, 1400);
  });

  again.addEventListener('click', function () {
    form.reset();
    outUser.textContent = '';
    outPass.textContent = '';
    pass.type = 'password';
    toggle.textContent = 'Göstər';
    busy = false;
    submit.textContent = 'Hesab yarat';
    reveal.classList.add('hidden');
    signup.classList.remove('hidden');
    validate();
    user.focus();
  });

  document.getElementById('fakeLogin').addEventListener('click', function (e) { e.preventDefault(); });

  validate();
})();
