const bdhtml = $("body").html().toString().replace(/bdhtml[^>]*>[\s\S]*?<\/script\b[^>]*>/gi, " ");
const hdhtml = $("head").html().toString().replace(/bdhtml[^>]*>[\s\S]*?<\/script\b[^>]*>/gi, " ");
const bh = (bdhtml + hdhtml).toString().replace(/bdhtml[^>]*>.*?.x3C/gi, " ");
var klons = "NOT INSTALLED";
var klvp = "NOT INSTALLED";
var klvpmt = "None";
var klatc = "NOT INSTALLED";
var klfr = "False";
var klfa = "Default Shopify Form";
var ccss_o, ccss_t, ccss_th;

if (bh.indexOf("klaviyo.js?company_id=") > -1) {
    klons = "INSTALLED";
}

if (bh.indexOf("_learnq.push(['track', 'Viewed Product'") > -1) {
    klvp = "INSTALLED";

$.each(item, function(lqk, v) {
if (lqk == "VariantID") {
    return klvpmt = "FlowCandy Custom";
} else {
    return klvpmt = "Default";
}
})
}
              
if (bh.indexOf("_learnq.push(['track', 'Added to Cart'") > -1) {
    klatc = "INSTALLED";
}

$('input[type="email"]').one("click", function() {
    if (bh.indexOf("https://manage.kmail-lists.com/ajax/subscriptions/subscribe") > -1) {
        klfr = "True";
    }
    if ($(this).parent().closest('form').attr("action") != "/contact#contact_form") {
        klfa = "Custom Form";
    }

    runReport()
})

//console.clear();
console.log('%cPlease click on the input field of the newsletter form in the footer (the one that usually says "email" or "Enter your Email"', 'background: #FDDA0D; color: #000000; padding: 5px; font-size: 18px;');

function checkIfTrue(which) {
if (which == 1) {
  if (klons == "NOT INSTALLED") {
    return ccss_f;
  } else {
    return ccss_t;
  }
} else if (which == 2) {
  if (klvp == "NOT INSTALLED") {
    return ccss_f;
  } else {
    return ccss_t;
  }
} else if (which == 3) {
  if (klvpmt == "None") {
    return ccss_f;
  } else {
    return ccss_t;
  }
} else if (which == 4) {
  if (klatc == "NOT INSTALLED") {
    return ccss_f;
  } else {
    return ccss_t;
  }
}
}

function runReport() {
ccss_o = 'background: #382076; color: #ffffff; padding: 8px 20px; font-size: 18px; font-family: Verdana;';
ccss_t = 'background: #228C22; color: #000000; padding: 8px 20px; font-size: 18px; font-family: Verdana;';
ccss_th = 'background: #73629F; color: #ffffff; padding: 8px 20px; font-size: 18px; font-family: Verdana;';
ccss_f = 'background: #AF0606; color: #000000; padding: 8px 20px; font-size: 18px; font-family: Verdana;';
//console.clear()
console.log('%cKlaviyo Onsite Script: %c' + klons,ccss_o ,checkIfTrue(1));
console.log('%cViewed Product Metric: %c' + klvp,ccss_o ,checkIfTrue(2));
console.log('%c   - Viewed Product Metric Type: %c' + klvpmt,ccss_th ,checkIfTrue(3));
console.log('%cAdded to Cart Metric: %c' + klatc,ccss_o ,checkIfTrue(4));
console.log('%cFooter Newsletter Form:',ccss_o);
console.log('%c   - Redirected to Klaviyo by JS: %c' + klfr,ccss_th ,ccss_t);
console.log('%c   - Newsletter Form Type: %c' + klfa,ccss_th ,ccss_t);
}
