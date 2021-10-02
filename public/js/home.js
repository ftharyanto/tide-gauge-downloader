function generateDownloadLink() {
  var starttm = document.myform.start_time.value.replace('T', '%20') + ':00';
  var endtm = document.myform.end_time.value.replace('T', '%20') + ':00';
  var netid = document.myform.netid.value;
  var staid = document.myform.staid.value;
  var sensorid = document.myform.sensorid.value;

  var hasil = `http://172.19.0.163/tntapi/archive/fetchbydate?starttm=${starttm}&endtm=${endtm}&netid=${netid}&staid=${staid}&sensorid=${sensorid}`;
  document.getElementById('download-link').href = hasil;
  document.getElementById('download-link').innerHTML = hasil;
}

function downloadCsv() {
  csvLink = document.getElementById('download-link').href + '&format=CSV';
  document.getElementById('download-button').href = csvLink;
  document.getElementById('download-link').click();
}

// var net_id_list = ['T1', 'T2', 'TS', 'WL', 'ID', 'BY', 'CT'];
// var sta_id_list = [];
// var sensor_id_list = [];

// parse data_sensor_status.json and print it to console using jquery
// function netIdList() {
//   $.getJSON('data_sensor_status.json', function (data) {
//     var net_id_list = [];
//     $.each(data, function (index, value) {
//       net_id_list.push(value.net_id);
//     });
//     net_id_list = [...new Set(net_id_list)];
//     return net_id_list;
//     console.log(net_id_list);
//   });
// }
// var net_id_list = netIdList();

// populate net_id select option with net_id_list using jquery
// $(document).ready(function () {
//   $.each(net_id_list, function (index, value) {
//     $('#net_id').append(
//       $('<option>', {
//         value: value,
//         text: value,
//       })
//     );
//   });
// });

// $(document).ready(function () {
//   $('#net_id').append(`<option>abc</option>`);
//   // populate net_id with array of [1,2,3,4,5,6,7]
//   var net_id_list = [];
//   $.getJSON('data_sensor_status.json', function (data) {
//     $.each(data, function (index, value) {
//       net_id_list.push(value.net_id);
//     });
//     net_id_list = [...new Set(net_id_list)];
//     console.log(net_id_list);
//   });
// });
// $.each(net_id_list, function (index, value) {
// $('#net_id').append(`<option>1</option>`);
// });

// var net_id_list = ['T1', 'T2', 'TS', 'WL', 'ID', 'BY', 'CT'];

// $.each(net_id_list, function (index, value) {
//   $('#net_id').append(new Option(value, value));
// });

// $.getJSON('data_sensor_status.json', function (data) {
//   net_id_list = [];
//   $.each(data, function (index, value) {
//     net_id_list.push(value.net_id);
//   });
//   net_id_list = [...new Set(net_id_list)];
//   $('#net_id').append(new Option(value, value));

//   console.log(net_id_list);
// });

// async function fetchStations() {
//   const response = await fetch('data_sensor_status.json');
//   const stations = await response.json();
//   console.log(stations.length);
//   return stations;
// }

// fetchStations();

// get json file and print it to console using vanilla js
// var xhr = new XMLHttpRequest();
// xhr.open('GET', 'data_sensor_status.json', true);
// xhr.onload = function () {
//   var data = JSON.parse(this.response);
//   var net_id_list = [];
//   for (var i = 0; i < data.length; i++) {
//     net_id_list.push(data[i].net_id);
//   }
//   net_id_list = [...new Set(net_id_list)];

//   for (var i = 0; i < net_id_list.length; i++) {
//     document.getElementById('net_id').innerHTML += net_id_list[i];
//   }
//   console.log(net_id_list);
// };
// xhr.send();

function dl_data() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'data_sensor_status.json', true);
  xhr.onload = function () {
    var data = JSON.parse(this.response);
    var net_id_list = [];
    for (var i = 0; i < data.length; i++) {
      net_id_list.push(data[i].net_id);
    }
    net_id_list = [...new Set(net_id_list)];

    for (var i = 0; i < net_id_list.length; i++) {
      document.getElementById('net_id').append(new Option(net_id_list[i], net_id_list[i]));
    }
    console.log(net_id_list);
  };
  xhr.send();
}
dl_data();

// var net_id_list = ['T1', 'T2', 'TS', 'WL', 'ID', 'BY', 'CT'];

// for (var i = 0; i < net_id_list.length; i++) {
//   document.getElementById('net_id').append(new Option(net_id_list[i], net_id_list[i]));
// }
