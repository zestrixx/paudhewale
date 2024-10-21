const slider = document.querySelector('.tc-product-grid');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    e.preventDefault();
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
});

slider.addEventListener('mouseup', () => {
    isDown = false;
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
});

slider.addEventListener('touchstart', (e) => {
    isDown = true;
    startX = e.touches[0].pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('touchend', () => {
    isDown = false;
});

slider.addEventListener('touchmove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.touches[0].pageX - slider.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
});


// * vue js way 1 starts
// $scope.items = $ref([]);
// $scope.loading = $ref(true);

// setTimeout(function () {
//     $scope.items.push(
//         { img: "https://www.dhresource.com/webp/m/0x0/f2/albu/g18/M00/F4/37/rBNaNmGvLxmAbOoDAAGYuv2Skos478.jpg", name: "Product 1" },
//         { img: "https://www.egiftmart.com/uploaded_files/itempic/plants-1.jpg", name: "Product 2" },
//         { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmbKZCD1flNGN9WNhGcoCxLHpK2DBRgZbzDQguVoUgB6pEnxA6VHa0mmx4B1iBjXkAKlA&usqp=CAU", name: "Product 3" },
//         { img: "https://m.media-amazon.com/images/I/41hmBo2bSgL._AC_UF894,1000_QL80_.jpg", name: "Product 4" }
//     );
//     $scope.loading.value = false;
// }, 1000);

// $scope.initScroll = function () {
//     $scope.slider = document.querySelector('.tc-product-grid');
// };

// $scope.startX = 0;
// $scope.scrollLeft = 0;
// $scope.isDown = false;

// $scope.handleMouseDown = function (e) {
//     e.preventDefault();
//     $scope.isDown = true;
//     $scope.startX = e.pageX - $scope.slider.offsetLeft;
//     $scope.scrollLeft = $scope.slider.scrollLeft;
// };

// $scope.handleMouseLeave = function () {
//     $scope.isDown = false;
// };

// $scope.handleMouseUp = function () {
//     $scope.isDown = false;
// };

// $scope.handleMouseMove = function (e) {
//     if (!$scope.isDown) return;
//     e.preventDefault();
//     const x = e.pageX - $scope.slider.offsetLeft;
//     const walk = (x - $scope.startX) * 3; //scroll-fast
//     $scope.slider.scrollLeft = $scope.scrollLeft - walk;
// };

// setTimeout($scope.initScroll, 1100);
// * vue js way 1 ends

// * vue js way 2 starts
// $scope.items = $ref([]);
// $scope.loading = $ref(true);

// setTimeout(function () {
//     $scope.items.push(
//         { img: "https://www.dhresource.com/webp/m/0x0/f2/albu/g18/M00/F4/37/rBNaNmGvLxmAbOoDAAGYuv2Skos478.jpg", name: "Product 1" },
//         { img: "https://www.egiftmart.com/uploaded_files/itempic/plants-1.jpg", name: "Product 2" },
//         { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmbKZCD1flNGN9WNhGcoCxLHpK2DBRgZbzDQguVoUgB6pEnxA6VHa0mmx4B1iBjXkAKlA&usqp=CAU", name: "Product 3" },
//         { img: "https://m.media-amazon.com/images/I/41hmBo2bSgL._AC_UF894,1000_QL80_.jpg", name: "Product 4" }
//     );
//     $scope.loading.value = false;
// }, 1000);

// $scope.initScroll = function () {
//     $scope.slider = document.querySelector('.tc-product-grid');
//     $scope.slider.addEventListener('mousedown', handleMouseDown);
//     $scope.slider.addEventListener('mouseleave', handleMouseLeave);
//     $scope.slider.addEventListener('mouseup', handleMouseUp);
//     $scope.slider.addEventListener('mousemove', handleMouseMove);
// };

// $scope.startX = 0;
// $scope.scrollLeft = 0;
// $scope.isDown = false;

// function handleMouseDown(e) {
//     e.preventDefault();
//     $scope.isDown = true;
//     $scope.startX = e.pageX - $scope.slider.offsetLeft;
//     $scope.scrollLeft = $scope.slider.scrollLeft;
// }

// function handleMouseLeave() {
//     $scope.isDown = false;
// }

// function handleMouseUp() {
//     $scope.isDown = false;
// }

// function handleMouseMove(e) {
//     if (!$scope.isDown) return;
//     e.preventDefault();
//     const x = e.pageX - $scope.slider.offsetLeft;
//     const walk = (x - $scope.startX) * 3;
//     $scope.slider.scrollLeft = $scope.scrollLeft - walk;
// }

// setTimeout($scope.initScroll, 1100);
// * vue js way 2 ends