# Zareki Sales Agent Dashboard
- [ ] Live link - https://zareki-sales-agent-dashboard.onrender.com/

## Overview

The Zareki Sales Agent Dashboard is a web application that provides comprehensive insights and management tools for sales agents working with Zareki products. The dashboard consists of two main modules: the Dashboard module and the School Management Module. Each module serves specific functionalities tailored to enhance sales tracking, target monitoring, school management, and invoice collections.

## Features

### Dashboard Module

1. **Dynamic Counters**

- [ ] Real-time display of key metrics such as Collections, Bounced Cheques, Total Revenue, and Sign-ups for new schools.

2. **Targets**

- [ ] Visual representation of progress towards sign-ups for each of Zareki's products (Zeraki Finance, Zeraki Analytics, Zeraki Timetable) using a pie chart.

3. **Sign Ups**

- [ ] BarCharts showing the distribution of sign-ups across different types of schools (Primary, Secondary, IGCSE).

4. **Upcoming Invoices**

- [ ] Listing of invoices based on due dates, sorted from the soonest to the farthest.

### School Management Module

1. **School Listing**

- [ ] Comprehensive list of schools that have signed up, with detailed pages for each school.

2. **School Detail Page**
   - [ ] Display school data including type, name, balance, etc.
   - [ ] Invoices Section: Lists all invoices for the school with options to update, delete, and add collections to invoices.
   - [ ] Collections Section: Displays a list of all collections with an option to update their status from Valid to Bounced or vice versa.

## Technologies Used

- Frontend: React.js, Tailwind CSS
- Backend: [Mock json-server](https://mock-server-k755.onrender.com/)

  - **[ ] CAUTION**

  `This json-server is deployed on [render](https://render.com/) and takes an average of 40 seconds to spin up after a period of inactivity.`

- Charts and Visualizations: Recharts

## Getting Started

1. Clone the repository

- [ ] run `git clone https://github.com/marvin-nyalik/Zareki-Sales-Agent-Dashboard.git`

2. Change directory into the project

- [ ] `cd zareki-sales-agent-dashboard`

2. Install dependencies:

- [ ] `npm install`

3. Start the development server:

- [ ] `npm run dev`

4. Access the dashboard in your browser:

- [ ] `http://localhost:5173`

## Design Decisions

### Global State Management with Redux

Using Redux for state management provides a centralized and predictable state container. This allows for:

- **Consistent State Across the App**
- [ ] With global state, components can access and update the state consistently without prop drilling, ensuring data consistency throughout the app.
- **Enhanced Debugging**
- [ ] Redux DevTools allows for easier tracking of state changes and debugging, making the development process more efficient.
- **Better State Management**
- [ ] Redux’s strict rules for updating the state reduce the chances of unexpected mutations, leading to more reliable and maintainable code.

### Modular Code Organization

Organizing the code in a modular way helps in:

- **Scalability**
- [ ] As the application grows, having a modular structure allows for adding new features or modules without affecting existing ones.
- [ ] **Maintainability**
      Each module can be developed, tested, and debugged independently, making the codebase easier to maintain.
- [ ] **Reusability**
      Modular code promotes the reusability of components and functions, reducing redundancy and effort.

### Separation of Concerns with Helpers

Separating concerns by using helper functions and constants stored in dedicated files ensures that:

- **Code Readability**
- [ ] Keeping business logic separate from the UI components makes the code easier to read and understand.
- [ ] **Reusability**
      Common functions and constants can be reused across different application parts, promoting DRY (Don't Repeat Yourself) principles.
- [ ] **Testability**
      Isolated functions and constants are easier to test, leading to more robust and reliable code.

### Optimization

- [ ] I employed lazy loading of the Schools module to reduce the initial load time. The `Schools Module` files is not loaded until it is needed when the user navigates to it via the `Sidenav` or the `Mobile nav`

- [ ] Using a global state removes the need to refetch data on loading the `Schools Module`. This further optimizes perfomance and improves the user experience.

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
