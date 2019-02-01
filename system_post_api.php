<?php
if(isset($_POST['response'])){


$response =  $_POST["response"];
$obj = json_encode($response);
//echo count($response);
// echo $obj;
$data = $response;
//var_dump($data);
$serverName = "localhost";
$userName = "root";
$userPassword = "";
$dbName = "election_db1_test";
$charSet = "utf8";
try {

 $pdo = new PDO("mysql:host=$serverName;dbname=$dbName", $userName, $userPassword);
 $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    //echo "Connected!: ". "<br/>";
//insert
    
} catch (PDOException $e) {
    print "Error!: " . $e->getMessage() . "<br/>";
    die();
}

try{
    //$stmt = $pdo->prepare("INSERT INTO photo (albumId, id, thumbnailUrl, title, url) VALUES (?,?,?,?,?)");
    $stmt = $pdo->prepare("INSERT INTO photos (albumId, id, thumbnailUrl, title, url) VALUES (:albumId,:id,:thumbnailUrl,:title,:url) 
    ON DUPLICATE KEY UPDATE albumId= :albumId_ondup,
    thumbnailUrl= :thumbnailUrl_ondup,
    title= :title_ondup,
    url= :url_ondup");
    $pdo->beginTransaction();
    foreach ($data as $rows){
        $id = $rows["id"];
        $albumId = $rows["albumId"];
        $thumbnailUrl = $rows["thumbnailUrl"];
        $title = $rows["title"];
        $url = $rows["url"];

        $stmt->bindparam(":id", $id);
        $stmt->bindparam(":albumId", $albumId);
        $stmt->bindparam(":albumId_ondup", $albumId);
        $stmt->bindparam(":thumbnailUrl", $thumbnailUrl); 
        $stmt->bindparam(":thumbnailUrl_ondup", $thumbnailUrl);
        $stmt->bindparam(":title", $title); 
        $stmt->bindparam(":title_ondup", $title);
        $stmt->bindparam(":url", $url); 
        $stmt->bindparam(":url_ondup", $url);
        $stmt->execute();
    }
    $pdo->commit();
    // foreach ($data as $row)
    // {
    //     $stmt->execute($row);
    // }
    // $pdo->commit();
    echo '<script>console.log("Insert or update success")</script>';
    echo 'Insert or update success';
}
catch (PDOException $e) {
    print "Error!: " . $e->getMessage() . "<br/>";
    echo '<script>console.log("Error to insert or update")</script>';
    die();
}
}
?>