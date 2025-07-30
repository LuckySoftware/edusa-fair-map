document.getElementById('downloadTrigger').addEventListener('click', function() {
    // Mostrar confirmación antes de descargar
    const confirmDownload = confirm('¿Deseas descargar el mapa en archivo PDF?');   
    
    if (confirmDownload) {
        const pdfUrl = 'public/assets/utils/descargable-camino.pdf';
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'documento-explicativo.pdf';
        
        // Opcional: añadir atributo para seguridad
        link.rel = 'noopener noreferrer';
        link.target = '_blank';
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Opcional: notificación de descarga exitosa
        setTimeout(() => {
            alert('Descarga iniciada. Si no comienza automáticamente, revisa tu carpeta de descargas.');
        }, 500);
    }
});