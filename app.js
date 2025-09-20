// ==============================================================
// APPLICATION STATE & CONFIGURATION
// ==============================================================

const AppState = {
    cart: JSON.parse(localStorage.getItem('cart')) || [],
    currentFilter: 'all',
    currentCurrency: 'GBP',
    isLoading: false,
    stripe: null,
    elements: null,
    mobileMenuOpen: false
};

// Currency conversion rates (update these from an API)
const CURRENCY_RATES = {
    GBP: 1,
    USD: 1.27,
    EUR: 1.17
};

// Stripe configuration (use your test keys)
const STRIPE_PUBLIC_KEY = 'pk_test_51234567890'; // Replace with your Stripe public key

// ==============================================================
// ENHANCED PAINTING DATA
// ==============================================================

const PAINTINGS_DATA = [
    {
        id: 1,
        title: "I've Found It",
        year: 2022,
        price: 769,
        medium: "Oil on handmade Canvas",
        size: "100 × 100 cm",
        category: "clouds",
        description: "Inspired by drifting skies and soft cloud formations, this piece captures the stillness and serenity of the atmosphere. Each brushstroke reflects the calm yet ever-changing beauty of the clouds above.",
        status: "available",
        featured: true,
        image: "painting1.jpg"
    },
    {
        id: 2,
        title: "Bliss",
        year: 2019,
        medium: "Oil on Canvas",
        size: "50 × 50 cm",
        category: "clouds",
        description: "A gentle study of light and form in the sky, evoking calm and peaceful reflection. The soft hues and delicate textures create a feeling of quiet peace.",
        status: "sold",
        featured: true,
        image: "painting2.jpg"
    },
    {
        id: 3,
        title: "European Women's Championship",
        subtitle: "July 31st 2022",
        year: 2022,
        price: 778,
        medium: "Oil on handmade Canvas",
        size: "115 × 115 cm",
        category: "clouds",
        description: "Painted from the cloud formations present on the day of the European Women's Championship Final, this piece commemorates a historic sporting event under a timeless sky.",
        status: "available",
        image: "painting3.jpg"
    },
    {
        id: 4,
        title: "I'll Look Up Forever",
        year: 2021,
        price: 494,
        medium: "Oil on handmade Canvas",
        size: "40 × 40 cm",
        category: "clouds",
        description: "This smaller work captures the wonder of gazing skyward, where clouds tell endless stories in shape and colour.",
        status: "available",
        featured: true,
        image: "painting4.jpg"
    },
    {
        id: 5,
        title: "We Can Only Hope",
        year: 2019,
        price: 366,
        medium: "Oil on Canvas",
        size: "40 × 40 cm",
        category: "clouds",
        description: "Soft yet powerful, this piece reflects hopefulness against an ever-changing environment and the planet we reside on.",
        status: "available",
        image: "painting5.jpg"
    },
    {
        id: 6,
        title: "Find Me the Moon",
        year: 2022,
        price: 875,
        medium: "Oil on handmade Canvas",
        size: "100 × 100 cm",
        category: "stars",
        description: "A celestial map of the night sky, painted to reflect space in its luminous beauty. The work captures a moment in time when starlight and the surrounding darkness of space are aligned in perfect harmony.",
        status: "available",
        image: "painting6.jpg"
    },
    {
        id: 7,
        title: "Storm André",
        year: 2020,
        price: 725,
        medium: "Oil on handmade Canvas",
        size: "50 × 50 cm",
        category: "disasters",
        description: "January 2019 brought Storm André to Europe, killing 14 people and damaging countless homes. This painting evokes the fierce energy of the skies during the storm.",
        status: "available",
        image: "painting7.jpg"
    },
    {
        id: 8,
        title: "Mount Lamington",
        year: 2020,
        price: 725,
        medium: "Oil on handmade Canvas",
        size: "50 × 50 cm",
        category: "disasters",
        description: "Inspired by the 1951 eruption in Papua New Guinea that killed over 3,000 people, this piece portrays the ominous beauty and power of volcanic activity.",
        status: "available",
        image: "painting8.jpg"
    },
    {
        id: 9,
        title: "Australian Fires",
        year: 2020,
        price: 769,
        medium: "Oil on handmade Canvas",
        size: "50 × 50 cm",
        category: "disasters",
        description: "Painted in response to the record-breaking fires of 2019–20, which killed over 25 people, destroyed 46 million acres, and wiped out over 1 billion animals.",
        status: "available",
        image: "painting9.jpg"
    },
    {
        id: 10,
        title: "I Can't Lift My Head",
        year: 2021,
        price: 459,
        medium: "Oil on handmade Canvas",
        size: "40 × 40 cm",
        category: "landscapes",
        description: "A cave inspired painting that explores shadow, depth, and texture. The earthy tones and layered brushwork evoke the feeling of looking up from within a hidden space.",
        status: "available",
        image: "painting10.jpg"
    },
    {
        id: 11,
        title: "Contrasting Waves",
        year: 2017,
        price: 219,
        medium: "Acrylic on Canvas",
        size: "42 × 61.5 cm",
        category: "landscapes",
        description: "A vivid study of the meeting point between chaos and calm. Sweeping, energetic strokes capture the restless movement of waves.",
        status: "available",
        image: "painting11.jpg"
    },
    {
        id: 12,
        title: "Untitled",
        year: 2019,
        price: 120,
        medium: "Acrylic, Chalk, and Graphite on Fabriano Accademia Paper – 200gsm",
        size: "50 × 70 cm",
        category: "drawings",
        description: "A spontaneous composition where acrylic washes merge with the raw texture of chalk and the precision of graphite lines.",
        status: "available",
        image: "painting12.jpg"
    },
    {
        id: 13,
        title: "Charles Darwin",
        subtitle: "24th November 1859",
        year: 2022,
        price: 1115,
        medium: "Oil on handmade Canvas",
        size: "120 × 120 cm",
        category: "historical",
        description: "This work charts the stars on the day Charles Darwin published On the Origin of Species, a moment that reshaped humanity's understanding of life itself.",
        status: "available",
        hasReadMore: true,
        image: "painting13.jpg"
    },
    {
        id: 14,
        title: "Emily Davison",
        subtitle: "4th June 1913",
        year: 2022,
        price: 900,
        medium: "Oil on handmade Canvas",
        size: "120 × 120 cm",
        category: "historical",
        description: "Painted from the cloud formations present when suffragette Emily Davison stepped onto the racetrack at the Epsom Derby, this work honours a defining act of courage.",
        status: "available",
        hasReadMore: true,
        image: "painting14.jpg"
    },
    {
        id: 15,
        title: "Stonewall Riots",
        subtitle: "27th June 1969",
        year: 2022,
        price: 959,
        medium: "Oil on handmade Canvas",
        size: "120 × 120 cm",
        category: "historical",
        description: "Painted from the star chart above New York City on the night the Stonewall Riots began, this work commemorates a pivotal moment in LGBTQ+ history.",
        status: "available",
        hasReadMore: true,
        image: "painting15.jpg"
    }
];

