INSERT INTO SW_Users ( name, password ) 
VALUES ( $1, $2 ) returning *;