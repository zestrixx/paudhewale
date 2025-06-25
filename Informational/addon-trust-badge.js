// Get DOM elements

const pwInfoBadge = document.getElementById('pwInfoBadge');
const pwGiftBadge = document.getElementById('pwGiftBadge');
const pwInfoBadgeModal = document.getElementById('pwInfoBadgeModal');
const pwGiftBadgeModal = document.getElementById('pwGiftBadgeModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const closeGiftModalBtn = document.getElementById('closeGiftModalBtn');
const okBtn = document.getElementById('okBtn');
const okGiftBtn = document.getElementById('okGiftBtn');

// Function to open modal
function openModal() {
    pwInfoBadgeModal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
}
// Function to open modal
function openGiftModal() {
    pwGiftBadgeModal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
}

// Function to close modal
function closeModal() {
    pwInfoBadgeModal.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
}
// Function to close modal
function closeGiftModal() {
    pwGiftBadgeModal.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
}

// Event listeners
pwInfoBadge.addEventListener('click', openModal);
pwGiftBadge.addEventListener('click', openGiftModal);
closeModalBtn.addEventListener('click', closeModal);
closeGiftModalBtn.addEventListener('click', closeGiftModal);
okBtn.addEventListener('click', closeModal);
okGiftBtn.addEventListener('click', closeGiftModal);

// Close modal when clicking outside
pwInfoBadgeModal.addEventListener('click', function (event) {
    if (event.target === pwInfoBadgeModal) {
        closeModal();
    }
});
// Close modal when clicking outside
pwGiftBadgeModal.addEventListener('click', function (event) {
    if (event.target === pwGiftBadgeModal) {
        closeGiftModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && pwInfoBadgeModal.classList.contains('active')) {
        closeModal();
    }
});
// Close modal with Escape key
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && pwGiftBadgeModal.classList.contains('active')) {
        closeGiftModal();
    }
});