// ==============================================================
// UTILITY FUNCTIONS
// ==============================================================

function formatPrice(price, currency = AppState.currentCurrency) {
    const convertedPrice = Math.round(price * CURRENCY_RATES[currency]);
    const symbol = {
        GBP: '£',
        USD: '$',
        EUR: '€'
    };
    return `${symbol[currency]}${convertedPrice.toLocaleString()}`;
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
        <span>${message}</span>
    `;

    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '16px 24px',
        borderRadius: '12px',
        color: 'white',
        fontWeight: '500',
        zIndex: '10001',
        transform: 'translateX(100%)',
        transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        background: type === 'success' ? 'linear-gradient(135deg, #10b981, #34d399)' : 
                   type === 'error' ? 'linear-gradient(135deg, #ef4444, #f87171)' : 
                   'linear-gradient(135deg, #3b82f6, #60a5fa)',
        boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        minWidth: '300px'
    });

    document.body.appendChild(notification);

    requestAnimationFrame(() => {
        notification.style.transform = 'translateX(0)';
    });

    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 4000);
}

// ==============================================================
// ENHANCED CART FUNCTIONALITY
// ==============================================================

class Cart {
    static add(paintingId) {
        const painting = PAINTINGS_DATA.find(p => p.id === paintingId);
        if (!painting || painting.status !== 'available') {
            showNotification('This painting is not available for purchase', 'error');
            return;
        }

        const existingItem = AppState.cart.find(item => item.id === paintingId);
        if (existingItem) {
            showNotification(`"${painting.title}" is already in your cart`, 'info');
            return;
        }

        AppState.cart.push({
            id: paintingId,
            title: painting.title,
            price: painting.price,
            image: painting.image,
            quantity: 1,
            size: painting.size,
            year: painting.year
        });

        this.save();
        this.updateUI();
        showNotification(`"${painting.title}" added to cart`, 'success');

        // Add animation effect to cart button
        const cartBtn = document.getElementById('cart-toggle');
        if (cartBtn) {
            cartBtn.style.transform = 'scale(1.1)';
            setTimeout(() => cartBtn.style.transform = '', 200);
        }
    }

    static remove(paintingId) {
        const item = AppState.cart.find(item => item.id === paintingId);
        AppState.cart = AppState.cart.filter(item => item.id !== paintingId);
        this.save();
        this.updateUI();

        if (item) {
            showNotification(`"${item.title}" removed from cart`, 'info');
        }
    }

    static updateQuantity(paintingId, quantity) {
        const item = AppState.cart.find(item => item.id === paintingId);
        if (item) {
            item.quantity = Math.max(1, Math.min(10, quantity));
            this.save();
            this.updateUI();
        }
    }

    static clear() {
        AppState.cart = [];
        this.save();
        this.updateUI();
        showNotification('Cart cleared', 'info');
    }

    static getTotal() {
        return AppState.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    static getItemCount() {
        return AppState.cart.reduce((count, item) => count + item.quantity, 0);
    }

    static save() {
        localStorage.setItem('cart', JSON.stringify(AppState.cart));
    }

    static updateUI() {
        this.updateCartCount();
        this.updateCartSidebar();
    }

    static updateCartCount() {
        const cartCounts = document.querySelectorAll('.cart-count');
        const itemCount = this.getItemCount();

        cartCounts.forEach(cartCount => {
            if (cartCount) {
                cartCount.textContent = itemCount;
                cartCount.style.display = itemCount > 0 ? 'flex' : 'none';
            }
        });
    }

    static updateCartSidebar() {
        const cartItems = document.getElementById('cart-items');
        const cartTotal = document.getElementById('cart-total');

        if (!cartItems || !cartTotal) return;

        if (AppState.cart.length === 0) {
            cartItems.innerHTML = `
                <div class="empty-cart">
                    <i class="fas fa-shopping-cart"></i>
                    <p>Your cart is empty</p>
                    <p class="cart-subtitle">Add some beautiful artwork!</p>
                </div>
            `;
            cartTotal.textContent = formatPrice(0);
            return;
        }

        cartItems.innerHTML = AppState.cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.title}" onerror="this.style.display='none'">
                </div>
                <div class="cart-item-details">
                    <div class="cart-item-title">${item.title}</div>
                    <div class="cart-item-meta">
                        <small><i class="fas fa-calendar"></i> ${item.year} • <i class="fas fa-ruler"></i> ${item.size}</small>
                    </div>
                    <div class="cart-item-price">${formatPrice(item.price)}</div>
                    <div class="quantity-controls">
                        <label>Qty:</label>
                        <button onclick="Cart.updateQuantity(${item.id}, ${item.quantity - 1})" ${item.quantity <= 1 ? 'disabled' : ''}>
                            <i class="fas fa-minus"></i>
                        </button>
                        <span class="quantity">${item.quantity}</span>
                        <button onclick="Cart.updateQuantity(${item.id}, ${item.quantity + 1})" ${item.quantity >= 10 ? 'disabled' : ''}>
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
                <button class="cart-item-remove" onclick="Cart.remove(${item.id})" title="Remove item">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `).join('');

        cartTotal.textContent = formatPrice(this.getTotal());
    }

    static toggle() {
        const cartSidebar = document.getElementById('cart-sidebar');
        if (cartSidebar) {
            cartSidebar.classList.toggle('active');

            // Close mobile menu if open
            if (cartSidebar.classList.contains('active')) {
                MobileMenu.close();
            }
        }
    }
}

