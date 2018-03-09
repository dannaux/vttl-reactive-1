<?php
include 'DBConfig.php';
 
    // Create connection
    $conn = new mysqli($HostName, $HostUser, $HostPass, $DatabaseName);
    
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    } 
    
    $sql = "SELECT distinct players.vttl_id, users.firstname, users.lastname, diplomas.name, diplomas.id
    FROM meerdaal.players, meerdaal.users, meerdaal.diplomas, meerdaal.trainers
    INNER JOIN trainers_trainings on trainers.id = trainers_trainings.trainer_id
    INNER JOIN trainings on trainings.id = trainers_trainings.training_id
    WHERE trainers.user_id = users.id 
    AND trainers.diploma_id=diplomas.id 
    AND users.player_id = players.id
    ORDER BY users.lastname, users.firstname;";

    
    $result = $conn->query($sql);
    
    if ($result->num_rows >0) {
        while($row[] = $result->fetch_assoc()) {
            $tem = $row;
            $json = json_encode($tem);
        }
    } 
    else {
        echo "No Results Found.";
    }
    echo $json;

    $conn->close();
?>
