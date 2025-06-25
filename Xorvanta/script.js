document.addEventListener('DOMContentLoaded', function () {
    // Handle section collapse/expand
    const sectionHeaders = document.querySelectorAll('.section-header');
    sectionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const isCollapsed = content.classList.contains('collapsed');

            // Toggle chevron
            header.classList.toggle('collapsed');

            // Toggle content
            if (isCollapsed) {
                content.classList.remove('collapsed');
            } else {
                content.classList.add('collapsed');
            }
        });
    });

    // Handle category expansion
    const categoryHeaders = document.querySelectorAll('.category-header');
    categoryHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const subcategories = header.nextElementSibling;
            const plusIcon = header.querySelector('.plus-icon');

            // Toggle subcategories
            if (subcategories) {
                const isExpanded = subcategories.classList.contains('expanded');
                subcategories.classList.toggle('expanded');

                // Update plus/minus icon
                plusIcon.textContent = isExpanded ? '+' : '−';
            }
        });
    });

    // Handle sort dropdown
    const sortSelect = document.getElementById('sort-select');
    sortSelect.addEventListener('change', (e) => {
        const value = e.target.value;
        // Add sorting logic here
        console.log('Sorting by:', value);
    });

    // Handle wishlist buttons
    const wishlistButtons = document.querySelectorAll('.wishlist-btn');
    wishlistButtons.forEach(button => {
        button.addEventListener('click', () => {
            // button.textContent = button.textContent === '♡' ? '♥' : '♡';
            button.innerHTML = button.innerHTML === '<i class="fa-regular fa-heart"></i>' ? '<i class="fa-solid fa-heart" style="color: #ffc629">' : '<i class="fa-regular fa-heart"></i>';
        });
    });

    // Handle add to cart buttons
    const addButtons = document.querySelectorAll('.add-btn');
    addButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Add to cart logic here
            console.log('Added to cart');
        });
    });
});