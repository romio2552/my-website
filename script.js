// script.js
function handleLogin(event) {
    event.preventDefault();
    
    // รับค่าจากฟอร์ม
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Log ค่าที่กรอก
    console.log(`Username: ${username}`);
    console.log(`Password: ${password}`);

    // แสดง modal
    document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

function confirmRememberPassword() {
    alert('Password will be remembered.');
    closeModal();
}

function updateDateTime() {
    const dateElement = document.getElementById('footer-date');
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    dateElement.textContent = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}

// เรียกใช้ฟังก์ชันเพื่ออัปเดตวันที่ทันที และตั้งให้ทำงานทุกวินาที
setInterval(updateDateTime, 1000);
updateDateTime();
