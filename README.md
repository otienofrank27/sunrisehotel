# Sunrise Hotel — Online Booking & Billing Prototype

<div align="center">

  <h1>Sunrise Hotel, Kisumu</h1>
  <p><strong>A responsive hotel website and reservation workflow prototype inspired by the lakeside hospitality experience in Kisumu, Kenya.</strong></p>

  <p>
    <img src="https://img.shields.io/badge/React-19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React 19" />
    <img src="https://img.shields.io/badge/TypeScript-7-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  </p>
  <p>
    <a href="https://github.com/otienofrank27/sunrisehotel"><img src="https://img.shields.io/badge/Repository-sunrisehotel-181717?style=flat-square&logo=github" alt="GitHub repository" /></a>
    <a href="https://github.com/otienofrank27/sunrisehotel/commits/main"><img src="https://img.shields.io/github/last-commit/otienofrank27/sunrisehotel?style=flat-square" alt="Last commit" /></a>
  </p>

</div>

---

## Overview

Sunrise Hotel is a hotel website and booking-workflow prototype for a fictionalised lakeside hospitality experience in Kisumu. It brings together room information, accommodation options, booking details, optional services, and a cost summary in a single web experience.

The repository also contains an interactive development/demo interface for exploring the booking flow and working with standalone website files. It is intended as a software project and demonstration; it should not be treated as a live hotel reservation service without a production backend, persistent booking storage, and operational verification.

## Highlights

- **Hotel landing page** — introduces the property and its services.
- **Room catalogue** — presents room categories, guest capacities, descriptions, and nightly rates.
- **Booking workflow** — collects guest and stay details, including dates, number of nights, and room selection.
- **Optional services** — supports add-ons such as breakfast, airport transfers, conference facilities, extra beds, and late checkout.
- **Live cost calculation** — displays an estimated booking total based on the selected room, stay duration, guests, and extras.
- **Booking confirmation flow** — displays a booking summary and generated reference in the prototype workflow.
- **Developer sandbox** — provides an interface for exploring and exporting standalone project files.

## Technology

| Technology | Role |
| --- | --- |
| React 19 | Component-based user interface |
| TypeScript | Application logic and type safety |
| Vite | Development server and production build tooling |
| Tailwind CSS 4 | Utility-first styling |
| Lucide React | Interface icons |
| Motion | UI animation library |
| Express | Server-side tooling included in the dependencies |
| JSZip | ZIP generation for downloadable project files |

## Getting started

### Prerequisites

- Node.js compatible with the installed Vite version
- npm
- Git

Check your installed versions:

```bash
node --version
npm --version
git --version
```

### 1. Clone the repository

```bash
git clone https://github.com/otienofrank27/sunrisehotel.git
cd sunrisehotel
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Vite prints the local development URL in the terminal. Open that address in your browser.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server on port 3000 |
| `npm run build` | Create an optimised production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run the configured TypeScript check |
| `npm run clean` | Run the project's cleanup script |

## Production considerations

This repository currently demonstrates a booking experience; it is not, by itself, a complete production reservation platform. Before accepting real customer bookings, implement and verify:

- A persistent database for reservations, guests, rooms, and payment records.
- Server-side validation and authoritative price calculation.
- Room availability checks that prevent double booking.
- Secure authentication and role-based administration.
- A trusted payment provider; never store raw card details.
- Email/SMS confirmations and operational booking notifications.
- HTTPS, environment-based secrets, logging, backups, and deployment monitoring.
- Privacy notices and appropriate handling of personal information.

Do not place real customer information or production credentials in demo data, source files, or public commits.

## Project structure

The main application entry points are:

```text
sunrisehotel/
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.ts
└── README.md
```

Additional assets and standalone booking files are maintained in the repository.

## Contributing

Contributions and suggestions are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Make a focused change.
4. Test the application and production build.
5. Open a pull request describing the change.

## Maintainer

**Marvin Frank**  
GitHub: [@otienofrank27](https://github.com/otienofrank27)

---

<div align="center">
  <sub>Built as a learning and development project. Verify all booking, pricing, and server workflows before any real-world use.</sub>
</div>
