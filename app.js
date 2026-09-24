document.addEventListener('DOMContentLoaded', () => {
  // 1. Theme toggle functionality
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = themeToggle.querySelector('.theme-icon');
  
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
  });

  function updateThemeIcon(theme) {
    themeIcon.textContent = theme === 'light' ? '☀️' : '🌙';
  }

  // 2. Interactive Counter
  const counterBtn = document.getElementById('counterBtn');
  const clickCount = document.getElementById('clickCount');
  let count = 0;

  counterBtn.addEventListener('click', () => {
    count++;
    clickCount.textContent = count;
  });

  // 3. Copy Clone URL button
  const copyRepoBtn = document.getElementById('copyRepoBtn');
  const repoUrl = 'https://github.com/nguyentptanh59/test.git';

  copyRepoBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(repoUrl);
      const originalText = copyRepoBtn.innerHTML;
      copyRepoBtn.innerHTML = '✅ Đã Copy!';
      setTimeout(() => {
        copyRepoBtn.innerHTML = originalText;
      }, 2000);
    } catch (err) {
      alert(`Clone URL: ${repoUrl}`);
    }
  });
});
