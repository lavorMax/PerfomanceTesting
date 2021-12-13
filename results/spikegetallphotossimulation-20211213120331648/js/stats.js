var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "20",
        "ok": "20",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1142",
        "ok": "1142",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2975",
        "ok": "2975",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2063",
        "ok": "2063",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "472",
        "ok": "472",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2084",
        "ok": "2084",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2468",
        "ok": "2468",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2723",
        "ok": "2723",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2925",
        "ok": "2925",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 5
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 19,
    "percentage": 95
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5",
        "ok": "5",
        "ko": "-"
    }
},
contents: {
"req_all-photos-requ-e4326": {
        type: "REQUEST",
        name: "All photos request",
path: "All photos request",
pathFormatted: "req_all-photos-requ-e4326",
stats: {
    "name": "All photos request",
    "numberOfRequests": {
        "total": "20",
        "ok": "20",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1142",
        "ok": "1142",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2975",
        "ok": "2975",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2063",
        "ok": "2063",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "472",
        "ok": "472",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2084",
        "ok": "2084",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2468",
        "ok": "2468",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2723",
        "ok": "2723",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2925",
        "ok": "2925",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 5
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 19,
    "percentage": 95
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5",
        "ok": "5",
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
