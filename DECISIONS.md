# SignalFlow — Implementation Decisions

## 1. Why this approach over the obvious alternative?

I chose a product-led editorial landing page rather than a generic section stack with a hero, feature cards, and a CTA. The assessment asks the visitor to want an account within three seconds, but the product also needs to feel believable without fabricated traction. The page therefore puts a high-contrast product artifact directly in the first scroll: the dashboard is a coded, responsive interface with explicit “Sample workspace / Demo data” labels, while the surrounding copy explains the product in plain language. The warm editorial shell and carbon dashboard create a useful contrast: the marketing layer feels calm and considered, while the product feels operational and inspectable.

The interactive moment is also product-led rather than decorative. Selecting one of three sample feedback notes changes the detected theme, sentiment, priority, confidence score, and suggested action in a single insight pane. That demonstrates the core product loop—feedback to decision—without pretending that the data represents real customers.

## 2. One trade-off under the time limit and what would improve in a full week

I prioritized one exceptionally detailed dashboard state and one meaningful insight interaction over building multiple routes, a full pricing system, or a larger library of dashboard screens. The trade-off is that the navigation links currently anchor to sections or the footer instead of opening fully implemented product pages. With a full week, I would add a lightweight interactive walkthrough route, persist the selected feedback state into a shareable URL, and add a small keyboard-accessible command surface for navigating between themes and opportunities. I would also run a broader browser/device matrix and tune the dashboard’s small-screen information density using real usability feedback.

## 3. Where AI tools were used and what was personally verified or changed afterward

AI assistance was used to accelerate visual exploration and generate the SignalFlow symbol and abstract editorial textures. The generated assets are used as restrained atmosphere; the product dashboard, charts, data labels, responsive behavior, interaction model, copy, and component structure were implemented in React and CSS for deterministic control. I personally changed the visual direction to avoid generic gradients and glassmorphism, added explicit demo-data labels, removed all fabricated social proof, wrote the feedback-to-insight state model, and verified the page structure against the 390px and 1440px requirements. I also added `prefers-reduced-motion` handling, visible focus states, semantic landmark structure, a mobile navigation drawer, and the small Shift + S easter egg.
