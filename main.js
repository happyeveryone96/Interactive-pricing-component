const input = document.getElementById('range');

input.addEventListener('input', updateValue);

function updateValue(e) {
    // input.style.background = "linear-gradient(to right, dodgerblue 0%, dodgerblue '+ e.target.value +'%, #d5d4d3 ' + e.target.value + '%, #d5d4d3 100%)'"
    const val = e.target.value;
    const pageView = document.getElementById('pageview');
    const cost = document.getElementById('cost-number');
    input.style.background = `linear-gradient(to right, hsl(174, 86%, 45%) ${val/2}%, lightgray ${val/2}% 100%)`;
    pageView.innerHTML = `${val}K pageviews`;
    cost.innerHTML = `$ ${val/6.25}`;
}
// $('input[type=range]').on('input', function(){
//     var val = $(this).val();
//     $(this).css('background', 'linear-gradient(to right, dodgerblue 0%, dodgerblue '+ val +'%, #d5d4d3 ' + val + '%, #d5d4d3 100%)');
//   });