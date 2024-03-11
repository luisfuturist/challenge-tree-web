# Challenge: Interactive Tree powered by Web Technologies

This project explores the creation of an interactive tree structure using modern web technologies. It allows users to visualize and manipulate hierarchical data in a user-friendly way.

You can experience it live here: [tree.luisfuturist.com](https://tree.luisfuturist.com)

## Features

* ➕ **Node Actions** - You can ADD, DELETE, MINIMIZE or MOVE nodes within the tree structure.
* ✏️ **Node Edition** - Customize the title of certain nodes to reflect your data.
* ❌ **Disabled Node Actions**: Certain actions are restricted for the root node and disabled nodes, ensuring data integrity.
* 💾 **Data persistence**: The tree configuration is saved in the browser's local storage, allowing users to resume their work upon returning.

**Note**: Unfortunately, the drag and drop functionality does not currently work on mobile devices.

## Development Setup

### Prerequisites

* Node.js and npm (or pnpm) installed on your system.

### Installation

```bash
git clone https://github.com/luisfuturist/challenge-tree-web.git
cd challenge-tree-web/
npm install
```

## Scripts

The project utilizes various npm scripts for development and build processes:

| Script | Description |
|---|---|
| `dev` (**`npm run dev`**) | Starts the development server with hot reloading for a smooth development experience. |
| `build` (**`npm run build`**) | Creates an optimized production build of the application in the `dist` folder. |
| `lint` (**`npm run lint`**) | Runs code linting to identify potential errors and enforce code style guidelines. |
| `preview` (**`npm run preview`**) | Starts a local preview server for the built production version. |

## Technology Stack

* **Frontend:**
    * **JavaScript** Core programming language for building the application logic and user interface.
    * **React & ReactDOM:** Popular library and its DOM renderer for building interactive UI components.
    * **Zustand:** Lightweight state management solution for managing the application state in a centralized and predictable manner.
    * **Ant Design:** Comprehensive UI component library offering a rich set of pre-built components for rapid development.
    * **@ant-design/icons:** Set of SVG icons for visual enhancements within Ant Design components.
* **Development Tools:**
    * **Typescript:**: TypeScript provides optional static typing for improved code maintainability.
    * **Vite:** High-performance development server and build tool that streamlines the development process with features like hot module replacement and efficient production builds.
    * **UnoCSS:** Utility-first CSS engine promoting a minimal and efficient approach to styling.
    * **ESLint:** Linting tool for identifying stylistic inconsistencies and potential code issues.
    * **UnoCSS with Normalize.css:** CSS reset library (Normalize.css) integrated with UnoCSS for consistent baseline styles across browsers.
* **Deployment:**
    * **Cloudflare Pages:** Serverless deployment platform used to host the production build of the application ([https://tree.luisfuturist.com](https://tree.luisfuturist.com)).
