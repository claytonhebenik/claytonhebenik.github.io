var photos = [
    'Scan10007.jpg',
    'Scan10013.jpg',
    'Scan10015.jpg',
    'Scan10019.jpg',
    'Scan10023.jpg',
    'Scan10024.jpg',
    'Scan10035.jpg',
    'Scan10044.jpg',
    'Scan10046.jpg',
    'Scan10033.jpg',
    'Scan10048.png',
    '0001_24A.jpg',
    '1st-ave-plant.jpeg',
    '0002_23A.jpg',
    '0003_22A.jpg',
    '0007_18.jpg',
    '0007_18A.jpg',
    '7sisters.jpeg',
    '0009_16A.jpg',
    '0011_14.jpg',
    '0012_13.jpg',
    '0017_8A.jpg',
    '0018_7A.jpg',
    '0020_5A.jpg',
    '0022_3A.jpg',
    'bMac.jpeg',
    'Buffalo1.jpeg',
    'cameron-falls.jpeg',
    'canoe.jpeg',
    'cliffs.jpeg',
    'dad-Judy.jpeg',
    'FernieLake.jpeg',
    'FrankSlide.jpeg',
    'granville2.jpeg',
    'granville3.jpeg',
    'lighthouse2.jpeg',
    'PrinceOfWales.jpeg',
    'rocks.jpeg',
    'rocks2.jpeg',
    'Wateron Lake.jpeg'
  ];
  for(var i = 0; i < photos.length; i++) {
    //   var content = document.createTextNode('<div class="container__col-sm-12 container__col-md-3 photo__small"><a href="img/photos/' + photos[i] + '" class="modal-link"><img src="img/photos/' + photos[i] + '" /></a></div>');
    document.querySelector('.photos').insertAdjacentHTML('afterbegin', '<div class="container__col-sm-12 container__col-md-3 photo__small"><a href="img/photos/' + photos[i] + '" class="modal-link"><img src="img/photos/' + photos[i] + '" /></a></div>');
  // $('.photos').append(
  //     '<li><a href="img/photos/' + photos[i] + '" class="modal-link">' + photos[i] + '</a></li>'
  // );
  }