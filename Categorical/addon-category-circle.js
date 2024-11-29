// vue js

$scope.initScroll = function () {
    $scope.slider = document.querySelector('.addon-cc-circles');
    $scope.slider.addEventListener('mousedown', handleMouseDown);
    $scope.slider.addEventListener('mouseleave', handleMouseLeave);
    $scope.slider.addEventListener('mouseup', handleMouseUp);
    $scope.slider.addEventListener('mousemove', handleMouseMove);
};

$scope.startX = 0;
$scope.scrollLeft = 0;
$scope.isDown = false;
$scope.isTouching = false;

function handleMouseDown(e) {
    e.preventDefault();
    $scope.isDown = true;
    $scope.startX = e.pageX - $scope.slider.offsetLeft;
    $scope.scrollLeft = $scope.slider.scrollLeft;
}

function handleMouseLeave() {
    $scope.isDown = false;
}

function handleMouseUp() {
    $scope.isDown = false;
}

function handleMouseMove(e) {
    if (!$scope.isDown) return;
    e.preventDefault();
    const x = e.pageX - $scope.slider.offsetLeft;
    const walk = (x - $scope.startX) * 3;
    $scope.slider.scrollLeft = $scope.scrollLeft - walk;
}


// Initialize scroll functionality after items are loaded
setTimeout($scope.initScroll, 1100);





