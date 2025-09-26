Vahan Bazar Hackathon
> Problem Statement

India is the largest two-wheeler market in the world with 15–17 million annual sales.
But the digital experience is broken for both buyers and dealers:

Buyers face challenges

Listings are scattered across OLX, Quikr, BikeDekho.

No transparent brand comparisons.

No local test ride booking or real-time EMI/fuel cost tools.

Dealers face challenges

Manual inventory tracking (paper/excel).

No analytics or sales insights.

Limited online presence in Tier-2 & Tier-3 cities, where demand is growing.

👉 Vahan Bazar solves this by centralizing discovery, decision-making, and dealership into one trusted platform.

> Market Understanding

80% of Indian households own a two-wheeler, yet online solutions are fragmented.

Buyers want finance clarity (EMI, running costs) before purchase.

EV adoption (~7% of sales in 2024) creates demand for range and charging cost tools.

Dealers are underserved, while 4-wheeler startups (e.g., Cars24) dominate.

> Solution – Vahan Bazar

A digital marketplace designed for India’s two-wheeler ecosystem (Petrol + EV).

For Buyers

Browse and filter by brand, price, fuel type.

View specs, EMI, and fuel cost calculators in ₹.

Compare bikes across brands.

Stay updated on upcoming launches.

Book test rides at nearby dealerships.

Sell used bikes with verified RC upload.

For Dealers

Digital inventory management.

Track leads, bookings, and sales.

Analytics on top-selling models.

Expand reach in Tier-2 & Tier-3 cities.

> Why Vahan Bazar is Unique

Specialized for India’s two-wheeler market – no Cars24 equivalent exists.

Dual focus → Buyer marketplace + Dealer management tools.

EV ready → Charging cost calculator, battery range predictor.

Built on trust → Verified dealers (GSTIN/RTO), KYC-verified sellers.

Scalable → Works for both metro & non-metro regions.

> MVP Features

Browse and filter bikes/scooters

Side-by-side comparisons

EMI & fuel cost calculators

Upcoming launches

Dealer showroom listings

Test ride booking

Used bike portal

Dealer inventory dashboard

> Tech Stack

Frontend: React + Tailwind CSS (mobile-first, bilingual)

Backend: Node.js + Express.js

Database: MongoDB / PostgreSQL

Deployment: Vercel (frontend), Render (backend)

Scaling: AWS/GCP India for Tier-2 expansion

> System Architecture
User Roles

Buyer → Compare, book rides, explore in Hindi/English.

Dealer → Manage inventory, view sales analytics.

Admin → Verify dealers (GSTIN, RTO integration).

Database Entities

Vehicle { brand, model, priceINR, fuelType, specs, dealerId }

Booking { userId, dealerId, vehicleId, date, status }

Dealer { dealerId, GSTIN, name, city, inventory[] }

> Impact
For Buyers

Faster, informed decisions (comparison + EMI).

Save up to ₹12,000/year with fuel vs EV insights.

For Dealers

Faster sales closure in Tier-2 cities.

Increased test ride bookings and visibility.

Marketplace Goals

Onboard 50+ dealers in Andhra/Telangana pilot.

Enable 5,000+ test rides in Year 1.

👥 Team Contributions

Anthati Sai Samslesh: Team Lead, Documentation, Planning

Kondreddy Balaji Sudarshan Reddy: Frontend Development

Gadiparthi Venkata Eswar Kumar: Deployment & Mobile Testing

Boggavarapu Manoj Kumar: Backend APIs & Dealer Dashboard
