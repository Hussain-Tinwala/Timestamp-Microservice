
```markdown
# 📆 Timestamp Microservice

This is a Node.js and Express-based microservice that returns Unix and UTC timestamps for a given date input. It's a project built as part of the [freeCodeCamp](https://www.freecodecamp.org/) Back End Development and APIs certification.

---

## 🚀 Features

- Get current timestamp in Unix and UTC formats.
- Parse date strings (e.g., `2015-12-25`) and Unix timestamps (e.g., `1451001600000`).
- Returns a JSON response with both formats.
- Handles invalid date inputs gracefully.

---

## 🔗 Example API Endpoints

### ✅ Current Date

```

GET /api

````

**Example Output:**
```json
{
  "unix": 1700000000000,
  "utc": "Tue, 10 Dec 2023 00:00:00 GMT"
}
````

---

### ✅ Specific Date (ISO Format)

```
GET /api/2015-12-25
```

**Output:**

```json
{
  "unix": 1451001600000,
  "utc": "Fri, 25 Dec 2015 00:00:00 GMT"
}
```

---

### ✅ Unix Timestamp

```
GET /api/1451001600000
```

**Output:**

```json
{
  "unix": 1451001600000,
  "utc": "Fri, 25 Dec 2015 00:00:00 GMT"
}
```

---

### ❌ Invalid Date

```
GET /api/abc
```

**Output:**

```json
{
  "error": "Invalid Date"
}
```

---

## 💡 How to Use

1. Clone the repo:

   ```bash
   https://github.com/Hussain-Tinwala/Timestamp-Microservice.git
   ```

2. Navigate into the project folder:

   ```bash
   cd timestamp-microservice
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the server:

   ```bash
   node index.js
   ```


---

## 🛠️ Built With

* Node.js
* Express.js
* HTML/CSS for UI
* [freeCodeCamp Boilerplate](https://github.com/freeCodeCamp/boilerplate-project-timestamp)

---
