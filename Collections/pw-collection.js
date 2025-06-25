document.addEventListener('DOMContentLoaded', function () {
    // Horizontal scroll functionality for products
    const productsContainer = document.getElementById('productsContainer');
    const scrollRightBtn = document.getElementById('scrollRight');

    // Scroll right button functionality
    scrollRightBtn.addEventListener('click', function () {
        const scrollAmount = 280; // Width of product card + gap
        productsContainer.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });

    // Auto-hide scroll button when at the end
    productsContainer.addEventListener('scroll', function () {
        const maxScroll = productsContainer.scrollWidth - productsContainer.clientWidth;
        const currentScroll = productsContainer.scrollLeft;

        if (currentScroll >= maxScroll - 10) {
            scrollRightBtn.style.opacity = '0.5';
        } else {
            scrollRightBtn.style.opacity = '1';
        }
    });

    // Touch/swipe support for mobile
    let isDown = false;
    let startX;
    let scrollLeft;

    productsContainer.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - productsContainer.offsetLeft;
        scrollLeft = productsContainer.scrollLeft;
        productsContainer.style.cursor = 'grabbing';
    });

    productsContainer.addEventListener('mouseleave', () => {
        isDown = false;
        productsContainer.style.cursor = 'grab';
    });

    productsContainer.addEventListener('mouseup', () => {
        isDown = false;
        productsContainer.style.cursor = 'grab';
    });

    productsContainer.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - productsContainer.offsetLeft;
        const walk = (x - startX) * 2;
        productsContainer.scrollLeft = scrollLeft - walk;
    });

    // Wishlist functionality
    const wishlistBtns = document.querySelectorAll('.wishlist-btn');
    wishlistBtns.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.stopPropagation();
            if (this.textContent === '♡') {
                this.textContent = '♥';
                this.style.color = '#ff6b6b';
            } else {
                this.textContent = '♡';
                this.style.color = '#999';
            }
        });
    });

    // Add to cart functionality
    const cartBtns = document.querySelectorAll('.cart-btn');
    cartBtns.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.stopPropagation();
            // Add visual feedback
            this.style.background = '#ff6b6b';
            this.style.color = 'white';
            setTimeout(() => {
                this.style.background = 'white';
                this.style.color = '#ff6b6b';
            }, 200);

            // Here you would typically add the item to cart
            console.log('Added to cart');
        });
    });

    // Buy now functionality
    const buyNowBtns = document.querySelectorAll('.buy-now-btn');
    buyNowBtns.forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.stopPropagation();
            // Add visual feedback
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);

            // Here you would typically redirect to checkout
            console.log('Buy now clicked');
        });
    });

    // Category and electrical card click handlers
    const categoryCards = document.querySelectorAll('.pw-category-card, .electrical-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', function () {
            // Add visual feedback
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'translateY(-2px)';
            }, 150);

            // Here you would typically navigate to category page
            console.log('Category clicked:', this.querySelector('h4').textContent);
        });
    });

    // View All button functionality
    const viewAllBtns = document.querySelectorAll('.view-all-btn');
    viewAllBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            console.log('View all clicked for:', this.closest('.collection-section').querySelector('.section-title').textContent);
        });
    });

    // Smooth scroll behavior for better UX
    if (CSS.supports('scroll-behavior', 'smooth')) {
        document.documentElement.style.scrollBehavior = 'smooth';
    }
});