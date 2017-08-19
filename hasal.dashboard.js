/*global Chart, moment */

/* global variables */
var interval = 5184000; // 60 days
var platform = "mozilla-central";
var framework_id = 9; // hasal
var root_id = "chart-container";
var canvasAspect = [1000, 200];
var firefoxColor = 'rgb(256, 123, 0)';
var chromeColor = 'rgb(0, 123, 256)';
var tests = [
  {
    "test": "amazon_ail_hover_related_product_thumbnail",
    "platform": "windows10-64",
    "signatures": {
      "chrome": "f8e83d10c21186622ce4cbc08fdfc17b9874bbf7",
      "firefox": "0dfccc785ef64ba9ab76fad3ca24dcc177cc2184"
    },
    "name": "amazon_ail_hover_related_product_thumbnail"
  },
  {
    "test": "amazon_ail_select_search_suggestion",
    "platform": "windows10-64",
    "signatures": {
      "chrome": "ac815c27fc4ff853658f0ceafd5de781a11fe13a",
      "firefox": "8911a060d08d6d8a25554457efd8d2b642790236"
    },
    "name": "amazon_ail_select_search_suggestion"
  },
  {
    "test": "amazon_ail_type_in_search_field",
    "platform": "windows10-64",
    "signatures": {
      "chrome": "f88dd3f0478db4a11dc163706572ac80f21cbc34",
      "firefox": "b0c3f647fc51ba77dec6d9af6b415a5742d077dc"
    },
    "name": "amazon_ail_type_in_search_field"
  },
  {
    "test": "facebook_ail_click_close_chat_tab",
    "platform": "windows10-64",
    "signatures": {
      "chrome": "08bea39c69677393f738f6b312c5482c7e79f2d7",
      "firefox": "8db7c4f1a045c221a91afc9792932cf273a5d84e"
    },
    "name": "facebook_ail_click_close_chat_tab"
  },
  {
    "test": "facebook_ail_click_open_chat_tab",
    "platform": "windows10-64",
    "signatures": {
      "chrome": "e71839f4044ddc0c537e358b2937f98fb8510d75",
      "firefox": "a9680713792aa2f978381307c01f328338cce955"
    },
    "name": "facebook_ail_click_open_chat_tab"
  },
  {
    "test": "facebook_ail_click_open_chat_tab_emoji",
    "platform": "windows10-64",
    "signatures": {
      "chrome": "24624025c116ea456fe5dfcca8cc5d0e4f42ab20",
      "firefox": "c1a3cd08861e6b8360a80e5d777179cbc760343a"
    },
    "name": "facebook_ail_click_open_chat_tab_emoji"
  },
  {
    "test": "facebook_ail_click_photo_viewer_right_arrow",
    "platform": "windows10-64",
    "signatures": {
      "chrome": "9ebf522608ebd10a35436454ad29dcf01a960396",
      "firefox": "a757405accfc03b6240efde09c224cfb68f18fca"
    },
    "name": "facebook_ail_click_photo_viewer_right_arrow"
  },
  {
    "test": "facebook_ail_scroll_home_1_txt",
    "platform": "windows10-64",
    "signatures": {
      "chrome": "0b712d936659f3a08dafdc8f574ee97eafc67f85",
      "firefox": "d1a8b806357b0b60ab93de402bc36f80154cfea8"
    },
    "name": "facebook_ail_scroll_home_1_txt"
  },
  {
    "test": "facebook_ail_type_comment_1_txt",
    "platform": "windows10-64",
    "signatures": {
      "chrome": "a2efab0b104544eb0a923a35a974b5162a1a6b3f",
      "firefox": "f2dc15e26db09f27a73e1f902aeb5b68df066024"
    },
    "name": "facebook_ail_type_comment_1_txt"
  },
  {
    "test": "facebook_ail_type_composerbox_1_txt",
    "platform": "windows10-64",
    "signatures": {
      "chrome": "c321ca358e75c4c10a76aac5448f6586f99f927c",
      "firefox": "ecb646223092ee1793327dcaec3485e5b87daf33"
    },
    "name": "facebook_ail_type_composerbox_1_txt"
  },
  {
    "test": "facebook_ail_type_message_1_txt",
    "platform": "windows10-64",
    "signatures": {
      "chrome": "b238783f44db29185a19832d79b878b7621b6fa1",
      "firefox": "392390bf6d934a14b55f6434aca65ad524ac59b8"
    },
    "name": "facebook_ail_type_message_1_txt"
  },
  {
    "test": "gdoc_ail_pagedown_10_text",
    "platform": "windows10-64",
    "signatures": {
      "chrome": "9d9909cc5ffbc79d819fe47933a52921478ee02a",
      "firefox": "c65703bb54059e50bd371c7f894826f27cf61965"
    },
    "name": "gdoc_ail_pagedown_10_text"
  },
  {
    "test": "gmail_ail_compose_new_mail_via_keyboard",
    "platform": "windows10-64",
    "signatures": {
      "chrome": "c7ff5336ad3f011a6de40b18bd76715fba5d346b",
      "firefox": "f697ad0a9de97b50f04aa2903b02f3c9402f887c"
    },
    "name": "gmail_ail_compose_new_mail_via_keyboard"
  },
  {
    "test": "gmail_ail_open_mail",
    "platform": "windows10-64",
    "signatures": {
      "chrome": "ac3820863676a3422948396086646246920ad90d",
      "firefox": "f7b1309c5f83b656ca1b0bb4adf06e833af1867e"
    },
    "name": "gmail_ail_open_mail"
  },
  {
    "test": "gmail_ail_reply_mail",
    "platform": "windows10-64",
    "signatures": {
      "chrome": "27e7a6d79431f78aabfc4676cbdb84dd24952efe",
      "firefox": "6d42942ec8af4f80be39a7487567f2591b750189"
    },
    "name": "gmail_ail_reply_mail"
  },
  {
    "test": "gmail_ail_type_in_reply_field",
    "platform": "windows10-64",
    "signatures": {
      "chrome": "730319972b477f342c1ae087f4731c4ab3fd48b7",
      "firefox": "d272b2c92f7affd32a7a0e252f50a9ea289f4d5e"
    },
    "name": "gmail_ail_type_in_reply_field"
  },
  {
    "test": "gsearch_ail_select_image_cat",
    "platform": "windows10-64",
    "signatures": {
      "chrome": "c43f7a96eb4f4ff52e556ff28910b568b95d9bb5",
      "firefox": "fe51e447c6aee350af85364340ffbc33dac87eaa"
    },
    "name": "gsearch_ail_select_image_cat"
  },
  {
    "test": "gsearch_ail_select_search_suggestion",
    "platform": "windows10-64",
    "signatures": {
      "chrome": "0d11b8604d1fceb787c17aa586b067f0e8cc7e8b",
      "firefox": "a23e023bac8054ccfb80841d8daad5d72f635802"
    },
    "name": "gsearch_ail_select_search_suggestion"
  },
  {
    "test": "gsearch_ail_type_searchbox",
    "platform": "windows10-64",
    "signatures": {
      "chrome": "8b7d2ba34a600469c8cd4128f66d8b8845ee523b",
      "firefox": "a3fc3161303bb905e036bc68dea3eb0cd205d94f"
    },
    "name": "gsearch_ail_type_searchbox"
  },
  {
    "test": "youtube_ail_select_search_suggestion",
    "platform": "windows10-64",
    "signatures": {
      "chrome": "a355fd09ae3be543f18bddd1192c6b410f46f0dd",
      "firefox": "45b24a45fa8c3482cd3a51688f0af177fd212a58"
    },
    "name": "youtube_ail_select_search_suggestion"
  },
  {
    "test": "youtube_ail_type_in_search_field",
    "platform": "windows10-64",
    "signatures": {
      "chrome": "d0609dea1daaf557b08d2494097aa2a10c924526",
      "firefox": "7f057f0eb229977513767a02c7c6e2f2b48a7188"
    },
    "name": "youtube_ail_type_in_search_field"
  }
];