// ==============================================================
// ENHANCED MODAL FUNCTIONALITY
// ==============================================================

class Modal {
    static open(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';

            // Focus trap
            const focusableElements = modal.querySelectorAll('button, input, select, textarea, a[href]');
            if (focusableElements.length > 0) {
                focusableElements[0].focus();
            }
        }
    }

    static close(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    static closeAll() {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            modal.classList.remove('active');
        });
        document.body.style.overflow = '';
    }
}

// ==============================================================
// ENHANCED PRODUCT DISPLAY FUNCTIONALITY
// ==============================================================

class ProductDisplay {
    static showProduct(paintingId) {
        const painting = PAINTINGS_DATA.find(p => p.id === paintingId);
        if (!painting) return;

        const modalBody = document.getElementById('product-modal-body');
        if (!modalBody) return;

        modalBody.innerHTML = `
            <div class="product-modal-grid">
                <div class="product-image-section">
                    <div class="product-main-image">
                        <img src="${painting.image}" alt="${painting.title}" class="main-product-image" 
                             onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
                        <div class="product-image-placeholder">
                            <i class="fas fa-image"></i>
                            <span>Add ${painting.title} Image</span>
                            <p>${painting.image}</p>
                        </div>
                        <div class="status-badge status-${painting.status}">${painting.status}</div>
                    </div>
                    <div class="product-thumbnails">
                        <div class="thumbnail active">
                            <img src="${painting.image}" alt="${painting.title}">
                        </div>
                        <div class="thumbnail-placeholder">
                            <i class="fas fa-plus"></i>
                            <span>More Views</span>
                        </div>
                    </div>
                </div>
                <div class="product-details-section">
                    <div class="product-header">
                        <h2>${painting.title}</h2>
                        ${painting.subtitle ? `<p class="product-subtitle">${painting.subtitle}</p>` : ''}
                        <div class="product-meta">
                            <span><i class="fas fa-calendar"></i> ${painting.year}</span>
                            <span><i class="fas fa-palette"></i> ${painting.medium}</span>
                            <span><i class="fas fa-ruler"></i> ${painting.size}</span>
                            <span><i class="fas fa-tag"></i> ${painting.category}</span>
                        </div>
                    </div>

                    <div class="product-description">
                        <h3>About This Piece</h3>
                        <p>${painting.description}</p>
                        ${painting.hasReadMore ? '<button class="read-more-btn">Read Full Story <i class="fas fa-chevron-down"></i></button>' : ''}
                    </div>

                    ${painting.status === 'available' && painting.price ? `
                        <div class="product-pricing">
                            <div class="price-display">
                                <span class="current-price">${formatPrice(painting.price)}</span>
                                <span class="price-note">Original artwork</span>
                            </div>
                            <div class="shipping-info">
                                <i class="fas fa-truck"></i>
                                <span>Free worldwide shipping • Secure packaging • Certificate of authenticity included</span>
                            </div>
                        </div>

                        <div class="product-actions">
                            <button class="btn btn--primary btn-large" onclick="Cart.add(${painting.id}); Modal.close('product-modal')">
                                <i class="fas fa-cart-plus"></i> Add to Cart
                            </button>
                            <button class="btn btn--secondary btn-large" onclick="Checkout.buyNow(${painting.id})">
                                <i class="fas fa-bolt"></i> Buy Now
                            </button>
                            <button class="btn btn--outline" onclick="shareProduct(${painting.id})">
                                <i class="fas fa-share"></i> Share
                            </button>
                        </div>
                    ` : `
                        <div class="sold-notice">
                            <i class="fas fa-check-circle"></i>
                            <div>
                                <h3>This painting has been sold</h3>
                                <p>This original artwork has found its forever home. Explore similar pieces or commission a custom painting.</p>
                                <button class="btn btn--primary" onclick="Modal.close('product-modal'); window.location.href='contact.html'">
                                    Commission Similar Piece
                                </button>
                            </div>
                        </div>
                    `}

                    <div class="product-guarantees">
                        <div class="guarantee-item">
                            <i class="fas fa-award"></i>
                            <span>Authenticity Guaranteed</span>
                        </div>
                        <div class="guarantee-item">
                            <i class="fas fa-undo"></i>
                            <span>30-Day Return Policy</span>
                        </div>
                        <div class="guarantee-item">
                            <i class="fas fa-shield-alt"></i>
                            <span>Secure Payment</span>
                        </div>
                        <div class="guarantee-item">
                            <i class="fas fa-certificate"></i>
                            <span>Certificate Included</span>
                        </div>
                    </div>
                </div>
            </div>
        `;

        Modal.open('product-modal');
    }
}

