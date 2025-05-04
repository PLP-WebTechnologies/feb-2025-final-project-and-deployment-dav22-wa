# StyleHut - E-Commerce Fashion Store

## Overview
StyleHut is a modern, responsive e-commerce website built with HTML, CSS (Tailwind CSS), and JavaScript. It offers a user-friendly platform to browse, add to cart, and simulate checkout for 20 unique fashion products, including clothing and accessories. The site features a clean design, persistent cart functionality using `localStorage`, and a simulated payment system with multiple methods.

## Live Deployment
StyleHut has been deployed to Netlify and is accessible at:  
**[https://stylehut.netlify.app](https://stylehut.netlify.app)** (placeholder URL, replace with actual Netlify URL).  
Visit the live site to explore the full functionality, including browsing products, managing the cart, and simulating payments.

## Features
- **Product Catalog**: 20 fashion products (8 featured on the home page, 12 on the products page) with high-quality images from Unsplash.
- **Responsive Design**: Built with Tailwind CSS for a seamless experience across desktop and mobile devices.
- **Cart Functionality**: Add, remove, and clear items with quantities tracked using `localStorage` for persistence across page navigation.
- **Payment Simulation**: Supports Credit Card, PayPal, and Bank Transfer options with client-side validation and confirmation.
- **Contact Form**: A simple form for users to send inquiries (simulated submission with an alert).
- **Dynamic Cart Counter**: Displays the total number of items in the cart across all pages.

## Project Structure
```
stylehut/
├── index.html          # Home page with featured products
├── products.html       # All products page
├── cart.html           # Cart and payment page
├── contact.html        # Contact form page
├── styles.css          # Custom CSS for additional styling
├── script.js           # JavaScript for cart, payment, and form logic
└── README.md           # Project documentation
```

## Setup Instructions
1. **Clone or Download**: Download the project files or clone the repository.
2. **Serve Locally**:
   - Use a local server (e.g., `Live Server` extension in VS Code) to run the site, as `localStorage` requires a server environment.
   - Alternatively, open `index.html` in a browser, but ensure a server is used for full functionality.
3. **Dependencies**: No external dependencies are required beyond the Tailwind CSS CDN included in the HTML files.
4. **Browser Compatibility**: Tested on modern browsers (Chrome, Firefox, Edge). Ensure JavaScript is enabled.
5. **Deploy to Netlify** (Optional):
   - Drag and drop the project folder into Netlify's dashboard or link a Git repository.
   - Netlify will automatically detect and deploy the static site.
   - Access the deployed site via the provided Netlify URL (e.g., `https://stylehut.netlify.app`).

## Usage
1. **Browsing Products**:
   - Visit `index.html` (or `/` on the live site) to view 8 featured products or `products.html` (or `/products`) for all 20 products.
   - Each product displays an image, name, price, and an "Add to Cart" button.
2. **Managing Cart**:
   - Click "Add to Cart" to add a product. If the product is already in the cart, its quantity increases.
   - Navigate to `cart.html` (or `/cart`) to view cart items, remove individual items, or clear the cart.
   - The cart counter in the navigation bar updates dynamically.
3. **Checkout**:
   - On `cart.html` (or `/cart`), select a payment method (Credit Card, PayPal, or Bank Transfer).
   - For Credit Card, enter card details (simulated, no real processing). PayPal and Bank Transfer show placeholder messages.
   - Upon successful payment, the cart is cleared, and a confirmation alert is shown.
4. **Contact**:
   - Use `contact.html` (or `/contact`) to submit inquiries via a form (simulated with an alert).

## Product List
The site includes 20 fashion products with images from Unsplash:
1. Classic Shirt ($20)
2. Elegant Dress ($35)
3. White Sneakers ($45)
4. Retro Sunglasses ($25)
5. Leather Handbag ($60)
6. Classic Watch ($80)
7. Tailored Blazer ($55)
8. Silk Scarf ($15)
9. Denim Jeans ($30)
10. Leather Jacket ($50)
11. Cozy Sweater ($40)
12. Wool Hat ($18)
13. Ankle Boots ($65)
14. Gold Necklace ($30)
15. Graphic T-Shirt ($22)
16. Leather Belt ($20)
17. Pleated Skirt ($28)
18. Hoop Earrings ($15)
19. Wool Coat ($75)
20. Leather Wallet ($35)

## Technologies Used
- **HTML5**: Structure of the website.
- **Tailwind CSS (v2.2.19)**: Responsive styling via CDN.
- **JavaScript**: Cart management, payment simulation, and form handling.
- **localStorage**: Persistent cart data storage.
- **Unsplash**: Free, high-quality product images.
- **Netlify**: Hosting for the live deployment.

## Limitations
- **Client-Side Only**: No server-side processing; payment and contact forms are simulated with alerts.
- **No Real Payment Gateway**: Payment methods are for demonstration purposes only.
- **Static Images**: Images are sourced from Unsplash and may not reflect real products.

## Future Improvements
- Integrate a backend (e.g., Node.js, Express) for real payment processing and form submissions.
- Add user authentication for personalized shopping experiences.
- Implement product filtering and search functionality.
- Enhance accessibility with ARIA attributes and keyboard navigation.

## Contributing
Feel free to fork the project, submit pull requests, or report issues. Ensure changes align with the existing Tailwind CSS and JavaScript structure.

## License
This project is open-source and available under the [MIT License](https://opensource.org/licenses/MIT).

## Contact
For questions or feedback, use the contact form on `contact.html` (or `/contact` on the live site, simulated) or reach out via the project's repository (if hosted).