function getApp() {
  var query = window.location.search.substring(1);
  var vars = query.split('&');
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');
    if (decodeURIComponent(pair[0]) == 'app') {
      return decodeURIComponent(pair[1]);
    }
  }
  return '<all>';
}

function filterTests(tests, app) {
  if (app === '<all>') {
    return tests;
  }
  return tests.filter(t => t.test.match(app));
}

function getSignatures(tests) {
  let sigs = new Array();
  for (let t of tests) {
    for (let option in t.signatures) {
      if (!t.signatures.hasOwnProperty(option)) {
        continue;
      }
      sigs.push(t.signatures[option]);
    }
  }
  return sigs;
}

async function getSeriesData(signatures) {
  let endpoint = `https://treeherder.mozilla.org/api/project/${platform}/performance/data/`;
  let query = `?framework=${framework_id}&interval=${interval}&signatures=${signatures.join('&signatures=')}`;
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", endpoint + query);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.addEventListener("load", e => {
      resolve(JSON.parse(xhr.response));
    });
    xhr.send();
  });
}

function attachCanvases(tests) {
  let rootElement = document.getElementById(root_id);
  for (let t of tests) {
    let div = document.createElement("div");
    let canvas = document.createElement("canvas");
    div.setAttribute("id", t.test + "-container");
    div.setAttribute("style", "width:100%;");
    canvas.setAttribute("id", t.test);
    div.appendChild(canvas);
    rootElement.appendChild(div);
  }
}

