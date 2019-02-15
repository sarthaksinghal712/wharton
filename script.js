sec = [
    "Consumer Discretionary",
    "Staples",
    "IT",
    "Healthcare",
    "Energy",
    "Finance",
    "",
];
function subm(){
    var x = document.getElementById("opt").value;
    if(x == sec[0]){
        $("#dispbetaavg").text(1.17);
        $("#dispperfloatshort").text(2);
        $("#disproeavg").text(17.41);
        $("#disproaavg").text(8.06);
        $("#disproceavg").text(57);
        $("#dispthreeyeargrowthavg").text(23.29);
    } else if(x == sec[1]){
        $("#dispbetaavg").text(0.48);
        $("#dispperfloatshort").text(2);
        $("#disproeavg").text(17.93);
        $("#disproaavg").text(17.35);
        $("#disproceavg").text(24.1);
        $("#dispthreeyeargrowthavg").text(5.60);
    } else if(x == sec[2]){
        $("#dispbetaavg").text(0.85);
        $("#dispperfloatshort").text(2);
        $("#disproaavg").text(1.25);
        $("#disproeavg").text(9.08);
        $("#dispthreeyeargrowthavg").text(7.53);
        $("#disproceavg").text(200);
    } else if(x == sec[3]){
        $("#dispbetaavg").text(0.67);
        $("#dispperfloatshort").text(2);
        $("#disproaavg").text(7.48);
        $("#disproeavg").text(19.95);
        $("#dispthreeyeargrowthavg").text(2.27);
        $("#disproceavg").text(3.08);
    } else if(x == sec[4]){
        $("#dispbetaavg").text(1.17);
        $("#dispperfloatshort").text(2);
        $("#disproaavg").text(4.88);
        $("#disproeavg").text(9.63);
        $("#dispthreeyeargrowthavg").text(16.53);
        $("#disproceavg").text(20.52);
    } else if(x == sec[5]){
        $("#dispbetaavg").text(0.98);
        $("#dispperfloatshort").text(1.16);
        $("#disproaavg").text(1.4);
        $("#disproeavg").text(21.15);
        $("#dispthreeyeargrowthavg").text(13.32);
        $("#disproceavg").text(15.56);
    } else if(x == sec[6]){
        $("#dispbetaavg").text(0);
        $("#dispperfloatshort").text(0);
        $("#disproaavg").text(0);
        $("#disproeavg").text(0);
        $("#dispthreeyeargrowthavg").text(0);
        $("#disproceavg").text(0);
    }
    $("#vis").fadeIn("slow");
}
function calcu(){
    ordd = [
        $("#dispbetaavg").text(),
        $("#dispperfloatshort").text(),
        $("#disproeavg").text(),
        $("#disproaavg").text(),
        $("#disproceavg").text(),
        $("#dispthreeyeargrowthavg").text(),
    ];
    var valbeta;
    var valperfloat;
    var valroe;
    var valroa;
    var valroce;
    var valthree;
    beta = $("#beta_inp").val();
    perfloatshort = $("#perfloatshort").val();
    roe = $("#roe_inp").val();
    roa = $("#roa_inp").val();
    roce = $("#roce_inp").val();
    threeyeargrowth = $("#threeyeargrowth_inp").val();
    betarat = beta/ordd[0];
    perfloatshortrat = perfloatshort/ordd[1];
    roerat1 = roe/ordd[2];
    roarat1 = roa/ordd[3];
    rocerat1 = roce/ordd[4];
    threeyeargrowthrat1 = threeyeargrowth/ordd[5];
    roerat = (roe*0.4)/ordd[2];
    roarat = (roa*0.3)/ordd[3];
    rocerat = (roce*0.15)/ordd[4];
    threeyeargrowthrat = (threeyeargrowth*0.15)/ordd[5];

    net = 0;
    comparer = [
        1,
        0.5,
        0.25,
        0.125,
        0.0625,
        0.03125,
        0.015625,
    ];
    i = 0;
    if(betarat < 1){
    while(betarat < comparer[i]){
        if(i==comparer.length - 1){
            lower = comparer[0];
        } else{
            lower = comparer[i+1];
        }
        upper = comparer[i];
        i = i+1;
    }
    summ = Number(lower) + Number(betarat) + Number(upper);
    n = summ.toFixed(7)
    console.log(lower);
    console.log(betarat);
    console.log(upper);
    console.log("Adding the three values");
    console.log("Sum is", n);
    aver = (n/3).toFixed(2);
    console.log("Average is", aver);
    $("#dispp").text(aver);
    } 
    else if(betarat >= 1){
        aver = 1;
        console.log("Average for beta is", aver);
    }

    console.log("")

    i = 0;
    if(perfloatshortrat < 1){
    lowerp = upperp = 0;
    while(perfloatshortrat < comparer[i]){
        if(i==comparer.length - 1){
            lowerp = comparer[0];
        } else{
            lowerp = comparer[i+1];
        }
        upperp = comparer[i];
        i = i+1;
    }
    summp = Number(lowerp) + Number(perfloatshortrat) + Number(upperp);
    np = summp.toFixed(7)
    console.log(lowerp);
    console.log(perfloatshortrat);
    console.log(upperp);
    console.log("Adding the three values");
    console.log("Sum is", np);
    averp = (np/3).toFixed(2);
    console.log("Average is", averp);
    $("#dispp").text(averp);
    } 
    else if(perfloatshortrat >= 1){
        averp = 1;
        console.log("Average for perfloatshortrat is", averp);
    }
    console.log("")

    comparer1 = [
        0.4,
        0.2,
        0.1,
        0.05,
        0.025,
        0.0125,
    ];
    i = 0;
    if(roerat1 < 1){
    lowerp1 = upperp1 = 0;
    while(roerat < comparer1[i]){
        if(i==comparer1.length - 1){
            lowerp1 = comparer1[0];
        } else{
            lowerp1 = comparer1[i+1];
        }
        upperp1 = comparer1[i];
        i = i+1;
    }
    summp1 = Number(lowerp1) + Number(roerat) + Number(upperp1);
    np1 = summp1.toFixed(7)
    console.log(lowerp1);
    console.log(roerat);
    console.log(upperp1);
    console.log("Adding the three values");
    console.log("Sum is", np1);
    averp1 = (np1/3).toFixed(2);
    console.log("Average is", averp1);
    $("#dispp").text(averp1);
    } 
    else if(roerat1 >= 1){
        averp1 = 0.4;
        console.log("Average for roerat is", averp1);
    }
    console.log("")

    comparer2 = [
        0.3,
        0.15,
        0.075,
        0.0375,
        0.01875,
        0.009375,
    ];
    i = 0;
    if(roarat1 < 1){
    lowerp12 = upperp12 = 0;
    while(roarat < comparer2[i]){
        if(i==comparer2.length - 1){
            lowerp12 = comparer2[0];
        } else{
            lowerp12 = comparer2[i+1];
        }
        upperp12 = comparer2[i];
        i = i+1;
    }
    summp12 = Number(lowerp12) + Number(roarat) + Number(upperp12);
    np12 = summp12.toFixed(7)
    console.log(lowerp12);
    console.log(roarat);
    console.log(upperp12);
    console.log("Adding the three values");
    console.log("Sum is", np12);
    averp12 = (np12/3).toFixed(2);
    console.log("Average is", averp12);
    $("#dispp").text(averp12);
    } 
    else if(roarat1 >= 1){
        averp12 = 0.3;
        console.log("Average for roarat is", averp12);
    }
    console.log("")
    comparer3 = [
        0.15,
        0.075,
        0.0375,
        0.01875,
        0.009375,
        0.0046875,
    ];
    i = 0;
    if(rocerat1 < 1){
    lowerp123 = upperp123 = 0;
    while(rocerat < comparer3[i]){
        if(i==comparer3.length - 1){
            lowerp123 = comparer3[0];
        } else{
            lowerp123 = comparer3[i+1];
        }
        upperp123 = comparer3[i];
        i = i+1;
    }
    summp123 = Number(lowerp123) + Number(rocerat) + Number(upperp123);
    np123 = summp123.toFixed(7)
    console.log(lowerp123);
    console.log(rocerat);
    console.log(upperp123);
    console.log("Adding the three values");
    console.log("Sum is", np123);
    averp123 = (np123/3).toFixed(2);
    console.log("Average is", averp123);
    $("#dispp").text(averp123);
    } 
    else if(rocerat1 >= 1){
        averp123 = 0.15;
        console.log("Average for rocerat is", averp123);
    }

    console.log("")

    i = 0;
    if(threeyeargrowthrat1 < 1){
    lowerp1234 = upperp1234 = 0;
    while(threeyeargrowthrat < comparer3[i]){
        if(i==comparer3.length - 1){
            lowerp1234 = comparer3[0];
        } else{
            lowerp1234 = comparer3[i+1];
        }
        upperp1234 = comparer3[i];
        i = i+1;
    }
    summp1234 = Number(lowerp1234) + Number(threeyeargrowthrat) + Number(upperp1234);
    np1234 = summp1234.toFixed(7)
    console.log(lowerp1234);
    console.log(threeyeargrowthrat);
    console.log(upperp1234);
    console.log("Adding the three values");
    console.log("Sum is", np1234);
    averp1234 = (np1234/3).toFixed(2);
    console.log("Average is", averp1234);
    $("#dispp").text(averp1234);
    } 
    else if(threeyeargrowthrat1 >= 1){
        averp1234 = 0.15;
        console.log("Average for threeyeargrowthrat is", averp1234);
    }
    console.log("")


    net2 = Number(averp1) + Number(averp12) + Number(averp123) + Number(averp1234);
    net3 = 1 - Number(net2)


    net = Number(aver) + Number(averp) + Number(net3);
    console.log(net);
    $("#dispp3").text(net);

}