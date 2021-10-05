function generateDownloadLink() {
  var starttm = document.myform.start_time.value.replace('T', '%20') + ':00';
  var endtm = document.myform.end_time.value.replace('T', '%20') + ':00';
  var netid = document.myform.netid.value;
  var staid = document.myform.staid.value;
  var sensortype = document.myform.sensortype.value;

  var hasil = `http://172.19.0.163/tntapi/archive/fetchbydate?starttm=${starttm}&endtm=${endtm}&netid=${netid}&staid=${staid}&sensortype=${sensortype}`;
  document.getElementById('download-link').href = hasil;
  document.getElementById('download-link').innerHTML = hasil;
}

function downloadCsv() {
  csvLink = document.getElementById('download-link').href + '&format=CSV';
  document.getElementById('download-button').href = csvLink;
  document.getElementById('download-link').click();
}

var net_id = document.getElementById('net_id');
var station_id = document.getElementById('station_id');
var sensor_type = document.getElementById('sensor_type');

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
    net_id.append(new Option(net_id_list[i], net_id_list[i]));
  }
  console.log(net_id_list);
};
xhr.send();

// filter station_id based on net_id
net_id.addEventListener('change', function () {
  var selected_option = this.value;
  console.log(selected_option);
  station_id_list = [];

  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'data_sensor_status.json', true);

  xhr.onload = function () {
    var data = JSON.parse(this.response);
    data.forEach(function (item) {
      if (item.net_id === selected_option) {
        station_id_list.push(item.station_id);
      }
    });
    station_id_list = [...new Set(station_id_list)];
    console.log(station_id_list);
    while (station_id.options.length > 0) {
      station_id.options.remove(0);
    }
    for (var i = 0; i < station_id_list.length; i++) {
      station_id.append(new Option(station_id_list[i], station_id_list[i]));
    }
  };
  xhr.send();
});

// filter station_id based on net_id
station_id.addEventListener('change', function () {
  var selected_option = this.value;
  console.log(selected_option);
  sensor_type_list = [];

  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'data_sensor_status.json', true);

  xhr.onload = function () {
    var data = JSON.parse(this.response);
    data.forEach(function (item) {
      if (item.station_id === selected_option) {
        sensor_type_list.push(item.sensor_type);
      }
    });
    sensor_type_list = [...new Set(sensor_type_list)];
    console.log(sensor_type_list);
    while (sensor_type.options.length > 0) {
      sensor_type.options.remove(0);
    }
    for (var i = 0; i < sensor_type_list.length; i++) {
      sensor_type.append(new Option(sensor_type_list[i], sensor_type_list[i]));
    }
  };
  xhr.send();
});
