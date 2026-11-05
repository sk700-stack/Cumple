document.addEventListener('DOMContentLoaded', () => {
  const music = document.getElementById('birthdayMusic');
  const musicToggle = document.getElementById('musicToggle');
  const musicIcon = document.getElementById('musicIcon');
  let musicStarted = false;

  // El navegador puede bloquear autoplay con sonido. Se intenta al cargar y
  // se vuelve a intentar en la primera interacción del visitante.
  async function startMusic() {
    if (!music || musicStarted) return;
    try {
      await music.play();
      musicStarted = true;
      musicIcon.textContent = '♫';
      musicToggle.setAttribute('aria-label', 'Pausar música');
      musicToggle.classList.add('is-playing');
    } catch (error) {
      musicToggle.setAttribute('aria-label', 'Reproducir música');
    }
  }

  function pauseMusic() {
    music.pause();
    musicStarted = false;
    musicIcon.textContent = '♪';
    musicToggle.setAttribute('aria-label', 'Reproducir música');
    musicToggle.classList.remove('is-playing');
  }

  musicToggle.addEventListener('click', async () => {
    if (music.paused) {
      try {
        await music.play();
        musicStarted = true;
        musicIcon.textContent = '♫';
        musicToggle.classList.add('is-playing');
        musicToggle.setAttribute('aria-label', 'Pausar música');
      } catch (error) {
        alert('Agrega tu archivo MP3 en assets/music/birthday-song.mp3 para activar la música.');
      }
    } else {
      pauseMusic();
    }
  });

  // Intento de reproducción automática. Si falla, la primera interacción
  // (clic o toque) vuelve a intentar reproducirla.
  startMusic();
  ['pointerdown', 'keydown', 'touchstart'].forEach(eventName => {
    document.addEventListener(eventName, () => {
      if (music.paused && !musicStarted) startMusic();
    }, { once: true, passive: true });
  });

  // Animaciones de entrada al desplazarse.
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  // Carta interactiva.
  const openLetter = document.getElementById('openLetter');
  const letterMessage = document.getElementById('letterMessage');
  openLetter.addEventListener('click', () => {
    const isOpen = openLetter.classList.toggle('is-open');
    openLetter.setAttribute('aria-expanded', String(isOpen));
    letterMessage.hidden = !isOpen;
    openLetter.querySelector('.letter-hint').textContent = isOpen ? 'Carta abierta ♡' : 'Toca para abrir';
    if (isOpen) setTimeout(() => letterMessage.scrollIntoView({ behavior: 'smooth', block: 'center' }), 180);
  });

  // Galería ampliable.
  const dialog = document.getElementById('photoDialog');
  const dialogImage = document.getElementById('dialogImage');
  const dialogCaption = document.getElementById('dialogCaption');
  document.querySelectorAll('.polaroid').forEach(card => {
    card.addEventListener('click', () => {
      dialogImage.src = card.dataset.image;
      dialogCaption.textContent = card.dataset.caption;
      dialog.showModal();
    });
  });
  document.getElementById('closePhoto').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target === dialog) dialog.close();
  });

  // Deseo + lluvia de pequeñas estrellas/confeti.
  const wishButton = document.getElementById('wishButton');
  const wishFeedback = document.getElementById('wishFeedback');
  const confettiLayer = document.getElementById('confettiLayer');
  wishButton.addEventListener('click', () => {
    wishFeedback.textContent = 'Que todos tus deseos encuentren su camino. ✨';
    createConfetti();
    wishButton.disabled = true;
    wishButton.innerHTML = 'Deseo enviado ♡';
    setTimeout(() => { wishButton.disabled = false; wishButton.innerHTML = 'Pedir otro deseo <span>✧</span>'; }, 3500);
  });

  function createConfetti() {
    const symbols = ['✦', '♡', '✧', '·'];
    const colors = ['#f3b6c8', '#e9dff5', '#fff1d9', '#d7a2b7', '#ffffff'];
    for (let i = 0; i < 65; i++) {
      const piece = document.createElement('span');
      piece.className = 'confetti-piece';
      piece.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      piece.style.left = `${Math.random() * 100}%`;
      piece.style.color = colors[Math.floor(Math.random() * colors.length)];
      piece.style.fontSize = `${10 + Math.random() * 17}px`;
      piece.style.animationDelay = `${Math.random() * 1.2}s`;
      piece.style.animationDuration = `${2.5 + Math.random() * 2}s`;
      confettiLayer.appendChild(piece);
      setTimeout(() => piece.remove(), 5200);
    }
  }
});
