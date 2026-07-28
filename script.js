// Achievements Modal
function openAchieveModal() {
  document.getElementById('achieve-modal').classList.add('active');
}

// Terminal Logic
const termInput = document.getElementById('term-input');
const terminal = document.getElementById('terminal');
const terminalLog = document.querySelector('.terminal-log');

const commands = {
  'help': 'Available commands: help, about, skills, konami, clear',
  'about': 'Hi, I am Karman Singh, a software engineer passionate about web dev.',
  'skills': 'React, Node.js, Python, CSS3, Vite, Tailwind',
  'konami': '🎉 Cheat code activated! 🎉',
  'clear': ''
};

termInput.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    const val = this.value.trim().toLowerCase();
    this.value = '';
    
    if (val === '') return;

    let response = commands[val] || `Command not found: ${val}. Type 'help' for commands.`;
    
    if (val === 'clear') {
      terminalLog.innerHTML = '';
      return;
    }

    if (val === 'konami') {
      activateKonami();
    }

    terminalLog.innerHTML += `\n> ${val}\n${response}`;
    terminal.scrollTop = terminal.scrollHeight;
  }
});

function activateKonami() {
  for(let i=0; i<30; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti-piece';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.backgroundColor = ['#df7a3e', '#7c1f2b', '#3f5c93', '#217a6b', '#6b6e45'][Math.floor(Math.random() * 5)];
    confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
    document.body.appendChild(confetti);
    
    setTimeout(() => {
      confetti.remove();
    }, 5000);
  }
}

// Basic window dragging logic (for screens > 768px)
const windows = document.querySelectorAll('.window[data-drag]');

windows.forEach(win => {
  const handle = win.querySelector('[data-handle]');
  if (!handle) return;
  
  let isDragging = false;
  let startX, startY, initialX, initialY;

  handle.addEventListener('mousedown', dragStart);
  
  function dragStart(e) {
    if (window.innerWidth <= 768) return;
    initialX = win.offsetLeft;
    initialY = win.offsetTop;
    startX = e.clientX;
    startY = e.clientY;
    isDragging = true;
    
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', dragEnd);
  }

  function drag(e) {
    if (!isDragging) return;
    
    e.preventDefault();
    const currentX = e.clientX - startX;
    const currentY = e.clientY - startY;
    
    // Convert to relative positioning or transform
    win.style.transform = `translate(${currentX}px, ${currentY}px)`;
  }

  function dragEnd(e) {
    initialX = currentX;
    initialY = currentY;
    isDragging = false;
    document.removeEventListener('mousemove', drag);
    document.removeEventListener('mouseup', dragEnd);
  }
});
