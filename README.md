# Zareki Sales Agent Dashboard

## Overview

The Zareki Sales Agent Dashboard is a web application designed to provide comprehensive insights and management tools for sales agents working with Zareki products. The dashboard consists of two main modules: the Dashboard module and the School Management Module. Each module serves specific functionalities tailored to enhance sales tracking, targets monitoring, school management, and invoice collections.

## Features

### Dashboard Module

1. **Dynamic Counters**: Real-time display of key metrics such as Collections, Bounced Cheques, Total Revenue, and Sign-ups for new schools.
2. **Targets**: Visual representation of progress towards sign-ups for each of Zareki's products (Zeraki Finance, Zeraki Analytics, Zeraki Timetable) using a pie chart.
3. **Sign Ups**: BarCharts showing the distribution of sign-ups across different types of schools (Primary, Secondary, IGCSE).
4. **Upcoming Invoices**: Listing of invoices based on due dates, sorted from the soonest to the farthest.

### School Management Module

1. **School Listing**: Comprehensive list of schools that have signed up, with detailed pages for each school.
2. **School Detail Page**:
   - Display of school data including type, name, balance, etc.
   - Invoices Section: Lists all invoices for the school with options to update, delete, and add collections to invoices.
   - Collections Section: Displays a list of all collections with an option to update their status from Valid to Bounced or vice versa.

## Technologies Used

- Frontend: React.js, Tailwind CSS
- Backend: [Mock json-server](https://mock-server-k755.onrender.com/)
- Charts and Visualizations: Recharts

## Getting Started

1. Clone the repository: `git clone https://github.com/marvin-nyalik/Zareki-Sales-Agent-Dashboard.git`
2. Install dependencies: `npm install`
3. Start the development server: `npm start`
4. Access the dashboard in your browser: `http://localhost:3000`

## Contributing

If you wish to contribute to this project, please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/new-feature`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add new feature'`)
5. Push to the branch (`git push origin feature/new-feature`)
6. Create a new Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
