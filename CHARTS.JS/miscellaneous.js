const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', function() {
    function wrapText(text, maxWidth) {
        const words = text.split(' ');
        let lines = [];
        let currentLine = words[0];

        for (let i = 1; i < words.length; i++) {
            const word = words[i];
            const width = currentLine.length + word.length + 1; // +1 for space

            if (width < maxWidth) {
                currentLine += ' ' + word;
            } else {
                lines.push(currentLine);
                currentLine = word;
            }
        }
        lines.push(currentLine);
        return lines;
    }

    // Chart data for all charts
    const chartData = [
    // Chart 1
    {
        labels: ['No', 'Yes'],
        datasets: [
            {
                label: '7 < CPI < 8',
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                data: [19, 53]
            },
            {
                label: '8 < CPI < 9',
                backgroundColor: 'rgba(255, 206, 86, 0.5)',
                data: [36, 69]
            },
            {
                label: 'CPI < 7',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                data: [20, 20]
            },
            {
                label: 'CPI > 9',
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                data: [34, 34]
            }
        ]
    },

    // chart 2
{
    labels: ['No', 'Yes'],
    datasets: [
        {
            label: 'Aerospace Engineering',
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            data: [10,16 ]
        },
        {
            label: 'Biosciences and Bioengineering',
            backgroundColor: 'rgba(255, 206, 86, 0.5)',
            data: [1, 3 ]
        },
        {
            label: 'CTARA',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            data: [ 0, 1]
        },
        {
            label: 'Chemical Engineering',
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
            data: [4, 17]
        },
        {
            label: 'Chemistry',
            backgroundColor: 'rgba(153, 102, 255, 0.5)',
            data: [1, 1]
        },
        {
            label: 'Civil Engineering',
            backgroundColor: 'rgba(255, 159, 64, 0.5)',
            data: [2, 16]
        },
        {
            label: 'Computer Science & Engineering',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            data: [19, 13]
        },
        {
            label: 'Earth Sciences',
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            data: [4, 2]
        },
        {
            label: 'Economics',
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
            data: [3, 3]
        },
        {
            label: 'Electrical Engineering',
            backgroundColor: 'rgba(255, 206, 86, 0.5)',
            data: [18, 31]
        },
        {
            label: 'Energy Science and Engineering',
            backgroundColor: 'rgba(153, 102, 255, 0.5)',
            data: [4, 5]
        },
        {
            label: 'Environmental Science and Engineering (ESED)',
            backgroundColor: 'rgba(255, 159, 64, 0.5)',
            data: [2, 3]
        },
        {
            label: 'IDC',
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
            data: [4, 1]
        },
        {
            label: 'IEOR',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            data: [3, 1]
        },
        {
            label: 'Management',
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            data: [1, 1]
        },
        {
            label: 'Mathematics',
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
            data: [2, 10]
        },
        {
            label: 'Mechanical Engineering',
            backgroundColor: 'rgba(255, 206, 86, 0.5)',
            data: [ 17, 35]
        },
        {
            label: 'Metallurgical Engineering & Materials Science',
            backgroundColor: 'rgba(153, 102, 255, 0.5)',
            data: [7, 8]
        },
        {
            label: 'Other',
            backgroundColor: 'rgba(255, 159, 64, 0.5)',
            data: [1, 1]
        },
        {
            label: 'Physics',
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
            data: [6, 9]
        },
        {
            label: 'Systems and Control Engineering',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            data: [1, 0]
        }
    ]
},   

// chart 3
{
    labels: ['Dissatisfied, it led me to opt out from the mess', 'Somewhat dissatisfied,  looked for excuses to eat outside', 'Neutral, I can eat whatever', 'Satisfied, preferred to eat in the mess', 'nan'],
    datasets: [
        {
            label: 'H10',
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            data: [0, 8, 1, 5, 0 ]
        },
        {
            label: 'H11',
            backgroundColor: 'rgba(255, 206, 86, 0.5)',
            data: [2, 9, 1, 5, 0 ]
        },
        {
            label: 'H12',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            data: [ 0, 4, 5, 3, 0]
        },
        {
            label: 'H13',
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
            data: [0, 3, 2, 1, 0]
        },
        {
            label: 'H14',
            backgroundColor: 'rgba(153, 102, 255, 0.5)',
            data: [3, 2, 3, 3, 0]
        },
        {
            label: 'H15',
            backgroundColor: 'rgba(255, 159, 64, 0.5)',
            data: [2, 17, 8, 3, 0]
        },
        {
            label: 'H16',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            data: [0, 1, 0, 0, 0]
        },
        {
            label: 'H17',
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            data: [1, 3, 7, 1, 0]
        },
        {
            label: 'H18',
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
            data: [4, 2, 8, 3, 0]
        },
        {
            label: 'H2',
            backgroundColor: 'rgba(255, 206, 86, 0.5)',
            data: [8, 10, 6, 3, 1]
        },
        {
            label: 'H3',
            backgroundColor: 'rgba(153, 102, 255, 0.5)',
            data: [4, 15, 16, 4, 1]
        },
        {
            label: 'H4',
            backgroundColor: 'rgba(255, 159, 64, 0.5)',
            data: [0, 4, 2, 1, 0]
        },
        {
            label: 'H5',
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
            data: [3, 12, 10, 5, 0]
        },
        {
            label: 'H6',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            data: [5, 20, 8, 3, 0]
        },
        {
            label: 'H9',
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            data: [2, 11, 8, 2, 0]
        },
        {
            label: 'nan',
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
            data: [0, 2, 3, 1, 1]
        },
    
    ]
},      


            // Chart 4
    {
        labels: ['I tried but didnt get selected', 'No, I never tried', 'Yes, at inter IIT tech', 'Yes, at inter-IIT cult', 'Yes, at inter-IIT sports'],
        datasets: [
            {
                label: '7 < CPI < 8',
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                data: [11, 48, 3, 9, 3]
            },
            {
                label: '8 < CPI < 9',
                backgroundColor: 'rgba(255, 206, 86, 0.5)',
                data: [14, 66, 10, 8, 5]
            },
            {
                label: 'CPI < 7',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                data: [5, 27, 1, 4, 3]
            },
            {
                label: 'CPI > 9',
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                data: [6, 49, 8, 5, 1]
            }
        ]
    },

        // Chart 5
    {
        labels: ['1.0', '2.0', '3.0', '4.0', '5.0'],
        datasets: [
            {
                label: '7 < CPI < 8',
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                data: [37, 11, 14, 3, 3]
            },
            {
                label: '8 < CPI < 9',
                backgroundColor: 'rgba(255, 206, 86, 0.5)',
                data: [46, 21, 22, 14, 14]
            },
            {
                label: 'CPI < 7',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                data: [18, 5, 9, 3, 3]
            },
            {
                label: 'CPI > 9',
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                data: [41, 14, 12, 2, 2]
            }
        ]
    },

        // Chart 6
    {
        labels: ['1.0', '2.0', '3.0', '4.0', '5.0'],
        datasets: [
            {
                label: '7 < CPI < 8',
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                data: [1, 4, 7, 22, 38]
            },
            {
                label: '8 < CPI < 9',
                backgroundColor: 'rgba(255, 206, 86, 0.5)',
                data: [0, 1, 10, 48, 47]
            },
            {
                label: 'CPI < 7',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                data: [0, 4, 13, 13, 9]
            },
            {
                label: 'CPI > 9',
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                data: [1, 6, 12, 23, 27]
            }
        ]
    },


    // chart 7
{
    labels: ['1.0', '2.0', '3.0', '4.0', '5.0'],
    datasets: [
        {
            label: 'Aerospace Engineering',
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            data: [0, 2, 5, 11, 8 ]
        },
        {
            label: 'Biosciences and Bioengineering',
            backgroundColor: 'rgba(255, 206, 86, 0.5)',
            data: [0, 0, 0, 4, 0 ]
        },
        {
            label: 'CTARA',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            data: [ 0, 0, 1, 0, 0]
        },
        {
            label: 'Chemical Engineering',
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
            data: [0, 2, 1, 8, 10]
        },
        {
            label: 'Chemistry',
            backgroundColor: 'rgba(153, 102, 255, 0.5)',
            data: [0, 0, 0, 1, 1]
        },
        {
            label: 'Civil Engineering',
            backgroundColor: 'rgba(255, 159, 64, 0.5)',
            data: [1, 0, 1, 6, 10]
        },
        {
            label: 'Computer Science & Engineering',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            data: [0, 2, 6, 12, 13]
        },
        {
            label: 'Earth Sciences',
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            data: [0, 0, 1, 3, 2]
        },
        {
            label: 'Economics',
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
            data: [0, 0, 1, 1, 4]
        },
        {
            label: 'Electrical Engineering',
            backgroundColor: 'rgba(255, 206, 86, 0.5)',
            data: [1, 4, 9, 21, 14]
        },
        {
            label: 'Energy Science and Engineering',
            backgroundColor: 'rgba(153, 102, 255, 0.5)',
            data: [0, 1, 2, 2, 4]
        },
        {
            label: 'Environmental Science and Engineering (ESED)',
            backgroundColor: 'rgba(255, 159, 64, 0.5)',
            data: [0, 0, 1, 1, 3]
        },
        {
            label: 'IDC',
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
            data: [0, 0, 1, 1, 2]
        },
        {
            label: 'IEOR',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            data: [0, 1, 1, 1, 1]
        },
        {
            label: 'Management',
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            data: [0, 0, 0, 0, 2]
        },
        {
            label: 'Mathematics',
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
            data: [0, 0, 1, 4, 7]
        },
        {
            label: 'Mechanical Engineering',
            backgroundColor: 'rgba(255, 206, 86, 0.5)',
            data: [ 0, 2, 6, 18, 27]
        },
        {
            label: 'Metallurgical Engineering & Materials Science',
            backgroundColor: 'rgba(153, 102, 255, 0.5)',
            data: [0, 1, 1, 5, 8]
        },
        {
            label: 'Other',
            backgroundColor: 'rgba(255, 159, 64, 0.5)',
            data: [0, 0, 0, 1, 1]
        },
        {
            label: 'Physics',
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
            data: [0, 0, 5, 5, 4]
        },
        {
            label: 'Systems and Control Engineering',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            data: [0, 0, 0, 1, 0]
        }
    ]
},    

    


        // Add more charts here as needed
    ];

    // Chart options (common for all charts)
    const chartOptions = {
        responsive: true,
        scales: {
            x: {
                stacked: true,
                ticks: {
                    callback: function(value, index, values) {
                        const label = this.getLabelForValue(value);
                        return wrapText(label, 30); // Adjust 30 to your desired max width per line
                    }
                }
            },
            y: {
                stacked: true
            }
        },
        plugins: {
            tooltip: {
                mode: 'index',
                intersect: false
            },
            legend: {
                display: false
            }
        }
    };

    // Initialize all charts dynamically
    const charts = [];
    chartData.forEach((data, index) => {
        const chartContainerId = `chartContainer${index + 1}`;
        const chartContainer = document.getElementById(chartContainerId);
        if (chartContainer) {
            const ctx = chartContainer.getContext('2d');
            charts.push(new Chart(ctx, {
                type: 'bar',
                data: data,
                options: chartOptions
            }));
        }
    });

    // Add event listeners to buttons
    const buttons = document.querySelectorAll('.legend');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const datasetIndex = parseInt(button.getAttribute('data-dataset'));
            const chartIndex = parseInt(button.closest('.container').querySelector('canvas').id.replace('chartContainer', '')) - 1;

            charts[chartIndex].data.datasets.forEach((dataset, i) => {
                dataset.hidden = i !== datasetIndex;
            });

            charts[chartIndex].update();

            const chartButtons = button.closest('.container').querySelectorAll('.legend');
            chartButtons.forEach((btn, idx) => {
                btn.classList.toggle('active', idx === datasetIndex);
            });
        });
    });

    // Add event listener to all reset buttons
    const resetButtons = document.querySelectorAll('.reset-button');
    resetButtons.forEach((resetButton) => {
        resetButton.addEventListener('click', () => {
            const chartIndex = parseInt(resetButton.closest('.container').querySelector('canvas').id.replace('chartContainer', '')) - 1;

            const originalData = JSON.parse(JSON.stringify(chartData[chartIndex]));

            charts[chartIndex].data.datasets.forEach((dataset, datasetIndex) => {
                dataset.data = [...originalData.datasets[datasetIndex].data]; // Clone the original data
                dataset.hidden = false; // Ensure all datasets are visible after reset
            });

            charts[chartIndex].update(); // Update chart with original data

            const chartButtons = resetButton.closest('.container').querySelectorAll('.legend');
            chartButtons.forEach((btn) => {
                btn.classList.remove('active');
            });
        });
    });
});