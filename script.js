const filterItem = document.querySelector(".items"),
filterImg = document.querySelectorAll(".image"),
modalBox = document.querySelector(".modal-box"),
previewBox = document.querySelector(".preview-box"),
closeModal = document.querySelector(".details .icon"),
categoryName = document.querySelector(".details .title span"),
imgModalBox = document.querySelector(".preview-box .image-box img");



window.addEventListener("load", function () {
  /* ======= Show/hide images when click filter button =============== */
  filterItem.addEventListener("click", function (selectedItem) {
    if (selectedItem.target.classList.contains("item")) {
      filterItem.querySelector(".active").classList.remove("active");
      selectedItem.target.classList.add("active");
      let filterName = selectedItem.target.getAttribute("data-name");
      
      filterImg.forEach((img) => {
        let filterImage = img.getAttribute("data-name");
        if(filterImage === filterName || filterName == "all") {
          img.classList.remove("hide");
          img.classList.add("show");
        } else {
          img.classList.add("hide");
          img.classList.remove("show");
        }
      })
    }
  });
  
  filterImg.forEach(function (img) {
    img.setAttribute("onclick", "preview(this)");
  });

});


// preview function
function preview (image) {
  // get src image and apply to preview image and title
  imgModalBox.src = image.querySelector("img").src;
  categoryName.innerText = image.getAttribute("data-name");

  modalBox.classList.add("show");
  previewBox.classList.add("show");
  
  closeModal.addEventListener("click", function () {
    modalBox.classList.remove("show");
    previewBox.classList.remove("show");
  });
}