function toDate(unix) {
  let d = new Date(unix * 1000);
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}


function calculateValues(data) {
  data.sort((a, b) => a - b);
  let upperWhisker, q3, median, q1, lowerWhisker;
  var n = data.length;
  // lower quartile
  var q1Pos = (n * 0.25);
  if (q1Pos % 1 != 0) {
    q1Pos = Math.floor(q1Pos);
    q1 = data[q1Pos];
  } else {
    q1Pos = Math.floor(q1Pos);
    q1 = (data[q1Pos] + data[q1Pos-1]) / 2;
  }
  // median
  var medianPos = (n * 0.5);
  if (medianPos % 1 != 0) {
    medianPos = Math.floor(medianPos);
    median = data[medianPos];
  } else {
    medianPos = Math.floor(medianPos);
    median = (data[medianPos] + data[medianPos-1]) / 2;
  }
  // upper quartile
  var q3Pos = (n * 0.75);
  if (q3Pos % 1 != 0) {
    q3Pos = Math.floor(q3Pos);
    q3 = data[q3Pos];
  } else {
    q3Pos = Math.floor(q3Pos);
    q3 = (data[q3Pos] + data[q3Pos-1]) / 2;
  }
  let min = data[0];
  let max = data[n - 1];

  var iqr = q3 - q1;
  let mildOutliers = new Array();
  let extremeOutliers = new Array();
  lowerWhisker = min;
  upperWhisker = max;
  if (min < (q1 - 1.5 * iqr)) {
    for (var i = 0; i < q1Pos; i++) {
      // we have to detect outliers
      if (data[i] < (q1 - 3 * iqr)) {
        extremeOutliers.push(data[i]);
      } else if (data[i] < (q1 - 1.5 * iqr)) {
        mildOutliers.push(data[i]);
      } else if (data[i] >= (q1 - 1.5 * iqr)) {
        lowerWhisker = data [i];
        break;
      }
    }
  }
  if (max > (q3 + (1.5 * iqr))) {
    for (i = q3Pos; i < data.length; i++) {
      // we have to detect outliers
      if (data[i] > (q3 + 3 * iqr)) {
        extremeOutliers.push(data[i]);
      } else if (data[i] > (q3 + 1.5 * iqr)) {
        mildOutliers.push(data[i]);
      } else if (data[i] <= (q3 + 1.5 * iqr)) {
        upperWhisker = data[i];
      }
    }
  }
  return {
    max: upperWhisker,
    q3: q3,
    med: median,
    q1: q1,
    min: lowerWhisker
  };
}

// Group input data by push_timestamp and
// calculate max, q3, med, q1, min
function analyzeData(data) {
  let dayData = {};
  for (let p of data) {
    if (!dayData[p.push_timestamp]) {
      dayData[p.push_timestamp] = new Array();
    }
    dayData[p.push_timestamp].push(p.value);
  }
  let result = new Array();
  for (let day in dayData) {
    if (!dayData.hasOwnProperty(day)) {
      continue;
    }
    let time = day;
    let d = dayData[time];
    let { max, q3, med, q1, min } = calculateValues(d);
    let t = toDate(time);
    result.push({
      t: t.valueOf(),
      max: max,
      q3: q3,
      med: med,
      q1: q1,
      min: min
    });
  }
  return result;
}

function attachCharts(tests, data) {
  for (let t of tests) {
    var elm = document.getElementById(t.test);
    var ctx = elm.getContext("2d");
    ctx.canvas.width = canvasAspect[0];
    ctx.canvas.height = canvasAspect[1];
    let firefox = analyzeData(data[t.signatures.firefox]);
    let chrome = analyzeData(data[t.signatures.chrome]);
    // XXX handle missing data points
    let min = Math.min(firefox.length, chrome.length);
    firefox.length = min;
    chrome.length = min;
    elm.chart = new Chart(ctx, {
      type: 'BoxWhisker',
      data: {
        datasets: [{
          label: "Firefox",
          data: firefox,
          backgroundColor: firefoxColor
        }, {
          label: "Chrome",
          data: chrome,
          backgroundColor: chromeColor
        }]
      },
      options: {
        title: {
          display: true,
          position: 'bottom',
          text: t.name
        },
        legend: {
          position: 'left'
        }
      }
    });
  }
}

function hideSpinner() {
  document.getElementById("spinner").remove();
}

async function start() {
  let app = getApp();
  let filteredTests = filterTests(tests, app);
  let signatures = getSignatures(filteredTests);
  let data = await getSeriesData(signatures);
  attachCanvases(filteredTests);
  attachCharts(filteredTests, data);
  hideSpinner();
}

start();
