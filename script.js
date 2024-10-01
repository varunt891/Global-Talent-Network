const page1 = document.getElementById('job-list-page1');
  const page2 = document.getElementById('job-list-page2');
  const btn1 = document.getElementById('page1-btn');
  const btn2 = document.getElementById('page2-btn');

  btn1.addEventListener('click', function() {
    page1.style.display = 'block';
    page2.style.display = 'none';
    btn1.classList.add('active');
    btn2.classList.remove('active');
  });

  btn2.addEventListener('click', function() {
    page1.style.display = 'none';
    page2.style.display = 'block';
    btn2.classList.add('active');
    btn1.classList.remove('active');
  });