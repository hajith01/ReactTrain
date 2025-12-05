async function fetchData() {
    try {
        let response = await fetch("https://");
        let data = await response.json();
        console.log(data);
    } catch (err) {
        console.log("Fetch error:", err.message);
    }
}

fetchData();
