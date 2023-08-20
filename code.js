window.addEventListener('load', inicio)

function inicio() {
    const navbar2 = document.getElementById('leftNav');
    const P_privacy = document.getElementById('Privacy');
    const P_Support = document.getElementById('Support');
    const P_Settings = document.getElementById('Settings');
    const closeMenuButton = document.getElementById('dashboardimg');
            	        closeMenuButton.addEventListener('click',closeMenu)
    // navbar2.classList.add('german');
    const menuButton = document.getElementById('menuButton');
         menuButton.addEventListener('click', desplegar);

        function desplegar() {
            var element = document.getElementById('element');
            element.classList.toggle('expanded');
            P_privacy.style.color='#002B5B'
            P_Support.style.color = '#002B5B'
            P_Settings.style.color = '#002B5B'
            menuButton.style.display = 'none';
        }
         function closeMenu() {
             var element = document.getElementById('element');
             element.classList.toggle('expanded');
             menuButton.style.display = 'block';
             setTimeout(() => {
                P_privacy.style.color='transparent'
                 P_Support.style.color = 'transparent'
                 P_Settings.style.color = 'transparent'
             }, 400);
        }
          
}




// const close = document.getElementById('dashboardimg');
// close.addEventListener('click', cerrar);
// function cerrar() {
//     navbar.classList.add('hidden'); // Ocultar con opacidad 0 y altura 0
//     p.classList.add('visible'); // Mostrar con opacidad completa y altura automática
// }