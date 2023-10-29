document.addEventListener('DOMContentLoaded', function () {
    var cards = [
        { image: 'assets/1.png', title: 'Shinunoga e-wa' },
        { image: 'assets/2.png', title: 'Matsuri' },
        { image: 'assets/3.jpg', title: 'Kirari' },
        { image: 'assets/4.jpg', title: 'Damn' },
        { image: 'assets/5.png', title: 'Grace' },
        { image: 'assets/6.png', title: 'Mo-eh-yo' },
        { image: 'assets/7.png', title: 'Hedemo ne-yo' },
        { image: 'assets/8.png', title: 'Garden' },
        { image: 'assets/9.jpg', title: 'SAYONARA baby' },
        { image: 'assets/10.png', title: 'Hana' },
        { image: 'assets/11.png', title: 'Nan Nan' },
        { image: 'assets/12.jpg', title: 'Working Hard' },
        { image: 'assets/13.png', title: 'Mokoko' },
        { image: 'assets/14.jpg', title: 'Yasashisa' },
        { image: 'assets/15.jpg', title: 'Kazeyo' }
    ];

    var buttonRandomize = document.getElementById('button-randomize');
    var cardContainer = document.querySelector('.row.my-random-row');

    function randomizeCard() {

        var randomIndex1, randomIndex2;

        do {
            randomIndex1 = Math.floor(Math.random() * cards.length);
            randomIndex2 = Math.floor(Math.random() * cards.length);
        } while (randomIndex1 === randomIndex2);

        var selectedCard1 = cards[randomIndex1];
        var selectedCard2 = cards[randomIndex2];

        var cardHtml = `
      <h2 style="padding-top: 40px;"> Your Babies for Today </h2>
      <h5 style="font-size: 15px !important;">(click to show)</h5>
      <div class="col-md-3 my-col"></div>
      <div class="col-md-3 my-col">
          <div class="card my-card" id="hidden-card1" style="width: 10rem;">
              <img src="${selectedCard1.image}" class="card-img-top hide-element" alt="">
              <div class="card-body card-title-container hide-element">
                  <h5 class="card-title">${selectedCard1.title}</h5>
              </div>
          </div>
      </div>
      <div class="col-md-3 my-col">
          <div class="card my-card" id="hidden-card2" style="width: 10rem;">
              <img src="${selectedCard2.image}" class="card-img-top hide-element" alt="">
              <div class="card-body card-title-container hide-element">
                  <h5 class="card-title">${selectedCard2.title}</h5>
              </div>
          </div>
      </div>
      <div class="col-md-3 my-col"></div>
    `;

    cardContainer.classList.add('zoom-element');

        cardContainer.innerHTML = cardHtml;

        var hiddenCard1 = document.getElementById('hidden-card1');
        var hiddenCard2 = document.getElementById('hidden-card2');
        var img1 = hiddenCard1.querySelector('img');
        var title1 = hiddenCard1.querySelector('.card-title-container');
        var img2 = hiddenCard2.querySelector('img');
        var title2 = hiddenCard2.querySelector('.card-title-container');

        hiddenCard1.addEventListener('click', function () {
            hiddenCard1.removeAttribute('id');
            img1.classList.remove('hide-element');
            title1.classList.remove('hide-element');

            img1.classList.add('show-element');
            title1.classList.add('show-element');
        });

        hiddenCard2.addEventListener('click', function () {
            hiddenCard2.removeAttribute('id');
            img2.classList.remove('hide-element');
            title2.classList.remove('hide-element');

            img2.classList.add('show-element');
            title2.classList.add('show-element');
        });
    }

    buttonRandomize.addEventListener('click', randomizeCard);
});