SELECT u.firstname, u.lastname, d.name, p.vttl_id  
FROM meerdaal.trainers t, meerdaal.users u, meerdaal.diplomas d, meerdaal.players p 
WHERE t.user_id = u.id AND t.diploma_id=d.id AND u.player_id = p.id ORDER BY d.id;