// ==============================================================
// ENHANCED FILTERING & DISPLAY
// ==============================================================

class FilterDisplay {
    static applyFilter(category) {
        AppState.currentFilter = category;

        // Update filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.filter === category);
        });

        // Filter paintings
        const filteredPaintings = category === 'all' 
            ? PAINTINGS_DATA 
            : PAINTINGS_DATA.filter(p => p.category === category);

        // Update display with animation
        this.updateDisplayWithAnimation(filteredPaintings);

        // Update stats
        this.updateStats();
    }

    static updateDisplayWithAnimation(paintings) {
        const shopGrid = document.getElementById('shop-grid');
        const galleryGrid = document.getElementById('gallery-grid');

        if (shopGrid) {
            this.animateGridUpdate(shopGrid, () => {
                shopGrid.innerHTML = paintings.map(painting => this.createShopCard(painting)).join('');
            });
        }

        if (galleryGrid) {
            this.animateGridUpdate(galleryGrid, () => {
                galleryGrid.innerHTML = paintings.map(painting => this.createGalleryCard(painting)).join('');
            });
        }
    }

    static animateGridUpdate(grid, updateFunction) {
        grid.style.opacity = '0.6';
        grid.style.transform = 'scale(0.98)';

        setTimeout(() => {
            updateFunction();
            grid.style.opacity = '1';
            grid.style.transform = 'scale(1)';
        }, 150);
    }

    static createShopCard(painting) {
        return `
            <div class="shop-card fade-in" data-category="${painting.category}">
                <div class="card-image-wrapper">
                    <div class="card-image">
                        <img src="${painting.image}" alt="${painting.title}" class="painting-image" 
                             onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
                        <div class="image-placeholder">
                            <i class="fas fa-image"></i>
                            <span>Add Your Image Here</span>
                            <p>${painting.image}</p>
                        </div>
                        <div class="status-badge status-${painting.status}">${painting.status}</div>
                        <div class="hover-overlay">
                            <button class="quick-view-btn" onclick="ProductDisplay.showProduct(${painting.id})">
                                <i class="fas fa-eye"></i> Quick View
                            </button>
                        </div>
                    </div>
                </div>
                <div class="card-content">
                    <div class="card-category">
                        <i class="fas fa-${this.getCategoryIcon(painting.category)}"></i> 
                        ${painting.category.charAt(0).toUpperCase() + painting.category.slice(1)}
                    </div>
                    <h3 class="card-title">${painting.title}</h3>
                    ${painting.subtitle ? `<p class="card-subtitle">${painting.subtitle}</p>` : ''}
                    <div class="card-meta">
                        <span><i class="fas fa-calendar"></i> ${painting.year}</span>
                        <span><i class="fas fa-ruler"></i> ${painting.size}</span>
                    </div>
                    <p class="card-description">${painting.description}</p>
                    ${painting.status === 'available' && painting.price ? `
                        <div class="card-price">
                            <span class="price">${formatPrice(painting.price)}</span>
                            <span class="price-label">Original</span>
                        </div>
                        <div class="card-actions">
                            <button class="btn btn--primary add-to-cart-btn" onclick="Cart.add(${painting.id})">
                                <i class="fas fa-cart-plus"></i> Add to Cart
                            </button>
                            <button class="btn btn--secondary buy-now-btn" onclick="Checkout.buyNow(${painting.id})">
                                <i class="fas fa-bolt"></i> Buy Now
                            </button>
                        </div>
                    ` : `
                        <div class="sold-banner">
                            <i class="fas fa-check-circle"></i>
                            <span>SOLD</span>
                        </div>
                    `}
                </div>
            </div>
        `;
    }

    static createGalleryCard(painting) {
        return `
            <div class="gallery-item fade-in" data-category="${painting.category}" onclick="ProductDisplay.showProduct(${painting.id})">
                <div class="gallery-image-wrapper">
                    <div class="gallery-image ${Math.random() > 0.7 ? 'tall' : ''}">
                        <img src="${painting.image}" alt="${painting.title}" class="painting-image" 
                             onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
                        <div class="image-placeholder">
                            <i class="fas fa-image"></i>
                            <span>Add Your Image</span>
                            <p>${painting.image}</p>
                        </div>
                        <div class="status-badge status-${painting.status}">${painting.status}</div>
                        <div class="gallery-overlay">
                            <div class="overlay-content">
                                <h4>${painting.title}</h4>
                                <p><i class="fas fa-calendar"></i> ${painting.year} • <i class="fas fa-${this.getCategoryIcon(painting.category)}"></i> ${painting.category}</p>
                                <div class="overlay-actions">
                                    <button class="overlay-btn" onclick="event.stopPropagation(); ProductDisplay.showProduct(${painting.id})">
                                        <i class="fas fa-eye"></i> View
                                    </button>
                                    ${painting.status === 'available' ? `
                                        <button class="overlay-btn" onclick="event.stopPropagation(); Cart.add(${painting.id})">
                                            <i class="fas fa-cart-plus"></i> Cart
                                        </button>
                                    ` : ''}
                                    <button class="overlay-btn" onclick="event.stopPropagation(); shareGalleryItem(${painting.id})">
                                        <i class="fas fa-share"></i> Share
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="gallery-info">
                    <h3 class="gallery-title">${painting.title}</h3>
                    <p class="gallery-meta">
                        <span><i class="fas fa-calendar"></i> ${painting.year}</span>
                        <span><i class="fas fa-ruler"></i> ${painting.size}</span>
                        ${painting.price ? `<span class="price"><i class="fas fa-tag"></i> ${formatPrice(painting.price)}</span>` : ''}
                    </p>
                </div>
            </div>
        `;
    }

    static getCategoryIcon(category) {
        const icons = {
            clouds: 'cloud',
            stars: 'star',
            disasters: 'bolt',
            landscapes: 'mountain',
            drawings: 'pencil-alt',
            historical: 'landmark'
        };
        return icons[category] || 'palette';
    }

    static loadFeaturedPaintings() {
        const featuredGrid = document.getElementById('featured-paintings-grid');
        if (!featuredGrid) return;

        const featured = PAINTINGS_DATA.filter(p => p.featured && p.status === 'available').slice(0, 6);
        featuredGrid.innerHTML = featured.map(painting => this.createShopCard(painting)).join('');
    }

    static loadGalleryPreview() {
        const galleryPreviewGrid = document.getElementById('gallery-preview-grid');
        if (!galleryPreviewGrid) return;

        const preview = PAINTINGS_DATA.slice(0, 4);
        galleryPreviewGrid.innerHTML = preview.map(painting => this.createGalleryCard(painting)).join('');
    }

    static updateStats() {
        const totalPaintings = document.getElementById('total-paintings');
        const availablePaintings = document.getElementById('available-paintings');

        if (totalPaintings) {
            totalPaintings.textContent = PAINTINGS_DATA.length;
        }

        if (availablePaintings) {
            availablePaintings.textContent = PAINTINGS_DATA.filter(p => p.status === 'available').length;
        }
    }
}

