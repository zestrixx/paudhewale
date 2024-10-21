const selectors = document.getElementsByTagName("svg");

selectors[1].addEventListener("click", () => {
    selectors[0].classList.remove("disabled");
    if (selectors[1].className !== "disabled") {
        let productContainer = document.getElementById("product-container");
        console.log(productContainer.dataset.position)
        if (productContainer.dataset.position > -1250) {
            productContainer.dataset.position =
                parseInt(productContainer.dataset.position) - 270;
            if (productContainer.dataset.position == -1250) {
                selectors[1].classList.add("disabled");
            }
            productContainer.style.left = `${productContainer.dataset.position}px`;
        }
    }
});

selectors[0].addEventListener("click", () => {
    let productContainer = document.getElementById("product-container");
    console.log(productContainer.dataset.position)
    if (selectors[0].className !== "disabled") {
        if (productContainer.dataset.position < 20) {
            productContainer.dataset.position =
                parseInt(productContainer.dataset.position) + 270;
            if (productContainer.dataset.position == 20) {
                selectors[0].classList.add("disabled");
            }
            productContainer.style.left = `${productContainer.dataset.position}px`;
            if (productContainer.dataset.position > -1250) {
                selectors[1].classList.remove("disabled");
            }
        }
    }
});
