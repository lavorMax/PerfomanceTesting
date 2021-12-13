var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "750",
        "ok": "750",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "49",
        "ok": "49",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "7091",
        "ok": "7091",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "682",
        "ok": "682",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "688",
        "ok": "688",
        "ko": "-"
    },
    "percentiles1": {
        "total": "427",
        "ok": "427",
        "ko": "-"
    },
    "percentiles2": {
        "total": "907",
        "ok": "907",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2008",
        "ok": "2008",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3250",
        "ok": "3250",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 528,
    "percentage": 70
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 101,
    "percentage": 13
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 121,
    "percentage": 16
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "50",
        "ok": "50",
        "ko": "-"
    }
},
contents: {
"req_add-comment-req-107de": {
        type: "REQUEST",
        name: "Add comment request",
path: "Add comment request",
pathFormatted: "req_add-comment-req-107de",
stats: {
    "name": "Add comment request",
    "numberOfRequests": {
        "total": "750",
        "ok": "750",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "49",
        "ok": "49",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "7091",
        "ok": "7091",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "682",
        "ok": "682",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "688",
        "ok": "688",
        "ko": "-"
    },
    "percentiles1": {
        "total": "427",
        "ok": "427",
        "ko": "-"
    },
    "percentiles2": {
        "total": "907",
        "ok": "907",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2008",
        "ok": "2008",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3250",
        "ok": "3250",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 528,
    "percentage": 70
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 101,
    "percentage": 13
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 121,
    "percentage": 16
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "50",
        "ok": "50",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