// ==============================================================
// CHECKOUT & PAYMENT PROCESSING
// ==============================================================

class Checkout {
    static async init() {
        if (typeof Stripe === 'undefined') {
            console.warn('Stripe not loaded - payment functionality will be limited');
            return;
        }

        try {
            AppState.stripe = Stripe(STRIPE_PUBLIC_KEY);
            AppState.elements = AppState.stripe.elements();
        } catch (error) {
            console.warn('Stripe initialization error:', error);
        }
    }

    static buyNow(paintingId) {
        Cart.add(paintingId);
        Cart.toggle();
        setTimeout(() => this.processCheckout(), 500);
    }

    static async processCheckout() {
        if (AppState.cart.length === 0) {
            showNotification('Your cart is empty', 'error');
            return;
        }

        const cartSidebar = document.getElementById('cart-sidebar');
        if (cartSidebar) {
            cartSidebar.classList.remove('active');
        }

        this.createCheckoutForm();
        Modal.open('checkout-modal');
    }

    static createCheckoutForm() {
        const container = document.getElementById('checkout-form-container');
        if (!container) return;

        const total = Cart.getTotal();
        const itemCount = Cart.getItemCount();

        container.innerHTML = `
            <div class="checkout-container">
                <div class="checkout-sections">
                    <div class="order-summary-section">
                        <h4><i class="fas fa-receipt"></i> Order Summary</h4>
                        <div class="order-items">
                            ${AppState.cart.map(item => `
                                <div class="checkout-item">
                                    <div class="item-image">
                                        <img src="${item.image}" alt="${item.title}" onerror="this.style.display='none'">
                                    </div>
                                    <div class="item-details">
                                        <h5>${item.title}</h5>
                                        <p>${item.year} • ${item.size}</p>
                                        <p>Qty: ${item.quantity}</p>
                                    </div>
                                    <div class="item-price">${formatPrice(item.price * item.quantity)}</div>
                                </div>
                            `).join('')}
                        </div>
                        <div class="order-totals">
                            <div class="total-line">
                                <span>Subtotal (${itemCount} ${itemCount === 1 ? 'item' : 'items'}):</span>
                                <span>${formatPrice(total)}</span>
                            </div>
                            <div class="total-line">
                                <span>Shipping:</span>
                                <span class="free">FREE</span>
                            </div>
                            <div class="total-line">
                                <span>Insurance:</span>
                                <span class="included">Included</span>
                            </div>
                            <div class="total-line grand-total">
                                <span>Total:</span>
                                <span>${formatPrice(total)}</span>
                            </div>
                        </div>
                    </div>

                    <div class="payment-section">
                        <h4><i class="fas fa-truck"></i> Shipping Information</h4>
                        <div class="form-grid">
                            <input type="text" placeholder="First Name" required class="form-input">
                            <input type="text" placeholder="Last Name" required class="form-input">
                        </div>
                        <input type="email" placeholder="Email Address" required class="form-input">
                        <input type="tel" placeholder="Phone Number" class="form-input">
                        <input type="text" placeholder="Address Line 1" required class="form-input">
                        <input type="text" placeholder="Address Line 2 (Optional)" class="form-input">
                        <div class="form-grid">
                            <input type="text" placeholder="City" required class="form-input">
                            <input type="text" placeholder="Postcode" required class="form-input">
                            <select required class="form-input">
                                <option value="">Select Country</option>
                                <option value="GB">United Kingdom</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="AU">Australia</option>
                                <option value="DE">Germany</option>
                                <option value="FR">France</option>
                                <option value="IT">Italy</option>
                                <option value="ES">Spain</option>
                                <option value="NL">Netherlands</option>
                                <option value="BE">Belgium</option>
                            </select>
                        </div>

                        <h4><i class="fas fa-credit-card"></i> Payment Information</h4>
                        <div id="card-element" class="card-element">
                            <!-- Stripe Elements will create form elements here -->
                        </div>
                        <div id="card-errors" class="card-errors"></div>

                        <div class="payment-security">
                            <div class="security-badges">
                                <i class="fas fa-lock"></i>
                                <span>Secured by Stripe</span>
                                <i class="fab fa-cc-visa"></i>
                                <i class="fab fa-cc-mastercard"></i>
                                <i class="fab fa-cc-amex"></i>
                                <i class="fab fa-paypal"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="checkout-actions">
                    <button class="btn btn--secondary" onclick="Modal.close('checkout-modal')">
                        <i class="fas fa-arrow-left"></i> Continue Shopping
                    </button>
                    <button class="btn btn--primary btn-large" onclick="Checkout.submitOrder()" id="submit-payment">
                        <i class="fas fa-lock"></i> Complete Secure Payment
                    </button>
                </div>

                <div class="checkout-guarantees">
                    <div class="guarantee-grid">
                        <div class="guarantee-item">
                            <i class="fas fa-shield-alt"></i>
                            <span>SSL Encrypted</span>
                        </div>
                        <div class="guarantee-item">
                            <i class="fas fa-undo"></i>
                            <span>30-Day Returns</span>
                        </div>
                        <div class="guarantee-item">
                            <i class="fas fa-truck"></i>
                            <span>Free Shipping</span>
                        </div>
                        <div class="guarantee-item">
                            <i class="fas fa-certificate"></i>
                            <span>Authenticity Guaranteed</span>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Initialize Stripe Elements if available
        if (AppState.stripe && AppState.elements) {
            setTimeout(() => {
                const cardElement = AppState.elements.create('card', {
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                    },
                });

                cardElement.mount('#card-element');

                cardElement.addEventListener('change', ({error}) => {
                    const displayError = document.getElementById('card-errors');
                    if (error) {
                        displayError.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${error.message}`;
                    } else {
                        displayError.textContent = '';
                    }
                });
            }, 100);
        }
    }

    static async submitOrder() {
        const submitBtn = document.getElementById('submit-payment');
        if (submitBtn) {
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
            submitBtn.disabled = true;
        }

        // Simulate order processing
        setTimeout(() => {
            showNotification('Order placed successfully! Thank you for supporting art. 🎨', 'success');
            Modal.closeAll();
            Cart.clear();

            if (submitBtn) {
                submitBtn.innerHTML = '<i class="fas fa-lock"></i> Complete Secure Payment';
                submitBtn.disabled = false;
            }
        }, 2000);
    }
}

