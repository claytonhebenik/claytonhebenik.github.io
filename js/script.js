var workTitle = document.getElementsByClassName('portfolio-title');
var i;
var hide = document.createElement('span');
var t = document.createTextNode('Hide');
hide.appendChild(t);

/** Show  */
for (i = 0; i < workTitle.length; i++) {
  workTitle[i].addEventListener('click', function() {
    this.classList.toggle('active');
    this.nextElementSibling.classList.toggle('active');

    // if(this.classList.contains('active') === true) {
    //   this.appendChild(hide);
    // };
  });
}

// var target = document.querySelector('.alternator');
// var text = ['multi-disciplinary', 'UI', 'digital', 'UX', 'collaborative', 'web', 'front-end', 'interactive'];

// for (i = 0; i < text.length; i++) {
//   target.innerHTML = text[i];
  
//   console.log(i + ' ' + text[i]);
// }




// workTitle[i].addEventListener('click', function() {
//   if(workDOM.classList.contains('active')) {
//       // console.log('it\s alive');
//       workDOM.classList.remove('active');
//       // workDOM.style.display = 'none';
//   }
//   else {
//     // console.log('Active');
//     workDOM.classList.add('active');
//     // workDOM.style.display = 'block';
//   }
// });

// ********************
/*
  Get identifier of link that is clicked

  Find modal with the same ID 

  Get */