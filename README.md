Project Description: Homepage - CS50 Buffet
For my CS50 Week 8 project, titled "Homepage," I created a fully functional, interactive website called CS50 Buffet, a playful, coding-themed restaurant menu. The goal was to design a responsive, user-friendly site that showcases my skills in HTML, CSS, and JavaScript, meeting the requirements of the "Homepage" assignment while adding my own creative twist. Inspired by programming languages, the site features a buffet-style menu with vegetarian, non-vegetarian, and dessert options, complete with a navigation bar, dynamic interactivity, and a contact form.

Features and Implementation
HTML Structure:
The site consists of five main pages: index.html (home), veg.html (vegetarian menu), nonveg.html (non-vegetarian menu), dessert.html (dessert menu), and contact.html (contact form).
Each page uses semantic HTML5 elements for accessibility and structure, with a consistent navigation bar embedded directly in the markup for instant loading.
The home page features three stylized buttons linking to the menu pages, while the menu pages display food items with images and descriptions. The contact page includes a simple form with input validation.
CSS Styling:
Defined in styles.css, the site’s design is visually appealing and responsive, using a custom dark theme with a pink accent (#ff9999) for branding.
The navigation bar is fixed at the top, with a hoverable dropdown menu for "Menu" items and a mobile-friendly hamburger toggle (visible at ≤ 600px).
Background images (e.g., buffet.jpg, vegetarian.jpg) enhance each page’s theme, with overlay content styled for readability. Menu items and buttons feature hover effects and transitions for a polished look.
Media queries ensure the layout adapts seamlessly from desktop to mobile, stacking elements like buttons and menu items vertically on smaller screens.
JavaScript Interactivity:
Implemented in script.js, the JavaScript enhances user experience with dynamic features:
Navigation: The hamburger menu toggles the nav links on mobile, switching between ☰ and ✕ icons. The "Menu" dropdown toggles on click for mobile users.
Welcome Alerts: Each page greets users with a custom alert (e.g., "Welcome to CS50 Buffet!" on the home page), triggered on load.
Rotating Tips: Page-specific tips display every 30 seconds via setInterval, cycling through arrays stored in an object (e.g., "Python Pesto Pasta: A fresh twist!" on veg.html).
Click Animations: Buttons on the home page shrink to 95% scale on click, menu items on menu pages grow to 105%, and the contact form’s submit button animates, all using transform and setTimeout for smooth feedback.
Form Handling: The contact form prevents default submission, shows a "Thank you!" alert, and resets—simulating a real submission without a backend.
Optimization:
Initially, the nav bar loaded via fetch() from navbar.html, but I optimized it by embedding it directly into each page, eliminating load delays and simplifying the codebase.
Images use loading="lazy" to improve performance by deferring off-screen image loading.
Design Choices and Inspiration
The concept of "CS50 Buffet" blends my passion for coding with a fun, relatable theme. Each dish is named after a programming language (e.g., "Python Pesto Pasta," "Rust Roast Lamb"), reflecting the CS50 spirit. I chose a buffet motif to symbolize variety, much like the diverse skills learned in the course. The dark theme with vibrant accents mimics a modern restaurant vibe, while the interactivity ensures users enjoy exploring the site.

Challenges and Learning
Responsive Design: Crafting a nav bar that works on both desktop (hover) and mobile (click) required balancing CSS and JS, teaching me about media queries and event handling.
JavaScript Timing: Implementing rotating tips with setInterval deepened my understanding of asynchronous operations.
Optimization: Switching from fetch() to static HTML taught me about trade-offs between modularity and performance in small-scale projects.
Conclusion
CS50 Buffet is more than a homepage—it’s a showcase of my growth in web development. It meets the assignment’s requirements (multiple pages, CSS styling, JavaScript interactivity) while adding personality and polish. From structuring HTML to debugging JS animations, this project solidified my foundational skills and sparked my excitement for creating engaging web experiences.
