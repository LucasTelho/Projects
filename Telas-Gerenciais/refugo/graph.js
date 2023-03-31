        // Get the canvas element and its context
        var canvas = document.getElementById("pizza-graph");
        var ctx = canvas.getContext("2d");
    
        // Define the data and colors
        var data = {
            labels: ["Rejeitadas", "Perdidas", "Recuperadas", "Completas", "Refatoradas", "Terceirizadas"],
            datasets: [{
                data: [10, 10, 10, 10, 10, 10],
                backgroundColor: ["#9b4dca", "#f14668", "#34c38f", "#f1b44c", "#3b5de7", "#e74c3c"]
            }]
        };
    
        // Create the chart
        var myChart = new Chart(ctx, {
            type: 'pie',
            data: data,
            options: {
                legend: {
                    display: true,
                    position: 'right',
                    labels: {
                        fontColor: '#333',
                        fontSize: 14,
                        boxWidth: 10
                    }
                },
                tooltips: {
                    enabled: true,
                    mode: 'single',
                    callbacks: {
                        label: function(tooltipItems, data) {
                            return data.labels[tooltipItems.index] + ': ' + data.datasets[0].data[tooltipItems.index];
                        }
                    }
                }
            }
        });
    
        // Set input values based on chart data
        var machineInput = document.getElementById("machineInput");
        var opInput = document.getElementById("opInput");
        var operatorInput = document.getElementById("operatorInput");
        var moldInput = document.getElementById("moldInput");
    
        machineInput.value = data.datasets[0].data[0];
        opInput.value = data.datasets[0].data[1];
        operatorInput.value = "John Doe";
        moldInput.value = "Extruder B-401";