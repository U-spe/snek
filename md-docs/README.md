<p align="center">
  <a href="https://github.com/U-spe/snek">
    <img src="https://cdn-icons-png.flaticon.com/256/306/306917.png" width="128">
  </a>
  <a href="https://github.com/U-spe/spydr">
    <img src="https://cdn-icons-png.flaticon.com/256/733/733609.png" width="128">
  </a>
</p>

<p align="center">
  <b>Created by Solar/u-spe</b>
</p>

<p align="center">
  <img src="https://img.shields.io/github/commit-activity/t/u-spe/snek?style=for-the-badge&label=COMMITS">
  <img src="https://img.shields.io/github/last-commit/u-spe/snek?style=for-the-badge&logo=github">
  <img src="https://img.shields.io/github/repo-size/u-spe/snek?style=for-the-badge&label=REPO%20SIZE">
</p>

# 🐍 snek

> A focused, lightweight web platform built with simplicity, organization, and speed in mind.

---

## Overview

snek is a focused web project designed as a cleaner and more organized alternative to the larger Spydr architecture.

While Spydr continues to be developed, Snek takes a different approach.

Instead of building everything into one large system, Snek follows **one focused path**.

Every part of the project has a defined location, keeping the codebase easy to understand, maintain, and expand.

No unnecessary layers.

No random files.

No folder maze.

Just Snek.

---

## Features

Snek is currently in early development.

Planned and developing features include:

* Lightweight and fast interface
* Responsive design
* Focused navigation
* Game support
* App support
* Modular JavaScript
* API support
* JSON-powered content
* Organized asset system
* Custom graphics
* Dedicated application directory
* Structured documentation
* Clean project architecture

More features will be added as development continues.

---

## Project Structure

Snek follows a strict and predictable directory structure.

```text
snek/
│
├── index.html
│
├── css/
│   └── styles.css
│
├── js/
│   └── ...
│
├── api/
│   └── ...
│
├── assets/
│   ├── graphics/
│   │   ├── imgs/
│   │   ├── vids/
│   │   └── icons/
│   │
│   ├── json/
│   │   └── ...
│   │
│   └── code/
│       ├── py/
│       ├── ts/
│       └── ...
│
├── apps/
│   └── ...
│
└── md-docs/
    └── ...
```

### Directory Rules

| Type                   | Location                       |
| ---------------------- | ------------------------------ |
| HTML                   | `/`                            |
| CSS                    | `/css/`                        |
| JavaScript             | `/js/`                         |
| API                    | `/api/`                        |
| Images                 | `/assets/graphics/imgs/`       |
| Videos                 | `/assets/graphics/vids/`       |
| Icons                  | `/assets/graphics/icons/`      |
| JSON                   | `/assets/json/`                |
| Python                 | `/assets/code/py/`             |
| TypeScript             | `/assets/code/ts/`             |
| Other code             | `/assets/code/(name-of-code)/` |
| Apps                   | `/apps/`                       |
| Markdown documentation | `/md-docs/`                    |

The goal is simple:

> **If you know what a file is, you should know where it goes.**

---

## Getting Started

Clone the repository.

```bash
git clone https://github.com/U-spe/snek.git
```

Enter the project.

```bash
cd snek
```

Snek is designed to work with standard local development servers.

For example:

```bash
python3 -m http.server
```

Then open the local address provided by the server.

You can also use another static web server or development environment depending on your setup.

---

## Configuration

Snek is designed to keep content separate from the main application logic.

For example, JSON data can be stored inside:

```text
/assets/json/
```

A simple content object may look like:

```json
{
  "title": "Example",
  "url": "/apps/example/",
  "image": "/assets/graphics/imgs/example.png"
}
```

This allows content to be changed without unnecessarily modifying the main interface.

---

## Code Organization

Snek separates different types of code instead of putting everything into one directory.

### JavaScript

```text
/js/
```

Main frontend JavaScript belongs here.

### API

```text
/api/
```

Backend or API-related functionality belongs here.

### Python

```text
/assets/code/py/
```

Python utilities and scripts belong here.

### TypeScript

```text
/assets/code/ts/
```

TypeScript projects and utilities belong here.

### Other Languages

Other programming languages receive their own directory:

```text
/assets/code/(name-of-code)/
```

---

## Apps

Standalone applications belong inside:

```text
/apps/
```

Each application should remain organized within its own directory.

Example:

```text
/apps/
└── example-app/
    ├── index.html
    ├── css/
    └── js/
```

Apps should remain independent from the main Snek interface whenever possible.

---

## Documentation

Project documentation is stored inside:

```text
/md-docs/
```

Markdown files can be used for:

* Development notes
* Feature documentation
* API documentation
* Architecture information
* Setup guides
* Changelogs
* Other project documentation

---

## Design Philosophy

Snek focuses on a few simple ideas:

* **Performance over unnecessary complexity**
* **Organization over clutter**
* **Focused features over feature overload**
* **Readable code**
* **Predictable file locations**
* **Simple maintenance**
* **Clean interfaces**

Snek is not meant to be Spydr with a different name.

It is meant to take a more focused approach.

---

## Roadmap

* [ ] Project structure
* [ ] Main interface
* [ ] Base styling
* [ ] JavaScript architecture
* [ ] API structure
* [ ] Asset system
* [ ] JSON content system
* [ ] App system
* [ ] Game system
* [ ] Documentation
* [ ] Responsive design
* [ ] Deployment
* [ ] Production release

The roadmap will change as development progresses.

---

## Contributing

Contributions, ideas, and bug reports are welcome.

If you want to contribute:

1. Fork the repository.
2. Create a branch.
3. Make your changes.
4. Keep the project structure organized.
5. Commit your changes.
6. Open a Pull Request.

Please keep contributions consistent with Snek's architecture.

---

## License

License information will be added as the project develops.

---

## Credits

Created and maintained by **Solar/u-spe**.

Snek is an independent project that exists alongside Spydr.

Special thanks to everyone who provides ideas, feedback, testing, and bug reports.

---

## Star the Project

If you enjoy Snek, consider giving the repository a ⭐.

It helps more than you think.

---

<div align="center">

### 🐍 snek

*Focused. Clean. Built with purpose.*

</div>
