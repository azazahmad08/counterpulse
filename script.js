let count1 = 0;
let count2 = 0;

function incrementCounter(counterId) {
    if (counterId === 'count1') {
        count1++;
        document.getElementById(counterId).innerText = count1;
    } else if (counterId === 'count2') {
        count2++;
        document.getElementById(counterId).innerText = count2;
    }
}

function resetCounters() {
    count1 = 0;
    count2 = 0;
    document.getElementById('count1').innerText = count1;
    document.getElementById('count2').innerText = count2;
}
