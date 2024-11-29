const marqueeRoot = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(marqueeRoot).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content-icon");

marqueeRoot.style.setProperty("--marquee-elements", marqueeContent.children.length);

for (let i = 0; i < marqueeElementsDisplayed; i++) {
    marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}


//* vue js
// $scope.initMarqueeIcon = function(){
//     $scope.marqueeRoot = document.documentElement;
//     $scope.marqueeElementsDisplayed = getComputedStyle($scope.marqueeRoot).getPropertyValue("--marquee-elements-displayed");
//     $scope.marqueeContent = document.querySelector("ul.marquee-content-icon");

//     $scope.marqueeRoot.style.setProperty("--marquee-elements", $scope.marqueeContent.children.length);

//     for (let i = 0; i < $scope.marqueeElementsDisplayed; i++) {
//         $scope.marqueeContent.appendChild($scope.marqueeContent.children[i].cloneNode(true));
//     }
// }

// setTimeout($scope.initMarqueeIcon, 1100);