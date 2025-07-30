// Datos de las universidades con rutas locales a imágenes
const legendData = [
    {
        logo: "/assets/logos/ball-state-university-logo.png",
        title: "Ball State University",
        description: "Universidad pública en Muncie, Indiana",
        url: "https://www.bsu.edu"
    },
    {
        logo: "/assets/logos/bradly-university-logo.png",
        title: "Bradley University",
        description: "Universidad privada en Peoria, Illinois",
        url: "https://www.bradley.edu"
    },
    {
        logo: "/assets/logos/iowa-state-university-logo.png",
        title: "Iowa State University of Science and Technology",
        description: "Universidad pública en Ames, Iowa",
        url: "https://www.iastate.edu"
    },
    {
        logo: "/assets/logos/millennia-atlantic-university-logo.jpg",
        title: "Millennia Atlantic University",
        description: "Universidad privada en Doral, Florida",
        url: "https://www.maufl.edu"
    },
    {
        logo: "/assets/logos/nsu-logo.png",
        title: "Nova Southeastern University",
        description: "Universidad privada en Davie, Florida",
        url: "https://www.nova.edu"
    },
    {
        logo: "/assets/logos/savannah-college-logo.png",
        title: "Savannah College of Art and Design",
        description: "Universidad de arte privada en Savannah, Georgia",
        url: "https://www.scad.edu"
    },
    {
        logo: "/assets/logos/southern-utah-university-logo.png",
        title: "Southern Utah University",
        description: "Universidad pública en Cedar City, Utah",
        url: "https://www.suu.edu"
    },
    {
        logo: "/assets/logos/stetson-university-logo.png",
        title: "Stetson University",
        description: "Universidad privada en DeLand, Florida",
        url: "https://www.stetson.edu"
    },
    {
        logo: "/assets/logos/troy-university-logo.png",
        title: "Troy University",
        description: "Universidad pública en Troy, Alabama",
        url: "https://www.troy.edu"
    },
    {
        logo: "/assets/logos/u-chicago-logo.png",
        title: "University of Chicago",
        description: "Universidad privada de investigación en Chicago, Illinois",
        url: "https://www.uchicago.edu"
    },
    {
        logo: "/assets/logos/u-wyoming-logo.png",
        title: "University of Wyoming",
        description: "Universidad pública en Laramie, Wyoming",
        url: "https://www.uwyo.edu"
    }
];

// Función para generar la leyenda con enlaces
function generateLegend() {
    const container = document.getElementById('legendContainer');
    if (!container) return;
    
    container.innerHTML = '';
    
    legendData.forEach(item => {
        if (!item.url) return; // Saltar si no hay URL
        
        const link = document.createElement('a');
        link.href = item.url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.className = 'legend-item-link';
        
        const legendItem = document.createElement('div');
        legendItem.className = 'legend-item';
        
        // Contenedor del logo
        const logoContainer = document.createElement('div');
        logoContainer.className = 'legend-logo-container';
        
        const logoImg = document.createElement('img');
        logoImg.className = 'legend-logo';
        logoImg.src = item.logo;
        logoImg.alt = `${item.title} logo`;
        logoImg.loading = 'lazy';
        
        logoImg.onerror = function() {
            this.style.display = 'none';
            const fallback = document.createElement('div');
            fallback.className = 'logo-fallback';
            fallback.textContent = item.title.split(' ').map(word => word[0]).join('');
            logoContainer.appendChild(fallback);
        };
        
        // Contenedor de texto
        const textDiv = document.createElement('div');
        textDiv.className = 'legend-text';
        
        const titleH3 = document.createElement('h3');
        titleH3.textContent = item.title;
        
        const descP = document.createElement('p');
        descP.textContent = item.description;
        
        // Icono de enlace externo
        const externalIcon = document.createElement('span');
        externalIcon.className = 'external-icon';
        externalIcon.innerHTML = '↗';
        
        // Ensamblar estructura
        logoContainer.appendChild(logoImg);
        textDiv.appendChild(titleH3);
        textDiv.appendChild(descP);
        
        legendItem.appendChild(logoContainer);
        legendItem.appendChild(textDiv);
        legendItem.appendChild(externalIcon);
        
        link.appendChild(legendItem);
        container.appendChild(link);
    });
}

// Cargar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', generateLegend);

// También ejecutar si el DOM ya está cargado
if (document.readyState === 'complete') {
    generateLegend();
}