// ==============================================================
// ENHANCED MOBILE MENU FUNCTIONALITY
// ==============================================================

class MobileMenu {
    static toggle() {
        AppState.mobileMenuOpen = !AppState.mobileMenuOpen;

        const overlay = document.getElementById('mobile-menu-overlay');
        const hamburger = document.getElementById('hamburger');

        if (overlay) {
            overlay.classList.toggle('active', AppState.mobileMenuOpen);
        }

        if (hamburger) {
            hamburger.classList.toggle('active', AppState.mobileMenuOpen);
        }

        // Prevent body scroll when menu is open
        document.body.style.overflow = AppState.mobileMenuOpen ? 'hidden' : '';

        // Close cart if open
        if (AppState.mobileMenuOpen) {
            const cartSidebar = document.getElementById('cart-sidebar');
            if (cartSidebar && cartSidebar.classList.contains('active')) {
                Cart.toggle();
            }
        }
    }

    static close() {
        AppState.mobileMenuOpen = false;

        const overlay = document.getElementById('mobile-menu-overlay');
        const hamburger = document.getElementById('hamburger');

        if (overlay) {
            overlay.classList.remove('active');
        }

        if (hamburger) {
            hamburger.classList.remove('active');
        }

        document.body.style.overflow = '';
    }

    static handleLinkClick(event) {
        // Close menu when clicking internal links
        const link = event.target.closest('a');
        if (link && link.getAttribute('href').startsWith('#')) {
            this.close();
        }
    }
}

