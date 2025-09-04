// Datos de las universidades con rutas locales a imágenes
const legendData = [
    {
        logo: "/public/assets/images/logos/ball-state-university-logo.png",
        title: "Ball State University",
        description: "Universidad pública en Muncie, Indiana",
        url: "https://www.bsu.edu"
    },
    {
        logo: "/public/assets/images/logos/bradly-university-logo.png",
        title: "Bradley University",
        description: "Universidad privada en Peoria, Illinois",
        url: "https://www.bradley.edu"
    },
    {
        logo: "/public/assets/images/logos/ieny-college-logo.jpeg",
        title: "IE New York College",
        description: "Private college in New York City, New York",
        url: "https://www.ienyc.edu/"
    },
    {
        logo: "/public/assets/images/logos/rice-university-logo.jpeg",
        title: "Rice University",
        description: "Private university at Houston, Texas",
        url: "https://www.rice.edu/"
    },
    {
        logo: "/public/assets/images/logos/iowa-state-university-logo.png",
        title: "Iowa State University of Science and Technology",
        description: "Universidad pública en Ames, Iowa",
        url: "https://www.iastate.edu"
    },
    {
        logo: "/public/assets/images/logos/millennia-atlantic-university-logo.jpg",
        title: "Millennia Atlantic University",
        description: "Universidad privada en Doral, Florida",
        url: "https://www.maufl.edu"
    },
    {
        logo: "/public/assets/images/logos/nsu-logo.png",
        title: "Nova Southeastern University",
        description: "Universidad privada en Davie, Florida",
        url: "https://www.nova.edu"
    },
    {
        logo: "/public/assets/images/logos/savannah-college-logo.png",
        title: "Savannah College of Art and Design",
        description: "Universidad de arte privada en Savannah, Georgia",
        url: "https://www.scad.edu"
    },
    {
        logo: "/public/assets/images/logos/stetson-university-logo.png",
        title: "Stetson University",
        description: "Universidad privada en DeLand, Florida",
        url: "https://www.stetson.edu"
    },
    {
        logo: "/public/assets/images/logos/troy-university-logo.png",
        title: "Troy University",
        description: "Universidad pública en Troy, Alabama",
        url: "https://www.troy.edu"
    },
    {
        logo: "/public/assets/images/logos/u-chicago-logo.png",
        title: "University of Chicago",
        description: "Universidad privada de investigación en Chicago, Illinois",
        url: "https://www.uchicago.edu"
    },
    {
        logo: "/public/assets/images/logos/u-wyoming-logo.png",
        title: "University of Wyoming",
        description: "Universidad pública en Laramie, Wyoming",
        url: "https://www.uwyo.edu"
    },
    {
        logo: "/public/assets/images/logos/fulbright-logo.png",
        title: "Fulbright Uruguay",
        description: "Becas de intercambio académico entre Uruguay y EE.UU.",
        url: "https://fulbright.org.uy/"
    },
    {
        logo: "/public/assets/images/alianza-logo.png",
        title: "Alianza",
        description: "Instituto binacional de enseñanza del inglés y cultura.",
        url: "https://www.alianza.edu.uy/es/"
    },
    {
        logo: "/public/assets/images/us-flag-logo.png",
        title: "Embajada de Estados Unidos en Uruguay",
        description: "Representación diplomática oficial de EE.UU. en Uruguay.",
        url: "https://uy.usembassy.gov/es/"
    },
    {
        logo: "/public/assets/images/logos/ielts-logo.png",
        title: "IELTS",
        description: "Examen internacional de inglés para estudio o trabajo.",
        url: "https://ielts.org.uy/"
    },
    {
        logo: "/public/assets/images/logos/educationusa-stand-logo.png",
        title: "EducationUSA",
        description: "Orientación para estudiar en universidades de Estados Unidos.",
        url: "https://educationusa.org.uy/"
    }
].sort((a, b) => a.title.localeCompare(b.title)); // Ordenar alfabéticamente por título el array de universidades

// Función para generar la leyenda con enlaces
function generateLegend() {
    const container = document.getElementById('legendContainer');
    if (!container) return;
    
    container.innerHTML = '';
    
    legendData.forEach(item => {
        if (!item.url) return;
        
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
        
        // Icono de Font Awesome
        const externalIcon = document.createElement('i');
        externalIcon.className = 'fas fa-external-link-alt';
        
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