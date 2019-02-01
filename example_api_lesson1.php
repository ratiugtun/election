<?php   
require 'includes/header.php';
?>

          <!-- Breadcrumbs-->
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="get_api_data_example.php">Get API Data</a>
            </li>
            <li class="breadcrumb-item active">Api Lesson 1 : Get Data</li>
          </ol>

          <!-- Page Content -->
          <h1>API Lesson 1 : Get Data</h1>
          <hr>
          <button type="button" class="btn btn-secondary btn-sm" onclick="return listItems();">Reload</button>
          <div class="col-xs-12">
          <table class=" list-item-table"  width="100%" cellspacing="0">
                  <thead>
                    <tr>
                      <th width="91">PostId</th>
                      <th width="91">ID</th>
                      <th width="91">name</th>
                      <th width="91">email</th>
                      <th width="91">body</th>
                    </tr>
                  </thead>
                  <tbody>
                  <!-- <tr>
                                        <td colspan="6">Loading&hellip;</td>
                    </tr> -->
                  </tbody>
                </table> 

                    <!-- <h1>PHP API test  <button type="button" class="btn btn-secondary btn-sm" onclick="return listItems();">Reload</button></h1>
                        <div class="form-result-placeholder"></div>
                        <div class="table-responsive">
                            <table class="table table-bordered list-item-table" id="dataTables-example">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>City</th>
                                        <th>House</th>
                                        <th>Year</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td colspan="6">Loading&hellip;</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                    
                </div><!--.col-*-->
   
      <?php   require 'includes/footer.php';?>
      <script src="js/get_api/url_1.js"></script>
        <script src="js/get_api/app/get_api_data_example.js"></script>
        <!-- <script src="assets/js/tether.min.js"></script> -->
        
        <script>
    $(document).ready(function() {
        $('#dataTables-api_example').DataTable({
            responsive: true
        });
    });
    </script>
    <script>
    $(document).ready(function() {
        $('#dataTables-example').DataTable({
            responsive: true
        });
    });
    </script>
    