// ==============================================================
// FORM HANDLING & SHARING
// ==============================================================

function shareProduct(paintingId) {
    const painting = PAINTINGS_DATA.find(p => p.id === paintingId);
    if (!painting) return;

    if (navigator.share) {
        navigator.share({
            title: `${painting.title} by Samantha Ellis`,
            text: painting.description,
            url: window.location.href
        });
    } else {
        // Fallback: copy to clipboard
        const url = window.location.href;
        navigator.clipboard.writeText(url).then(() => {
            showNotification('Link copied to clipboard!', 'success');
        });
    }
}

function shareGalleryItem(paintingId) {
    shareProduct(paintingId);
}

// ==============================================================
// CURRENCY MANAGEMENT
// ==============================================================

class CurrencyManager {
    static switch(newCurrency) {
        AppState.currentCurrency = newCurrency;

        // Update all prices on the page
        this.updateAllPrices();
        Cart.updateUI();

        showNotification(`Currency switched to ${newCurrency}`, 'info');
    }

    static updateAllPrices() {
        // Update shop grid if present
        const currentFilter = AppState.currentFilter;
        const filteredPaintings = currentFilter === 'all' 
            ? PAINTINGS_DATA 
            : PAINTINGS_DATA.filter(p => p.category === currentFilter);

        if (document.getElementById('shop-grid')) {
            FilterDisplay.updateDisplayWithAnimation(filteredPaintings);
        }

        FilterDisplay.loadFeaturedPaintings();
    }
}

// ==============================================================
// ENHANCED INITIALIZATION & EVENT LISTENERS
// ==============================================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('🎨 Samantha Ellis Art Website Loading...');

    // Initialize app
    initializeApp();

    // Set up event listeners
    setupEventListeners();

    // Initialize checkout
    Checkout.init();

    console.log('✨ Website Ready!');
});

function initializeApp() {
    // Update cart UI
    Cart.updateUI();

    // Load content based on current page
    FilterDisplay.loadFeaturedPaintings();
    FilterDisplay.loadGalleryPreview();

    // Initialize filters
    FilterDisplay.applyFilter('all');

    // Update stats
    FilterDisplay.updateStats();

    // Add loading animation to images
    addImageLoadingEffects();
}

function addImageLoadingEffects() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
            this.classList.add('loaded');
        });
    });
}

