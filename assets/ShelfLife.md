# ShelfLife

*A peer-to-peer marketplace for buying & reselling books.*

---

### Overview

ShelfLife is a web app I am currently developing to help students and readers **buy affordable used/new books** and give owners an easy way to **resell their unused books.** The platform focuses on quick ISBN lookups, secure payments, and flexible fulfillment options (including local pickup or shipping).

---

### Problem

Students and avid readers face two persistent issues:

- **High cost of textbooks and novels** - new copies are expensive, while affordable options are scattered across different marketplaces.
- **Unused books pile up** - sellers often lack a fast, safe way to resell books and reach buyers directly.
- **Inconvenient process** - existing platforms require tedious manual entry, charge high fees, or don’t prioritize books specifically.

---

### Goal

Build a **book-specific marketplace** that is:

- **Fast** → Scan or enter an ISBN to auto-fill details.
- **Affordable** → Provide smart pricing guidance.
- **Safe** → Secure payments, verified sellers, and order tracking.
- **Flexible** → Options for local pickup or shipping.

---

### Solution

ShelfLife is designed as a **student- and reader-focused marketplace** with these core features:

- **Instant ISBN Lookup** → Pull book details (title, author, cover) from APIs.
- **Smart Listing Flow** → Quick Pricing, condition tags, and image uploads.
- **Search & Filters** → Find books by subject, price, or distance.
- **Seamless Checkout** → Stripe integration for secure payments.
- **Flexible Delivery** → Local pickup or prepaid shipping labels.
- **Community Trust** → Ratings, reviews, and reporting for safe interactions.

---

### Development Process

1. **Research**
    - Analyzed pain points from students at DePaul University and other peers.
    - Studied existing platforms like Amazon Marketplace, eBay, and Facebook Marketplace to identify gaps.
2. **Design**
    - Wireframe a **clean, minimal UI** for fast listings and discovery.
    - Prioritized a **mobile-first approach**, as most users would list/buy books on their phones.
3. **Build (In Progress)**
    - **Frontend:** HTML & Tailwind (will switch to React) for rapid UI building.
    - **Backend:** Firebase (Auth, Firestore, Storage) for lightweight scalability.
    - **Payments:** Stripe checkout + Connect for escrow-style transactions.
    - **APIs:** Google Books & OpenLibrary for ISBN enrichment.
    - **AI Assist (Gemini/OpenAI):** Suggests fair prices & auto-generates polished descriptions.

---

### Challenges

- **Trust & Safety** → Need strong moderation & secure payment handling.
- **Shipping Integration** → Balancing local pickup with scalable label generation.
- **Student Affordability** → Keeping platform fees low while covering processing costs.

---

### Current Status

ShelfLife is currently in the **development phase**. MVP progress includes:

- Authentication & user profiles
- ISBN lookup & book listing
- Basic marketplace search
- Checkout flow integration (Strip test mode)

Next Steps:

- Add shipping label support
- Implement ratings/reviews
- Campus-focused community features

---

### Outcomes (Expected)

- **Reduced book costs** → Students save 30-50% vs. new book prices.
- **Circular economy for books** → Promotes sustainability by extending book lifecycles.
- **Student empowerment** → Easy, fast resell process creates value for book owners.

---

### Tech Stack

`HTML` · `REACT` · `TAILWIND` · `FIREBASE` · `STRIPE` · `GEMINI/OPENAI` · `GOOGLE APIS`

---

### Reflection

Building ShelfLife is a chance to solve a **real problem I experienced first-hand as a student:** paying too much for books and watching them gather dust after the semester. This project is allowing me to sharpen my **full-stack development, product design,** and **problem-solving** **skills** while creating something meaningful for students like myself.

---

<aside>

👉 **Status:** *In Development Phase*

</aside>