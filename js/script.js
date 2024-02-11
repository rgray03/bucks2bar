window.onload = function () {
    // Event listened for the button click
    document.getElementById('download').addEventListener('click', function () {
    var canvas = document.getElementById('myChart');

    // Create a new anchor element
    var a = document.createElement('a');
  
    // Set the href attribute to the Base64 encoded string of the canvas image
    a.href = canvas.toDataURL();
  
    // Set the download attribute to the desired file name
    a.download = 'canvas-image.png';
  
    // Trigger a click event on the anchor element
    // This will start the download
    a.click();
});

    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [{
                label: 'Income',
                data: [],
                backgroundColor: [
                    'rgba(117, 235, 149, 0.2)'
                ],
                borderColor: [
                    'rgba(117, 235, 149, 1)'
                ],
                borderWidth: 1
            }, {
                label: 'Expenses',
                data: [],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    document.querySelector('a[data-bs-toggle="tab"][href="#chart"]').addEventListener('click', function () {



        var income = {
            january: document.getElementById('january-income').value,
            february: document.getElementById('february-income').value,
            march: document.getElementById('march-income').value,
            april: document.getElementById('april-income').value,
            may: document.getElementById('may-income').value,
            june: document.getElementById('june-income').value,
            july: document.getElementById('july-income').value,
            august: document.getElementById('august-income').value,
            september: document.getElementById('september-income').value,
            october: document.getElementById('october-income').value,
            november: document.getElementById('november-income').value,
            december: document.getElementById('december-income').value
        };

        var expenses = {
            january: document.getElementById('january-expenses').value,
            february: document.getElementById('february-expenses').value,
            march: document.getElementById('march-expenses').value,
            april: document.getElementById('april-expenses').value,
            may: document.getElementById('may-expenses').value,
            june: document.getElementById('june-expenses').value,
            july: document.getElementById('july-expenses').value,
            august: document.getElementById('august-expenses').value,
            september: document.getElementById('september-expenses').value,
            october: document.getElementById('october-expenses').value,
            november: document.getElementById('november-expenses').value,
            december: document.getElementById('december-expenses').value
        };

        var incomeValues = Object.values(income);
        var expensesValues = Object.values(expenses);

        // Update the data arrays of the myChart object
        myChart.data.datasets[0].data = incomeValues;
        myChart.data.datasets[1].data = expensesValues;

        // Update the chart to reflect the new data
        myChart.update();


    });

};

