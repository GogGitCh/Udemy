//// My try -----------------------------------------------------------------------------------

const header = document.querySelector("header");
const beginAddMovieBtn = header.querySelector("button");
// const body = document.body;
// const addModalCard = document.getElementById("add-modal");
// const backdropEl = document.getElementById('backdrop');
// const modalCardBttons = document.getElementsByClassName('modal__actions');
// const modalCancelButton = modalCardBttons[0].getElementsByClassName('btn btn--passive');
// const modalAddButton = modalCardBttons[0].getElementsByClassName('btn btn--success');
// // console.log(beginAddMovieBtn);
// // console.log(body);
// // console.log(addModalCard);
// console.log(modalAddButton);

// const cancelSelector = () => {
//     backdropEl.classList.toggle('backdrop');
//     addModalCard.classList.toggle('modal');

// }
// const backdropToggle = () => {
//     backdropEl.classList.toggle('visible');
// }

// beginAddMovieBtn.addEventListener("click", () => {
//   addModalCard.classList.toggle('visible');
//   backdropToggle();
// });

// modalCancelButton.addEventListener("click", cancelSelector);


//// My try -----------------------------------------------------------------------------------

//// the teachers code ========================================================================

const addMovieModal = document.getElementById("add-modal");
// const addMovieModal = document.querySelector("#add-modal");
// const addMovieModal = document.body.children[1];

const startAddMovieModal = document.querySelector("header");
//  const startAddMovieModal = document.querySelector("header").lastElementChild;
const backdrop = document.getElementById("backdrop");
const cancelAddMovieButton = addMovieModal.querySelector(".btn--passive");
// console.log(cancelAddMovieButton);

const toggleBackdrop = () =>{
    backdrop.classList.toggle('visible');
}
const toggleMovieModal = () => {
    addMovieModal.classList.toggle('visible');
    toggleBackdrop();
}
const backdropClickHandler = () => {
    toggleMovieModal();
}
const cancelAddMovie = () => {
    toggleMovieModal();
}

startAddMovieModal.addEventListener("click", toggleMovieModal);
backdrop.addEventListener("click", backdropClickHandler);
cancelAddMovieButton.addEventListener("click", cancelAddMovie);

//// the teachers code ========================================================================
