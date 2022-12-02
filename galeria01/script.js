const fulImgBox = document.getElementById("fulImgBox");
fulImgBox = document.getElementById("fulImg");

//abri la imagen que se selecciono en grande
function openFulImg(reference){
    fulImgBox.style.display = "flex";
    fulImg.src = reference
}

//desparecer la imagen grande
function closeImg() {
    fulImgBox.style.display = "none";  //para que desaparesca la imagen grande seleccionada
}

