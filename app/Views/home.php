<?= $this->extend('layouts/template'); ?>

<?= $this->section('content'); ?>
<div class="container div-content">
    <div class="row">
        <div class="col">
            <div class="text-center">
                <h1>
                    Tide Gauge Data Downloader
                </h1>
            </div>
            <form name="myform" action="" method="get" onchange="generateDownloadLink()">
                <div class="form-group">
                    <div class="row">
                        <div class="col-12 col-sm-3 text-right-sm">
                            <label for="start_time">Start Date</label>
                        </div>
                        <div class="col-12 col-sm-9">
                            <input type="datetime-local" class="form-control" id="start_time" name="starttm">
                        </div>

                        <div class="col-12 col-sm-3 text-right-sm">
                            <label for="end_time">End Date</label>
                        </div>

                        <div class="col-12 col-sm-9">
                            <input type="datetime-local" class="form-control" id="end_time" name="endtm">
                        </div>
                        <div class="col-12 col-sm-3 text-right-sm">
                            <label for="net_id">Network ID</label>
                        </div>
                        <div class="col-12 col-sm-9">
                            <select class="form-control selectpicker" data-live-search="true" id="net_id" name="netid">
                                <option value="">Select Network ID</option>
                            </select>
                        </div>
                        <div class="col-12 col-sm-3 text-right-sm">
                            <label for="station_id">Station ID</label>
                        </div>
                        <div class="col-12 col-sm-9">
                            <select class="form-control selectpicker" data-live-search="true" id="station_id" name="staid">
                                <option value="">Select Station ID</option>
                            </select>
                        </div>
                        <div class="col-12 col-sm-3 text-right-sm">
                            <label for="sensor_id">Sensor ID</label>
                        </div>
                        <div class="col-12 col-sm-9">
                            <select class="form-control selectpicker" data-live-search="true" id="sensor_id" name="sensorid">
                                <option value="">Select Sensor ID</option>
                            </select>
                        </div>
                    </div>
                </div>
            </form>
            <div class="text-center">
                <button class="btn btn-success" onclick="downloadCsv();" id="download-button">CSV</button>
            </div>
            <div class="container text-center download-link">
                <a id=download-link></a>
            </div>
            <p id="test"></p>
        </div>
    </div>
</div>
<?= $this->endSection(); ?>