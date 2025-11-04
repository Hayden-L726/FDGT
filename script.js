// Small script: update year and add simple interactivity
document.addEventListener('DOMContentLoaded', function(){
  const year = new Date().getFullYear();
  document.getElementById('year').textContent = year;
});