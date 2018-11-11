module.exports = {
    Login: (req, res) => {
        console.log('Hit Login Back.')
        const db = req.app.get('db');
        console.log('Passed DB.')
        db.User_Login(req.body.name, req.body.password).then(data => {
            if(data[0]) {
            req.session.user_id = data[0].userid;
            res.status(200).send(data);
        } else {
            return res.status(403).send('User not found. Access denied');}
        });
    }, 
    Register: (req, res) => {
        console.log('Hit Register Ctrl.')
        const db = req.app.get('db');
        console.log('Passed DB.')
        db.Get_Users(req.body.name).then( (usernameRes) => {
            if( usernameRes[0] ) {
            res.status(403).send('This Username already exists.');
        } else {
            db.User_Reg(req.body.name, req.body.password).then(data => {
            req.session.user_id = data[0].userid;
            res.status(200).send(data);
        }).catch(err => {
            console.log(err) 
            res.status(500).send(err)})
            }
        });
    },
}