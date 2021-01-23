//https://github.com/tofazzol339036/My-javascripts
function kilometerToMeter(length) {
    return length * 1000;
}




function budgetCalculator(watch, phone, laptop) {
    var watchPrice = watch * 50;
    var phonePrice = phone * 100;
    var laptopPrice = laptop * 500;
    var totalBudget = watchPrice + phonePrice + laptopPrice;
    return totalBudget;
}





function hotelCost(days) {
    if (days <= 10) {
        var totalCost = days * 100;
    } else if (days <= 20) {
        var firstTen = 10 * 100;
        var remainingDays = (days - 10) * 80;
        var totalCost = firstTen + remainingDays;
    } else if (days > 20) {
        var firstTen = 10 * 100;
        var secondTen = 10 * 80;
        var remainingDays = (days - 20) * 50;
        var totalCost = firstTen + secondTen + remainingDays;
    }
    return totalCost;
}







function megaFriend(arr) {
    var bigLength = 0;
    var bigName;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length > bigLength) {
            bigLength = arr[i].length;
            bigName = arr[i];
        }
    }
    return bigName;
}


