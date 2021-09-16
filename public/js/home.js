function generateDownloadLink() {
    var starttm = document.myform.start_time.value.replace('T', '%20')+':00';
    var endtm = document.myform.end_time.value.replace('T', '%20')+':00';
    var netid = document.myform.netid.value;
    var staid = document.myform.staid.value;
    var sensorid = document.myform.sensorid.value;
  
    var hasil = `http://172.19.0.163/tntapi/archive/fetchbydate?starttm=${starttm}&endtm=${endtm}&netid=${netid}&staid=${staid}&sensorid=${sensorid}`;
    document.getElementById('download-link').href = hasil;
    document.getElementById('download-link').innerHTML = hasil;
  }

  function downloadCsv() {
    csvLink = document.getElementById('download-link').href+'&format=CSV';
    document.getElementById('download-button').href = csvLink;
    document.getElementById('download-link').click();
  }


// var net_id_list = ['T1', 'T2', 'TS', 'WL', 'ID', 'BY', 'CT'];
var net_id_list =[];
var sta_id_list = [];
var sensor_id_list = [];


// parse data_sensor_status.json and print it to console using jquery
$.getJSON('data_sensor_status.json', function(data) {
      $.each(data, function(index, value) {
        net_id_list.push(value.net_id);
        sta_id_list.push(value.station_id);
        sensor_id_list.push(value.sensor_type);
      });
      net_id_list = [... new Set(net_id_list)];
      sta_id_list = [... new Set(sta_id_list)];
      sensor_id_list = [... new Set(sensor_id_list)];
      console.log(net_id_list)
});

// populate net_id select option with net_id_list using jquery
$(document).ready(function() {
  $.each(net_id_list, function(index, value) {
      $('#net_id').append($('<option>', {
          value: value,
          text: value
      }));
  }
  
  
  );
});