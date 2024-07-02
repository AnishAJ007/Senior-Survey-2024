var ctx = document.getElementById("doughnut3");

new Chart(ctx, {
  type: "pie",
  data: {
    labels: [
      "CPI>9",
      "8<CPI<9",
      "7<CPI<8",
      "CPI<7"
    ],
    datasets: [
      {
        label: "No. of students",
        data: [69, 108, 72, 40],
        borderWidth: 1,
        backgroundColor: [
          
          "#13344C",
          "#1E4460",
          "#295574",
          "#37617F",
          "#4F7793",
          "#7092AA",
          "#89A6BB",
          "#A4BCCC",
          "#C4D4E1",
        ],
      },
    ],
  },
  options: {
    plugins: {
    //   legend: {
    //     display: true,
    //     position: "right",
    //   },
      datalabels: {
        color: "#fff", // Color of the labels
        anchor: "end", // Anchor the label position at the end of the arc
        align: "start", // Align the label text start
        offset: -10, // Offset the labels to avoid overlapping
        formatter: function (value, context) {
          return value; // Display the data value
        }
      }
    }
  }
});
