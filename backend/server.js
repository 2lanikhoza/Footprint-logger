const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// In-memory storage
let activities = [];

// GET all activities
app.get("/activities", (req, res) => {
    res.json(activities);
});

// POST new activity
app.post("/activities", (req, res) => {
    const activity = req.body;

    if (!activity.type || !activity.amount) {
        return res.status(400).json({ error: "Invalid data" });
    }

    activities.push(activity);

    res.json({
        message: "Activity added",
        activity: activity
    });
});

// Start server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});