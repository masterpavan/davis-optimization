

window.addEventListener('load', sendPerformanceMetrics);

function sendPerformanceMetrics() {
    console.log("Sending Performance Metrics");

    let metrics = getPerformanceTiming();
    metrics['deviceMemory'] = navigator.deviceMemory || '';
    metrics['numCores'] = navigator.hardwareConcurrency || '';

    fetch('https://ucdavis-pwa.firebaseio.com/PerformanceTimings.json', {
        method: 'post',
        body: JSON.stringify(metrics)
    }).then(function(response) {
        return response.json();
    }).then(function(data) {
        console.log('Sent Performance Metrics:', data);
    });
}

function getPerformanceTiming() {
    // Get the first entry
    const [entry] = performance.getEntriesByType("navigation");
    return entry.toJSON();
}
