//  slider code
 const titles = Array.from(document.querySelectorAll("[data-slide-title]"));
    const descriptions = Array.from(document.querySelectorAll("[data-slide-description]"));
    const imgs = Array.from(document.querySelectorAll("#slider img"));
    const titleEl = document.getElementById("slide-title");
    const descriptionEl = document.getElementById("slide-description");
    const buttons = Array.from(document.querySelectorAll("#pagination button"));

    let current = 0;
    const total = imgs.length;

    function updateSlider(index) {
      imgs.forEach((img, i) => {
        img.classList.toggle("active", i === index);
      });

      titleEl.innerHTML = titles[index].innerHTML;
      descriptionEl.innerHTML = descriptions[index].innerHTML;

      buttons.forEach((btn, i) => {
        btn.classList.toggle("active", i === index);
      });

      current = index;
    }

    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        const index = parseInt(btn.dataset.slide, 10);
        updateSlider(index);
      });
    });

    setInterval(() => {
      let next = (current + 1) % total;
      updateSlider(next);
    }, 5000); // auto slide every 5s


    // whatsapp icon hide code 
      const mainSection = document.querySelector('main');
  const enquire = document.querySelector('.sticky-enquire');
  const whatsapp = document.querySelector('.whatsapp-icon');
  const call = document.querySelector('.call-icon');

  function toggleIcons() {
    const mainRect = mainSection.getBoundingClientRect();
    const inView = (
      mainRect.top <= window.innerHeight &&
      mainRect.bottom >= 0
    );

    if (inView) {
      enquire.style.display = 'none';
      whatsapp.style.display = 'none';
      call.style.display = 'none';
    } else {
      enquire.style.display = 'block';
      whatsapp.style.display = 'block';
      call.style.display = 'block';
    }
  }

  document.addEventListener('scroll', toggleIcons);
  window.addEventListener('load', toggleIcons);


  function toggleEvent(el) {
    document.querySelectorAll('.event-box').forEach(box => {
      if (box !== el) {
        box.classList.remove('active');
      }
    });
    el.classList.toggle('active');
  }