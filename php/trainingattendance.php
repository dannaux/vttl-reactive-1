<?php
include 'DBConfig.php';
 
    // Create connection
    $conn = new mysqli($HostName, $HostUser, $HostPass, $DatabaseName);
    
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    } 

    $trainingId = $_GET['trainingId'];
    
    function getSessions($conn, $trainingId) {

        $sql = "SELECT trainingsessions.id, 
                date_format(trainingsessions.start, '%d') as dag, 
                date_format(trainingsessions.start, '%m') as maand, 
                date_format(trainingsessions.start, '%y') as jaar 
                FROM trainingsessions 
                WHERE trainingsessions.start > date_sub(CURDATE(), INTERVAL 6 MONTH)
                AND trainingsessions.start < date_add(CURDATE(), INTERVAL 6 MONTH)
                AND trainingsessions.canceled != '1'
                AND trainingsessions.training_id = '$trainingId' 
                ORDER BY jaar, maand, dag";

    
        $result = $conn->query($sql);

        if ($result->num_rows >0) {
            while($row[] = $result->fetch_assoc()) {
                $tem = $row;
                $sessions = $tem;
            }
        } 

        return $sessions;
    }

    
    $training = (object) [
        'id' => $trainingId,
        'sessions' => getSessions($conn, $trainingId)
    ];

    echo json_encode($training);

    $conn->close();
?>
