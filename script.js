const greetingBtn = document.getElementById('greetingBtn');
const greetingMessage = document.getElementById('greetingMessage');
const fullName = document.getElementById('fullname');

if (greetingBtn && greetingMessage && fullName) {
  greetingBtn.addEventListener('click', () => {
    const name = fullName.textContent.trim();
    greetingMessage.textContent = `สวัสดี ${name}! Welcome to my profile`;
    greetingBtn.textContent = 'ส่งคำทักทายแล้ว!';
  });
}
