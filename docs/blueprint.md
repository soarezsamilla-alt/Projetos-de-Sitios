# **App Name**: SítioProJetos

## Core Features:

- Static Content Presentation: Render all textual content and image placeholders from the provided HTML structure, ensuring faithful reproduction of the original design.
- Responsive Layout Adaptation: Implement responsive design adjustments based on the specified CSS media queries to ensure optimal viewing across various screen sizes (mobile, tablet, desktop).
- Interactive FAQ Module: Develop the accordion functionality for the 'Perguntas Frequentes' section, allowing users to expand and collapse questions to reveal answers.
- Dynamic Offer Countdown: Implement a persistent 24-hour countdown timer for the 'Plano Pro' offer, saving its state in local storage to maintain consistency across user sessions.
- Smooth Page Navigation: Enable smooth scrolling behavior for internal anchor links within the page (e.g., 'Garantir Meu Acesso') for a better user experience.
- AI Project Recommendation Tool: A generative AI tool that suggests optimal project combinations or relevant project categories from the existing 115 plans based on user-defined parameters such as land size, desired crops/livestock, or geographical biome.

## Style Guidelines:

- Primary color: A rich, warm gold (#D4A84B) representing value and highlights, derived from the concept of 'Timeless Value'.
- Background color: A very dark, desaturated brown-gray (#1A1713) that subtly harmonizes with the primary gold, creating a unified deep 'Earth' backdrop for the content.
- Accent color: A deep, vibrant rust-reddish-brown (#922709) for secondary highlights or impactful callouts, offering a strong, analogous contrast to the primary gold.
- Headlines: 'Playfair Display' (serif, wght 700, 900) for an elegant, bold presentation. Body text: 'Inter' (sans-serif, wght 400-900) for modern readability and versatility. Note: currently only Google Fonts are supported.
- Minimalist and clean symbols. Utilize sharp geometric shapes and text-based icons (e.g., checkmarks, stars, 'X' marks) for status indicators and visual bullet points, enhancing readability without overwhelming the rich design.
- Content organized within responsive, max-width containers (1200px or 900px) with centered alignment. Grid layouts are employed extensively for section content (problems, product features, samples, bonuses, testimonials, pricing plans), ensuring an organized and adaptable structure across devices via detailed media queries for breakpoints at 900px and 560px.
- Subtle yet engaging CSS animations for dynamic elements: a 'shine' effect on the urgency top bar and primary CTA buttons, alongside smooth transform and border color transitions on hover for cards (problem, sample, breakdown, bonus, testimonial, plan) to provide visual feedback and elegance.