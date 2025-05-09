
# 📆 Timestamp Microservice

This is a Node.js and Express-based microservice that returns Unix and UTC timestamps for a given date input. It's a project built as part of the [freeCodeCamp](https://www.freecodecamp.org/) Back End Development and APIs certification.

---

## 🚀 Features

* Get the current timestamp in Unix and UTC formats.
* Parse date strings (e.g., `2015-12-25`) and Unix timestamps (e.g., `1451001600000`).
* Returns a JSON response with both formats.
* Handles invalid date inputs gracefully.

---

## 🔗 Example API Endpoints

### ✅ Current Date

**Endpoint:**
`GET /api`

**Example Output:**

{
"unix": 1700000000000,
"utc": "Tue, 10 Dec 2023 00:00:00 GMT"
}

---

### ✅ Unix Timestamp

**Endpoint:**
`GET /api/1451001600000`

**Example Output:**

{
"unix": 1451001600000,
"utc": "Fri, 25 Dec 2015 00:00:00 GMT"
}

---

### ❌ Invalid Date

**Endpoint:**
`GET /api/abc`

**Example Output:**

{
"error": "Invalid Date"
}

---

## 🛠️ How to Use

1. Clone the repository:

```bash
git clone https://github.com/Hussain-Tinwala/Timestamp-Microservice.git
```

2. Navigate into the project folder:

```bash
cd Timestamp-Microservice
```

3. Install the necessary dependencies:

```bash
npm install
```

4. Start the server:

```bash
npm start
```

The app will be running on `http://localhost:3000`.

---

## 🛠️ Built With

* **Node.js**: JavaScript runtime for building server-side applications.
* **Express.js**: Fast and minimalist web framework for Node.js.
* **HTML/CSS**: For the front-end user interface.
* [**freeCodeCamp Boilerplate**](https://github.com/freeCodeCamp/boilerplate-project-timestamp): The original boilerplate project.

---

## 🔗 Links

* [GitHub Repository](https://github.com/Hussain-Tinwala/Timestamp-Microservice)

---

## 📧 Contact

If you have any questions or suggestions, feel free to reach out!

---
