<?php   
require 'includes/header.php';

?>

<link href="vendor/progress-bar/css/static.css" rel="stylesheet"/> 
<style>
.loading-progress{
    width:100%;
}
</style>
          <!-- Breadcrumbs-->
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="index.php">Dashboard</a>
            </li>
            <li class="breadcrumb-item active">Get API Data</li>
          </ol>

          <!-- Page Content -->
          <h1>System Get API data</h1>
          <hr>
          <p>This is a great starting point for new custom pages.</p>
          <div class="row">
             <div class="col-md-12">
                <p>
                    <!-- <button class="btn btn-success" onclick="listItems()">Start</button>
                    <button class="btn btn-danger" onclick="Exit()">Stop</button> -->
                </p>
             </div>
          </div>
          <div class="row">
            <div class="col-md-8">
            Progress 5000 photos
            <div class="loading-progress"></div>
            </div>
            <div class="col-md-4">
            <p id="detail"></p>
            </div>
             <div class="col-md-8">
            Progress 500 Comment
            <div class="loading-progress2"></div>
            </div>

       


          </div>

      <?php   require 'includes/footer.php';?>
      <script src="js/get_api/url_1.js"></script>
        <script src="js/get_api/app/get_api_data_example_progress.js"></script> 
        <script src="js/get_api/app/get_api_data_example.js"></script> 
<script src="vendor/progress-bar/js/static.min.js"></script>
<script src="vendor/progress-bar/js/jquery.progresstimer.js"></script>
<!-- <script>
    var progress = $(".loading-progress").progressTimer({
        timeLimit: 60,
        onFinish: function () {
            alert('completed!');
        }
    });
    $.ajax({
       url:"http://localhost/"
    }).error(function(){
        progress.progressTimer('error', {
            errorText:'ERROR!',
            onFinish:function(){
                alert('There was an error processing your information!');
            }
        });
    }).done(function(){
        progress.progressTimer('complete');
    });
</script> -->

  