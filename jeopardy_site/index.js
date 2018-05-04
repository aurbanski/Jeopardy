document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    console.log(elems)
    var instances = M.Parallax.init(elems, {"responsiveThreshold": 0});
});

var ctx = document.getElementById('chart1').getContext('2d');
var chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["China", "Australia", "Japan", "Chicago", "France", "India", "California", "Canada", "Spain", "Mexico"],
        datasets: [{
            label: "Number of Answers",
            backgroundColor: 'rgb(221,209,231)',
            borderColor: 'rgb(136,94,173)',
            data: [216, 215, 196, 194, 193, 185, 180, 176, 171, 164],
        }]
    },

    // Configuration options go here
    options: {}
});

var ctx2 = document.getElementById('chart2').getContext('2d');
var chart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
          labels: ["BEFORE & AFTER", "SCIENCE", "LITERATURE", "AMERICAN HISTORY", "POTPOURRI", "WORLD HISTORY", "WORD ORIGINS", "COLLEGES & UNIVERSITIES", "HISTORY", "SPORTS"],
        datasets: [{
            label: "Number of Occurences",
            backgroundColor: 'rgb(221,209,231)',
            borderColor: 'rgb(136,94,173)',
            data: [547, 519, 496, 418, 401, 377, 371, 351, 349, 342],
        }]
    },

    // Configuration options go here
    options: {}
});
