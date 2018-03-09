<?php
include 'DBConfig.php';
 
    // Create connection
    $conn = new mysqli($HostName, $HostUser, $HostPass, $DatabaseName);
    
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    } 

    $vttlid = $_GET['vttlid'];


    function getTrainings($conn, $vttlid) {
        $sql = "SELECT trainings.* FROM users, players, trainers
        JOIN trainers_trainings ON trainers_trainings.trainer_id = trainers.id
        JOIN trainings ON trainers_trainings.training_id = trainings.id
        WHERE trainers.user_id = users.id
        AND users.player_id = players.id
        AND players.vttl_id = '$vttlid';";
        
        $result = $conn->query($sql);
        
        if ($result->num_rows >0) {
            while($row[] = $result->fetch_assoc()) {
                $tem = $row;
                $trainings = $tem;
            }
        } 

        return $trainings;
    }

    function getTrainerInfo($conn, $vttlid) {
        $sql = "SELECT p.vttl_id, u.firstname, u.lastname, d.name as diploma, u.photo_file_name as imageUrl  
                FROM meerdaal.trainers t, meerdaal.users u, meerdaal.diplomas d, meerdaal.players p 
                WHERE t.user_id = u.id AND t.diploma_id=d.id AND u.player_id = p.id and p.vttl_id = '$vttlid';";
        
        $result = $conn->query($sql);
        
        if ($result->num_rows >0) {
            while($row[] = $result->fetch_assoc()) {
                $tem = $row;
                $trainerInfo = $tem;
            }
        } 

        return $trainerInfo;
    }

    $trainerInfo = getTrainerInfo($conn, $vttlid);

    $trainer = (object) [
        'info' => $trainerInfo[0],
        'trainings' => getTrainings($conn, $vttlid)
    ];

    echo json_encode($trainer);

    $conn->close();
?>
