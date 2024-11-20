document.addEventListener('DOMContentLoaded', function () {
    var supportIcon = document.getElementById('addon-support-icon');
    var tooltip = document.getElementById('addon-tooltip');
    var isTooltipVisible = false;

    supportIcon.addEventListener('click', function (event) {
        event.stopPropagation();
        isTooltipVisible = !isTooltipVisible;
        tooltip.style.display = isTooltipVisible ? 'flex' : 'none';
        tooltip.style.flexDirection = 'column';
    });

    document.addEventListener('click', function (event) {
        if (!supportIcon.contains(event.target)) {
            tooltip.style.display = 'none';
            isTooltipVisible = false;
        }
    });

    supportIcon.addEventListener('mouseover', function () {
        tooltip.style.display = 'flex';
    });

    supportIcon.addEventListener('mouseleave', function () {
        if (!isTooltipVisible) {
            tooltip.style.display = 'none';
        }
    });
});


// * vue js code
// $scope.initSupportIcon = function () {
//     $scope.supportIcon = document.getElementById('addon-support-icon');
//     $scope.tooltip = document.getElementById('addon-tooltip');
//     $scope.supportIcon.addEventListener('click', handleClick);
//     $scope.supportIcon.addEventListener('mouseover', handleMouseOver);
//     $scope.supportIcon.addEventListener('mouseleave', handleMouseLeave);
//     document.addEventListener('click', handleDocClick);
// };

// $scope.isTooltipVisible = false;

// function handleClick(e) {
//     e.stopPropagation();
//     $scope.isTooltipVisible = !$scope.isTooltipVisible;
//     $scope.tooltip.style.display = $scope.isTooltipVisible ? 'flex' : 'none';
//     $scope.tooltip.style.flexDirection = 'column';
// }

// function handleDocClick(e) {
//     if (!$scope.supportIcon.contains(e.target)) {
//         $scope.tooltip.style.display = 'none';
//         $scope.isTooltipVisible = false;
//     }
// }

// function handleMouseLeave() {
//     if (!$scope.isTooltipVisible) {
//         $scope.tooltip.style.display = 'none';
//     }
// }

// function handleMouseOver() {
//     $scope.tooltip.style.display = 'flex';
// }

// setTimeout($scope.initSupportIcon, 1100);




