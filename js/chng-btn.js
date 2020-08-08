// function backgroundColor(){
//     document.body.style.backgroundColor = "green";
//   }
//   open.addEventListener('click', backgroundColor);

  document.querySelectorAll('.colors').forEach((button) => button.addEventListener('click', colorButtonPressed));

  function colorButtonPressed(ev){
    const color = ev.target.innerText;
    if (document.body.style.backgroundColor === color.toLowerCase()){
        document.body.style.backgroundColor = "pink";
      } else {
        document.body.style.backgroundColor = color;
      }
  }
