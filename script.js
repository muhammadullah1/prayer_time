// Replace 'YOUR_API_KEY' with your actual API key from Aladhan
const apiKey = 'YOUR_API_KEY';
const apiUrl = `https://api.aladhan.com/v1/calendarByCity?city=Peshawar&country=PK&method=2&month=${(new Date().getMonth() + 1)}&year=${new Date().getFullYear()}&annual=true`;

// Fetch prayer times data from Aladhan API
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const prayerTimesData = data.data;
        displayPrayerTimes(prayerTimesData);
    })
    .catch(error => console.error('Error fetching data:', error));

// Function to display prayer times
function displayPrayerTimes(prayerTimesData) {
    const prayerTimesDiv = document.getElementById('prayerTimes');
    let html = '<h2>Prayer Times for the Month</h2>';

    for (let day in prayerTimesData) {
        const prayerTimes = prayerTimesData[day][0].timings;
        const date = prayerTimesData[day][0].date.readable;

        html += `<h3>${date}</h3>`;
        html += '<ul>';
        for (let time in prayerTimes) {
            html += `<li><strong>${time}:</strong> ${prayerTimes[time]}</li>`;
        }
        html += '</ul>';
    }

    prayerTimesDiv.innerHTML = html;
}
