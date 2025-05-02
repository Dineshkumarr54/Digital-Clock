# 🕒 Digital Clock with 12/24 Hour Toggle and Glassmorphism

A sleek and modern **digital clock** web application built with **HTML, CSS, and JavaScript**.  
It features:
- 12-hour / 24-hour toggle functionality
- Live time display
- Current day of the week
- Stylish glassmorphism container

---

## 🚀 Features

- ⏱️ Real-time digital clock
- 🔁 Toggle between 12-hour and 24-hour format
- 📅 Displays the current day (e.g., Monday, Tuesday)
- 💎 Glassy container with modern UI effects (blur, gradient, rounded corners)

---

## 📸 Preview

![Digital Clock Preview](preview.png) <!-- Add a screenshot if you have one -->

---

## 🛠️ Technologies Used

- HTML5
- CSS3 (with `backdrop-filter` for glass effect)
- JavaScript (for time functionality)

---

## 📂 File Structure
digital-clock/
│
├── index.html # Main HTML file
├── README.md # This file
└── preview.png # Optional: Screenshot of the clock


---

## 🔧 How to Run the Project

1. Clone or download the repository.
2. Open `index.html` in any modern web browser.

```bash
git clone https://github.com/your-username/digital-clock.git
cd digital-clock

Double-click index.html to view the clock in your browser.

🧠 How it Works
JavaScript uses Date object to fetch current time and day.

The time is updated every second using setInterval().

The format toggle is controlled by a boolean is24Hour which flips using:
is24Hour = !is24Hour;
CSS backdrop-filter creates the glassmorphism look.

📌 Notes
For the glass effect to work, your browser must support backdrop-filter (Chrome, Edge, Safari).

Optionally, add a preview.png screenshot for better README visuals.

🧑‍💻 Author
Made by R.Dinesh kumar – 2025
Feel free to use, modify, and share ✨
