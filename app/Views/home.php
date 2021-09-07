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
            <form action="/download" method="post">
                <div class="form-group">
                    <div class="row">
                        <div class="col-12 col-sm-3 text-right-sm">
                            <label for="start_time">Start Date</label>
                        </div>
                        <div class="col-12 col-sm-9">
                            <input type="datetime-local" class="form-control" id="start" name="start">
                        </div>

                        <div class="col-12 col-sm-3 text-right-sm">
                            <label for="end_time">End Date</label>
                        </div>

                        <div class="col-12 col-sm-9">
                            <input type="datetime-local" class="form-control" id="end" name="end">
                        </div>
                        <div class="col-12 col-sm-3 text-right-sm">
                            <label for="net_id">Network ID</label>
                        </div>
                        <div class="col-12 col-sm-9">
                            <input type="text" class="form-control" id="end" name="end">
                        </div>
                        <div class="col-12 col-sm-3 text-right-sm">
                            <label for="station_id">Station ID</label>
                        </div>
                        <div class="col-12 col-sm-9">
                            <input type="text" class="form-control" id="end" name="end">
                        </div>
                        <div class="col-12 col-sm-3 text-right-sm">
                            <label for="sensor_id">Sensor ID</label>
                        </div>
                        <div class="col-12 col-sm-9">
                            <input type="text" class="form-control" id="end" name="end">
                        </div>
                    </div>
                </div>
                <div class="text-center">
                    <button type="submit" class="btn btn-primary">Download</button>
                </div>
            </form>
        </div>
    </div>
</div>
<?= $this->endSection(); ?>