
window.addEventListener('scroll', function () {
    const logoImg = document.getElementById('logo-img');
    const logoText = document.getElementById('logo-text');
    const scrollPosition = window.scrollY;

    // Detectamos el desplazamiento, puedes ajustar este valor según tus necesidades
    if (scrollPosition > 150) {  // Cambia 150 por la distancia que desees
        logoImg.style.opacity = '0';  // Oculta la imagen
        logoText.style.display = 'inline';  // Muestra el texto
    } else {
        logoImg.style.opacity = '1';  // Vuelve a mostrar la imagen
        logoText.style.display = 'none';  // Oculta el texto
    }
});
