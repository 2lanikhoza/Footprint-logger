// Add activity
function addActivity() {
    const type = document.getElementById("activity").value;
    const amount = document.getElementById("amount").value;

    if (!amount) {
        alert("Please enter an amount");
        return;
    }

    const activity = {
        type: type,
        amount: Number(amount)
    };

    fetch("http://localhost:3000/activities", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(activity)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        loadActivities();
    })
    .catch(err => console.error(err));
}

// Load activities + calculate total
function loadActivities() {
    fetch("http://localhost:3000/activities")
        .then(res => res.json())
        .then(data => {
            let total = 0;

            data.forEach(item => {
                total += item.amount;
            });

            document.getElementById("total").innerText = total;
        })
        .catch(err => console.error(err));
}

// Run when page loads
window.onload = loadActivities;