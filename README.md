# App

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.0.3.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


# Angular CRUD Table with Bar Chart

## 📌 Project Overview
This project is a simple Angular application that demonstrates **CRUD (Create, Read, Update, Delete)** operations using a table.  
The application also includes an **optional bar chart visualization** that dynamically updates based on the table data.

The project is built using **Angular standalone components** and **Reactive Forms**.

---

## 🎯 Features
- Create, Read, Update, and Delete products
- Reactive form with validation
- Tabular display of product data
- Dynamic bar chart visualization using ngx-charts
- Real-time synchronization between table and chart
- Clean and modular code structure

---

## 🧱 Product Fields
- Product Name
- Price
- Category

---

## 🛠️ Technologies Used
- Angular (Standalone Components)
- TypeScript
- Reactive Forms
- ngx-charts (for bar chart visualization)
- Angular CDK
- HTML & CSS

---

## 📊 Bar Chart Functionality
- Displays product prices as a bar chart
- X-axis: Product Name
- Y-axis: Product Price
- Chart updates automatically when:
  - A product is added
  - A product is updated
  - A product is deleted

---

## ▶️ How to Run the Project

### 1️⃣ Install dependencies
```bash
npm install --legacy-peer-deps