function setupEventListeners() {
    // Enhanced Mobile menu with better event handling
    const hamburger = document.getElementById('hamburger');
    const mobileMenuClose = document.getElementById('mobile-menu-close');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');

    if (hamburger) {
        hamburger.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            MobileMenu.toggle();
        });
    }

    if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', (e) => {
            e.preventDefault();
            MobileMenu.close();
        });
    }

    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', (e) => {
            if (e.target === mobileMenuOverlay) {
                MobileMenu.close();
            }
        });

        // Handle mobile menu link clicks
        mobileMenuOverlay.addEventListener('click', MobileMenu.handleLinkClick);
    }

    // Cart functionality
    const cartToggle = document.getElementById('cart-toggle');
    const cartClose = document.getElementById('cart-close');
    const checkoutBtn = document.getElementById('checkout-btn');

    if (cartToggle) {
        cartToggle.addEventListener('click', (e) => {
            e.preventDefault();
            Cart.toggle();
        });
    }

    if (cartClose) {
        cartClose.addEventListener('click', Cart.toggle);
    }

    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', Checkout.processCheckout);
    }

    // Enhanced modal handling
    document.querySelectorAll('.modal').forEach(modal => {
        const closeBtn = modal.querySelector('.modal-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', (e) => {
                e.preventDefault();
                Modal.close(modal.id);
            });
        }

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                Modal.close(modal.id);
            }
        });
    });

    // Filter buttons with improved feedback
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            FilterDisplay.applyFilter(btn.dataset.filter);

            // Visual feedback
            btn.style.transform = 'scale(0.95)';
            setTimeout(() => btn.style.transform = '', 150);
        });
    });

    // Currency switcher
    const currencySelect = document.getElementById('currency');
    if (currencySelect) {
        currencySelect.addEventListener('change', (e) => {
            CurrencyManager.switch(e.target.value);
        });
    }

    // Commission button
    const commissionBtn = document.getElementById('commission-btn');
    if (commissionBtn) {
        commissionBtn.addEventListener('click', () => Modal.open('commission-modal'));
    }

    // Enhanced smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const headerOffset = 100;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                MobileMenu.close();
            }
        });
    });

    // Enhanced header scroll effect
    let lastScrollY = window.scrollY;
    const header = document.getElementById('header');

    window.addEventListener('scroll', debounce(() => {
        const currentScrollY = window.scrollY;

        if (header) {
            header.classList.toggle('scrolled', currentScrollY > 100);

            // Hide header on scroll down, show on scroll up
            if (currentScrollY > lastScrollY && currentScrollY > 200) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }
        }

        lastScrollY = currentScrollY;
    }, 10));

    // Enhanced keyboard navigation
    document.addEventListener('keydown', (e) => {
        switch (e.key) {
            case 'Escape':
                Modal.closeAll();
                MobileMenu.close();
                const cartSidebar = document.getElementById('cart-sidebar');
                if (cartSidebar && cartSidebar.classList.contains('active')) {
                    Cart.toggle();
                }
                break;
            case 'Enter':
                if (e.target.classList.contains('filter-btn')) {
                    e.target.click();
                }
                break;
        }
    });

    // Add click handlers for dynamic content
    document.addEventListener('click', (e) => {
        // Handle Add to Cart buttons
        if (e.target.closest('.add-to-cart-btn')) {
            const btn = e.target.closest('.add-to-cart-btn');
            const paintingId = btn.getAttribute('onclick')?.match(/\d+/)?.[0];
            if (paintingId) {
                Cart.add(parseInt(paintingId));
            }
        }

        // Handle Buy Now buttons
        if (e.target.closest('.buy-now-btn')) {
            const btn = e.target.closest('.buy-now-btn');
            const paintingId = btn.getAttribute('onclick')?.match(/\d+/)?.[0];
            if (paintingId) {
                Checkout.buyNow(parseInt(paintingId));
            }
        }
    });

    // Touch gestures for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    document.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    document.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 100;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe left - open cart
                if (!AppState.mobileMenuOpen) {
                    Cart.toggle();
                }
            } else {
                // Swipe right - open menu
                if (!document.getElementById('cart-sidebar')?.classList.contains('active')) {
                    MobileMenu.toggle();
                }
            }
        }
    }

    // Performance monitoring
    if ('performance' in window) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                const perfData = performance.timing;
                const loadTime = perfData.loadEventEnd - perfData.navigationStart;
                console.log(`🚀 Website loaded in ${loadTime}ms`);
            }, 0);
        });
    }
}

// ==============================================================
// EXPOSE GLOBAL FUNCTIONS
// ==============================================================

// Make functions globally available for inline handlers
window.Cart = Cart;
window.Modal = Modal;
window.ProductDisplay = ProductDisplay;
window.FilterDisplay = FilterDisplay;
window.Checkout = Checkout;
window.MobileMenu = MobileMenu;
window.CurrencyManager = CurrencyManager;
window.shareProduct = shareProduct;
window.shareGalleryItem = shareGalleryItem;

// Legacy support
window.addToCart = Cart.add.bind(Cart);
window.removeFromCart = Cart.remove.bind(Cart);
window.toggleCart = Cart.toggle.bind(Cart);
window.openModal = Modal.open.bind(Modal);
window.closeModal = Modal.close.bind(Modal);

// Debug helpers (remove in production)
window.AppState = AppState;
window.PAINTINGS_DATA = PAINTINGS_DATA;

console.log('🎨 Samantha Ellis Art - Enhanced JavaScript Loaded');