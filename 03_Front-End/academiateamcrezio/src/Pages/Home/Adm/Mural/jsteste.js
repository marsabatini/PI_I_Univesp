const imageInput = document.querySelector("[data-image-input]");
const imagePreview = document.querySelector ("[data-image-preview]")

imageInput.onchange = () => {
    const [file] = imageInput.files;
    imagePreview.src = URL.createObjectURL (file)
}
