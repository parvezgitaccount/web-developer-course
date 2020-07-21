function largenumber(number) {
    let element = number[0]
    for (var i = 0; i < number.length; i++) {
        var result = number[i];

        if (element < result) {
            result = element;
           
    }

}

largenumber([12, 2, 5, 25, 25])