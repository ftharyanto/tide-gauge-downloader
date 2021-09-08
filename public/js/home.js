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