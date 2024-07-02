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
        // chart 1
        {
            labels: ['Consulting/Venture Capital', 'Other', 'Entrepreneurship', 'Exams like UPSC, CDS, etc', 'Finance', 'I will go where life takes me', 'Industry/Core Engineering','MBA', 'Masters, PhD', 'Product Management', 'Technology'],
            datasets: [
                {
                    label: '7 < CPI < 8',
                    backgroundColor: 'rgba(54, 162, 235, 0.5)',
                    data: [7, 2, 1, 7, 4, 7, 14, 1, 7, 6, 16]
                },
                {
                    label: '8 < CPI < 9',
                    backgroundColor: 'rgba(255, 206, 86, 0.5)',
                    data: [10, 4, 5, 0, 7, 5, 27, 1, 18, 7, 25]
                },
                {
                    label: 'CPI < 7',
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    data: [3, 2, 0, 3, 0, 11, 6, 2, 2, 5, 6]
                },
                {
                    label: 'CPI > 9',
                    backgroundColor: 'rgba(75, 192, 192, 0.5)',
                    data: [1, 4, 0, 0, 10, 2, 20, 1, 11, 1, 19]
                }
            ]
        },

                //chart 2
        {
            labels: ['Considering one or more offers', 'Currently searching for a position', 'Have accepted a position', 'Have not yet begun my job search', 'Not planning on taking a job', 'Will be self-employed'],
            datasets: [
                {
                    label: '7 < CPI < 8',
                    backgroundColor: 'rgba(54, 162, 235, 0.5)',
                    data: [3, 10, 51, 0, 8, 0]
                },
                {
                    label: '8 < CPI < 9',
                    backgroundColor: 'rgba(255, 206, 86, 0.5)',
                    data: [4, 6, 83, 1, 11, 2]
                },
                {
                    label: 'CPI < 7',
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    data: [1, 8, 19, 6, 5, 0]
                },
                {
                    label: 'CPI > 9',
                    backgroundColor: 'rgba(75, 192, 192, 0.5)',
                    data: [2, 2, 59, 0, 6, 0]
                }
            ]
        },

        

                //chart 3
        {
            labels: ['Exceptionally well, Master of the universe level', 'Moderately well, I can survive but not thrive', 'Not well, Help needed', 'Slightly well, Only if life had a syllabus', 'Very well, Ready to rock'],
            datasets: [
                {
                    label: '7 < CPI < 8',
                    backgroundColor: 'rgba(54, 162, 235, 0.5)',
                    data: [13, 17, 1, 4, 37]
                },
                {
                    label: '8 < CPI < 9',
                    backgroundColor: 'rgba(255, 206, 86, 0.5)',
                    data: [15, 22, 0, 7, 60]
                },
                {
                    label: 'CPI < 7',
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    data: [5, 12, 2, 4, 17]
                },
                {
                    label: 'CPI > 9',
                    backgroundColor: 'rgba(75, 192, 192, 0.5)',
                    data: [5, 10, 0, 10, 43]
                }
            ]
        },

                // chart 4
                {
                    labels: ['1.0', '2.0', '3.0', '4.0', '5.0'],
                    datasets: [
                        {
                            label: 'Female',
                            backgroundColor: 'rgba(54, 162, 235, 0.5)',
                            data: [2, 7, 21, 19, 12 ]
                        },
                        {
                            label: 'Male',
                            backgroundColor: 'rgba(255, 206, 86, 0.5)',
                            data: [5, 18, 50, 93, 57 ]
                        },
        
                    ]
                },

                //c hart5

        {
            labels: ['Mostly stressful', 'Everything felt disorganized', 'Frustrating', 'I noticed some instances of unfairness or bias', 'Had fun despite the challenges','Very rewarding','overall was a positive experience','Didnt sit for placements','No stress','I got a PPO😎', 'Fairly smooth','found the process to be well-organized and clear'],
            datasets: [
                {
                    label: '7 < CPI < 8',
                    backgroundColor: 'rgba(54, 162, 235, 0.5)',
                    data: [44, 32, 44, 44, 16, 9, 9, 9, 4, 4, 4, 4]
                },
                {
                    label: '8 < CPI < 9',
                    backgroundColor: 'rgba(255, 206, 86, 0.5)',
                    data: [ 43,30,49,49,31,11,11,13,21,21,7,7]
                },
                {
                    label: 'CPI < 7',
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    data: [20, 19, 25, 25, 9, 2 ,2 ,3, 3, 3, 0, 0]
                },
                {
                    label: 'CPI > 9',
                    backgroundColor: 'rgba(75, 192, 192, 0.5)',
                    data: [21,15,20,20,13,13,13,13,19,19,6,6]
                }
            ]
        }   
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
