const scrollFunk = () => {
   const link = document.querySelector('.header-menu__item a');
   const links = document.querySelectorAll('.header-menu__item a');

   seamless.polyfill();

   links.forEach((element) => {
      element.addEventListener('click', (event) => {
         event.preventDefault()

         const id = element.getAttribute('href').substring(1)
         const section = document.getElementById(id)

         if (section) {
            seamless.elementScrollIntoView(section, {
               behavior: 'smooth',
               block: 'start'
            })
         } else {
            console.log('no section');
         }
      })
   })


   const details = document.querySelector('.card-details__link-characteristics ');
   const detailsId = details.getAttribute('href').substring(1);
   const detailsSection = document.getElementById(detailsId);

   details.addEventListener('click', (event) => {
      event.preventDefault()

      if (detailsSection) {
         seamless.elementScrollIntoView(detailsSection, {
            behavior: 'smooth',
            block: 'start'
         })
      } else {
         console.log('no');
      }
   })
}

scrollFunk()






