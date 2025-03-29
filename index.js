$(document).ready(function () {
  // Mainkan audio saat halaman dimuat
  const audio = document.getElementById('birthdayAudio');
  audio.play().catch((error) => {
      console.log('Autoplay prevented:', error);
  });

  // Fungsi untuk buka kartu
  function openCard() {
      $('.card').stop().animate({
          top: '-90px'
      }, 'slow');
  }

  // Fungsi untuk tutup kartu
  function closeCard() {
      $('.card').stop().animate({
          top: '0'
      }, 'slow');
  }

  // Untuk desktop (hover)
  $('.container').mouseenter(openCard).mouseleave(closeCard);

  // Untuk mobile (click)
  $('.container').on('click', function () {
      if ($('.card').css('top') === '0px') {
          openCard();
      } else {
          closeCard();
      }
  });
});
