document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    console.log(elems)
    var instances = M.Parallax.init(elems, {"responsiveThreshold": 0});
});
