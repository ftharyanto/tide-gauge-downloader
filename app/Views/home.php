<?= $this->extend('layouts/template'); ?>

<?= $this->section('content'); ?>
<div class="container div-content">
    <div class="row">
        <div class="text-center">
            <h1>
                Tide Gauge Data Downloader
            </h1>
        </div>
        <div class="col-3">

            <form name="myform" action="" method="get" onchange="generateDownloadLink()">
                <div class="form-group">
                    <div class="row">
                        <div class="col-12 col-sm-4 text-right-sm">
                            <label for="start_time">Start Date</label>
                        </div>
                        <div class="col-12 col-sm-8">
                            <input type="datetime-local" class="form-control" id="start_time" name="starttm">
                        </div>

                        <div class="col-12 col-sm-4 text-right-sm">
                            <label for="end_time">End Date</label>
                        </div>

                        <div class="col-12 col-sm-8">
                            <input type="datetime-local" class="form-control" id="end_time" name="endtm">
                        </div>
                        <div class="col-12 col-sm-4 text-right-sm">
                            <label for="net_id">Network ID</label>
                        </div>
                        <div class="col-12 col-sm-8">
                            <select class="form-control select" data-live-search="true" id="net_id" name="netid">
                                <option selected>Select Network ID</option>
                            </select>
                        </div>
                        <div class="col-12 col-sm-4 text-right-sm">
                            <label for="station_id">Station ID</label>
                        </div>
                        <div class="col-12 col-sm-8">
                            <select class="form-control select" data-live-search="true" id="station_id" name="staid">
                                <option value="">Select Station ID</option>
                            </select>
                        </div>
                        <div class="col-12 col-sm-4 text-right-sm">
                            <label for="sensor_type">Sensor ID</label>
                        </div>
                        <div class="col-12 col-sm-8">
                            <select class="form-control select" data-live-search="true" id="sensor_type" name="sensortype">
                                <option value="">Select Sensor ID</option>
                            </select>
                        </div>
                    </div>
                </div>
            </form>
            <div class="text-center">
                <a id="download-btn-link">
                    <button class="btn btn-success" id="download-btn">Download CSV</button>
                </a>
            </div>
            <div class="container text-center download-link mt-2">
                <a id=download-link></a>
            </div>
        </div>
        <div class="col-9" id="mapid"></div>
    </div>
</div>
<?= $this->endSection(); ?>