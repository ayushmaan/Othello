var ctx = $("#myChart");

var options = {
}

var value = 30
var rest = 180 - value

var data = {
    labels: [
    ],
    datasets: [
        {
            data: [value, rest],
            backgroundColor: [
                "#FF6384"
            ]
        }]
};

var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: options
});