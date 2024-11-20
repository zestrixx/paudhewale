document.addEventListener('DOMContentLoaded', function() {
    var supportIcon = document.getElementById('addon-support-icon');
    var tooltip = document.getElementById('addon-tooltip');
    var isTooltipVisible = false;

    supportIcon.addEventListener('click', toggleTooltip);
    
    document.addEventListener('click', function(event) {
        if (!supportIcon.contains(event.target)) {
            tooltip.style.display = 'none';
            isTooltipVisible = false;
        }
    });

    document.addEventListener('touchstart', function(event) {
        if (!supportIcon.contains(event.target)) {
            tooltip.style.display = 'none';
            isTooltipVisible = false;
        }
    });

    tooltip.addEventListener('click', function(event) {
        event.stopPropagation();
    });

    tooltip.addEventListener('touchstart', function(event) {
        event.stopPropagation();
    });

    supportIcon.addEventListener('mouseover', function() {
        tooltip.style.display = 'flex';
        tooltip.style.flexDirection = 'column';
    });

    supportIcon.addEventListener('mouseleave', hideTooltip);

    function toggleTooltip(event) {
        event.stopPropagation();
        isTooltipVisible = !isTooltipVisible;
        tooltip.style.display = isTooltipVisible ? 'flex' : 'none';
        tooltip.style.flexDirection = 'column';
    }

    function hideTooltip() {
        if (!isTooltipVisible) {
            tooltip.style.display = 'none';
        }
    }
});



// * vue js code
// $scope.initSupportIcon = function () {
//     $scope.supportIcon = document.getElementById('addon-support-icon');
//     $scope.tooltip = document.getElementById('addon-tooltip');
//     $scope.supportIcon.addEventListener('click', toggleTooltip);
//     $scope.supportIcon.addEventListener('mouseover', showTooltip);
//     $scope.supportIcon.addEventListener('mouseleave', hideTooltip);
//     $scope.tooltip.addEventListener('click', function(event) { event.stopPropagation(); });
//     $scope.tooltip.addEventListener('touchstart', function(event) { event.stopPropagation(); });
//     document.addEventListener('click', handleDocClick);
// };

// $scope.isTooltipVisible = false;

// function toggleTooltip(e) {
//     e.stopPropagation();
//     $scope.isTooltipVisible = !$scope.isTooltipVisible;
//     $scope.tooltip.style.display = $scope.isTooltipVisible ? 'flex' : 'none';
//     $scope.tooltip.style.flexDirection = 'column';
// }

// function handleDocClick(e){
//     if (!$scope.supportIcon.contains(e.target)) {
//         $scope.tooltip.style.display = 'none';
//         $scope.isTooltipVisible = false;
//     }
// }

// function showTooltip() {
//     $scope.tooltip.style.display = 'flex';
//     $scope.tooltip.style.flexDirection = 'column';
// }

// function hideTooltip() { 
//     if (!$scope.isTooltipVisible) { 
//         $scope.tooltip.style.display = 'none'; 
//     } 
// }

// setTimeout($scope.initSupportIcon, 1100);




