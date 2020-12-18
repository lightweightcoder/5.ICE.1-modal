let hasClickedModal = false;

// Get the modal
const modals = document.getElementsByClassName('modal');

// Get the button that opens the modal
const btns = document.getElementsByClassName('myBtn');

// Get the <span> element that closes the modal
const spans = document.getElementsByClassName('close');

for (let i = 0; i < btns.length; i += 1) {
  btns[i].addEventListener('click', () => {
    if (hasClickedModal === false) {
      hasClickedModal = true;
      modals[i].classList.add('show-modal');
    }
  });

  spans[i].addEventListener('click', () => {
    if (hasClickedModal === true) {
      hasClickedModal = false;
      modals[i].classList.remove('show-modal');
    }
  });
}

// for (let i = 0; i < btns.length; i += 1) {
//   btns[i].addEventListener('click', () => {
//     const hasClicked = modals[i].classList.contains('show-modal');
//     if (hasClicked) {
//       modals[i].classList.remove('show-modal');
//     } else {
//       modals[i].classList.add('show-modal');
//     }
//   });

//   spans[i].addEventListener('click', () => {
//     const hasClicked = modals[i].classList.contains('show-modal');
//     if (hasClicked) {
//       modals[i].classList.remove('show-modal');
//     } else {
//       modals[i].classList.add('show-modal');
//     }
//   });
// }
