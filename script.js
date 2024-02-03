
const ctx = document.getElementById('realTimeChart').getContext('2d');
let chart;

// Initial data
const initialData = {
    labels: [],
    datasets: [{
        label: 'Random data Visulization',
        data: [],
        borderColor: 'blue',
        borderWidth: 1,
        fill: false,
    }],
};

// Chart configuration
const chartConfig = {
    type: 'line',
    data: initialData,
    options: {
        scales: {
            x: {
                type: 'linear',
                position: 'bottom',
                title: {
                    display: true,
                    text: 'Time in Sec',
                },
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Random Value',
                },
            },
        },
        animation: true,
    },
};

// Initialize the chart
chart = new Chart(ctx, chartConfig);

// Function to add random data
function addData() {
    const newData = Math.random() * 1000; // Generate random data
    chart.data.labels.push(chart.data.labels.length);
    chart.data.datasets[0].data.push(newData);
    chart.update(); // Update the chart
}

// Add data at regular intervals (e.g., every 1 second)
setInterval(addData, 1000);