document.addEventListener("DOMContentLoaded", function () {
    const btnFeedback = document.getElementById("btnFeedback");
    const alertContainer = document.getElementById("jsAlertContainer");

    if (btnFeedback) {
        btnFeedback.addEventListener("click", function () {
            alertContainer.innerHTML = `
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>💡 ¡Análisis de Impacto!</strong> Como desarrolladores de software, optimizar el rendimiento del código (frontend limpio, imágenes comprimidas) reduce las peticiones al servidor, consumiendo menos energía y aplicando principios reales de Green Computing. ¡Todo está conectado!
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            `;
        });
    }

    const glossaryLink = document.querySelector('.nav-link.text-warning[href="glossary.html"]');
    const fadeDuration = 500;

    if (glossaryLink) {
        glossaryLink.addEventListener('click', function (event) {
            event.preventDefault();
            document.body.classList.add('fade-out');
            setTimeout(function () {
                window.location.href = glossaryLink.href;
            }, fadeDuration);
        });
    }

    // ===== GALERÍA INTERACTIVA =====
    const galleryItems = document.querySelectorAll('.gallery-clickable');
    const viewerImage = document.getElementById('viewerImage');
    const imageCounter = document.getElementById('imageCounter');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const imageViewerModal = new bootstrap.Modal(document.getElementById('imageViewerModal'));
    
    let currentImageIndex = 0;
    const totalImages = galleryItems.length;

    function updateImageDisplay() {
        const currentItem = galleryItems[currentImageIndex];
        const imageSrc = currentItem.getAttribute('data-image');
        viewerImage.src = imageSrc;
        imageCounter.textContent = `${currentImageIndex + 1} / ${totalImages}`;
    }

    function showImage(index) {
        if (index >= 0 && index < totalImages) {
            currentImageIndex = index;
            updateImageDisplay();
            imageViewerModal.show();
        }
    }

    galleryItems.forEach((item, index) => {
        item.addEventListener('click', function () {
            showImage(index);
        });
    });

    prevBtn.addEventListener('click', function () {
        let newIndex = currentImageIndex - 1;
        if (newIndex < 0) newIndex = totalImages - 1;
        showImage(newIndex);
    });

    nextBtn.addEventListener('click', function () {
        let newIndex = currentImageIndex + 1;
        if (newIndex >= totalImages) newIndex = 0;
        showImage(newIndex);
    });

    // Navegación con teclado
    document.addEventListener('keydown', function (event) {
        if (document.getElementById('imageViewerModal').classList.contains('show')) {
            if (event.key === 'ArrowLeft') {
                prevBtn.click();
            } else if (event.key === 'ArrowRight') {
                nextBtn.click();
            }
        }
    });

    // ===== TRADUCCIÓN =====
    const langToggleBtn = document.getElementById('langToggleBtn');
    const langIcon = document.getElementById('langIcon');
    let currentLanguage = 'es';

    const translations = {
        es: {
            'btnFeedback': 'Inyectar Alerta Verde (JS)',
            'techModalBtn': 'Ver Enfoque Organizacional',
            'navInicio': 'Inicio',
            'navExperiencia': 'Mi Experiencia',
            'navSostenibilidad': 'Sostenibilidad'
        },
        en: {
            'btnFeedback': 'Inject Green Alert (JS)',
            'techModalBtn': 'View Organizational Approach',
            'navInicio': 'Home',
            'navExperiencia': 'My Experience',
            'navSostenibilidad': 'Sustainability'
        }
    };

    langToggleBtn.addEventListener('click', function () {
        currentLanguage = currentLanguage === 'es' ? 'en' : 'es';
        langIcon.textContent = currentLanguage === 'es' ? '🇪🇸' : '🇺🇸';
        
        // Cambiar textos de elementos específicos
        btnFeedback.textContent = translations[currentLanguage]['btnFeedback'];
        
        // Cambiar los elementos de navegación
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            if (link.href.includes('#inicio') && !link.href.includes('index.html#')) {
                link.textContent = translations[currentLanguage]['navInicio'];
            } else if (link.href.includes('#experiencia')) {
                link.textContent = translations[currentLanguage]['navExperiencia'];
            } else if (link.href.includes('#sostenibilidad')) {
                link.textContent = translations[currentLanguage]['navSostenibilidad'];
            }
        });

        // Cambiar el texto del alerta si ya existe
        const existingAlert = alertContainer.querySelector('.alert');
        if (existingAlert) {
            if (currentLanguage === 'es') {
                existingAlert.innerHTML = `
                    <strong>💡 ¡Análisis de Impacto!</strong> Como desarrolladores de software, optimizar el rendimiento del código (frontend limpio, imágenes comprimidas) reduce las peticiones al servidor, consumiendo menos energía y aplicando principios reales de Green Computing. ¡Todo está conectado!
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                `;
            } else {
                existingAlert.innerHTML = `
                    <strong>💡 Impact Analysis!</strong> As software developers, optimizing code performance (clean frontend, compressed images) reduces server requests, consuming less energy and applying real Green Computing principles. Everything is connected!
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                `;
            }
        }
    });

    console.log("🚀 Sitio Web Informativo - Moda ECCI cargado correctamente.");
});