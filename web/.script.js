// Datos de las universidades con URLs de logos
const legendData = [
    {
        logo: "/assets/ball-state-university-logo.jpg",
        title: "Ball State University",
        description: "Universidad pública en Muncie, Indiana"
    },
    {
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Bradley_University_seal.svg/1200px-Bradley_University_seal.svg.png",
        title: "Bradley University",
        description: "Universidad privada en Peoria, Illinois"
    },
    {
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Iowa_State_University_Logo.svg/1200px-Iowa_State_University_Logo.svg.png",
        title: "Iowa State University of Science and Technology",
        description: "Universidad pública en Ames, Iowa"
    },
    {
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Millennia_Atlantic_University_logo.png/800px-Millennia_Atlantic_University_logo.png",
        title: "Millennia Atlantic University",
        description: "Universidad privada en Doral, Florida"
    },
    {
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Nova_Southeastern_University_logo.svg/1200px-Nova_Southeastern_University_logo.svg.png",
        title: "Nova Southeastern University",
        description: "Universidad privada en Davie, Florida"
    },
    {
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/SCAD_logo.svg/1200px-SCAD_logo.svg.png",
        title: "Savannah College of Art and Design",
        description: "Universidad de arte privada en Savannah, Georgia"
    },
    {
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Southern_Utah_University_logo.svg/1200px-Southern_Utah_University_logo.svg.png",
        title: "Southern Utah University",
        description: "Universidad pública en Cedar City, Utah"
    },
    {
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Stetson_University_seal.png/800px-Stetson_University_seal.png",
        title: "Stetson University",
        description: "Universidad privada en DeLand, Florida"
    },
    {
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Troy_University_logo.svg/1200px-Troy_University_logo.svg.png",
        title: "Troy University",
        description: "Universidad pública en Troy, Alabama"
    },
    {
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/University_of_Chicago_logo.svg/1200px-University_of_Chicago_logo.svg.png",
        title: "University of Chicago",
        description: "Universidad privada de investigación en Chicago, Illinois"
    },
    {
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Wyoming_cowboys_logo.svg/1200px-Wyoming_cowboys_logo.svg.png",
        title: "University of Wyoming",
        description: "Universidad pública en Laramie, Wyoming"
    }
];

// Función para generar la leyenda con logos
function generateLegend() {
    const container = document.getElementById('legendContainer');
    
    legendData.forEach(item => {
        const legendItem = document.createElement('div');
        legendItem.className = 'legend-item';
        legendItem.innerHTML = `
            <img src="${item.logo}" alt="${item.title} logo" class="legend-logo" onerror="this.src='https://via.placeholder.com/60?text=Logo+no+disponible'">
            <div class="legend-text">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        `;
        container.appendChild(legendItem);
    });
}

// Ejecutar al cargar la página
window.onload = generateLegend;