// Inicializando manualmente o carousel
const myCarouselElement = document.querySelector('#items');
const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 3000, // Troca os slides a cada 3 segundos
  touch: true,    // Habilita o swipe em dispositivos touch
  wrap: true      // Faz o carousel rodar em loop
});

// Listener para o evento 'slide'
myCarouselElement.addEventListener('slide.bs.carousel', (event) => {
  console.log(`Slide atual: ${event.from}, indo para: ${event.to}, direção: ${event.direction}`);
});

// Listener para o evento 'slid'
myCarouselElement.addEventListener('slid.bs.carousel', () => {
  console.log('Slide completado!');
});
