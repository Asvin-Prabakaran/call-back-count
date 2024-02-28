var div = document.createElement("div")


setTimeout(function () {
    div.innerHTML =  "Count : 10";
    setTimeout(function () {
        div.innerHTML = "Count : 9";
        setTimeout(function () {

            div.innerHTML = "Count : 8";
            setTimeout(function () {

                div.innerHTML = "Count : 7";
                setTimeout(function () {

                    div.innerHTML = "Count : 6";
                    setTimeout(function () {

                        div.innerHTML = "Count : 5";
                        setTimeout(function () {

                            div.innerHTML = "Count : 4";
                            setTimeout(function () {

                                div.innerHTML = "Count : 3";
                                setTimeout(function () {

                                    div.innerHTML = "Count : 2";
                                    setTimeout(function () {

                                        div.innerHTML = "Count : 1";
                                        setTimeout(function () {

                                            div.innerHTML = "Happy Independence Day!";

                                        }, 1000);


                                    }, 1000);


                                }, 1000);


                            }, 1000);

                        }, 1000);

                    }, 1000);

                }, 1000);

            }, 1000);

        }, 1000);
    }, 1000);
}, 1000);
document.body.append(div)