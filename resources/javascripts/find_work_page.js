const thumbnail_input = document.querySelector("#thumbnail_input");
var uploaded_image = "";

thumbnail_input.addEventListener("change", function () {
    // console.log(thumbnail_input.value);
    const reader = new FileReader();
    reader.addEventListener("load", function () {
        uploaded_image = reader.result;
        document.querySelector("#image_display").style.backgroundImage = `url(${uploaded_image})`
    })
    reader.readAsDataURL(this.files[0]);
})