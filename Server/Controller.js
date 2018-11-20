module.exports = {
    Login: (req, res) => {
        console.log('Hit Login Back.')
        const db = req.app.get('db');
        console.log('Passed DB.')
        db.User_Login(req.body.name, req.body.password).then(data => {
            if(data[0]) {
            req.session.user_id = data[0].userid;
            console.log(req.session.userid)
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
    getCharacters: (req, res) => {
        console.log('Hit Register Ctrl.')
        const db = req.app.get('db');
        console.log('Passed DB.')
        db.Get_Characters().then(data => {
            console.log('data', data);
            res.status(200).send(data);
        }).catch(err => {
            console.eog('err', err);
            res.status(500).send(err);
        });
    },
    getCharacter: (req, res) => {
        console.log('Hit getCharacter Back');
        const db = req.app.get('db');
        console.log('Passed DB')
        db.Get_Character(req.params.char_id).then(data => {
            console.log('data', data);
            res.status(200).send(data);
        }).catch(err => {
            console.log('err', err);
            res.status(500).send(err);
        });
    },
    getFactions: (req, res) => {
        console.log('Hit getFactions Ctrl.')
        const db = req.app.get('db');
        console.log('Passed DB.')
        db.Get_Factions().then(data => {
            console.log('data', data);
            res.status(200).send(data);
        }).catch(err => {
            console.eog('err', err);
            res.status(500).send(err);
        });
    },
    getFaction: (req, res) => {
        console.log('Hit getFaction Back.')
        const db = req.app.get('db');
        console.log('Passed DB.')
        db.Get_Faction(req.params.fac_id).then(data => {
            console.log('data', data);
            res.status(200).send(data);
        }).catch(err => {
            console.log('err', err);
            res.status(500).send(err);
        });
    },
    getPlanets: (req, res) => {
        console.log('Hit getPlanets Ctrl.')
        const db = req.app.get('db');
        console.log('Passed DB.')
        db.Get_Planets().then(data => {
            console.log('data', data);
            res.status(200).send(data);
        }).catch(err => {
            console.eog('err', err);
            res.status(500).send(err);
        });
    },
    getPlanet: (req, res) => {
        console.log('Hit getPlanet Back.')
        const db = req.app.get('db');   
        console.log('Passed DB.');
        db.Get_Planet(req.params.plan_id).then(data => {
            console.log('data', data);
            res.status(200).send(data);
        }).catch(err => {
            console.log('err', err);
            res.status(500).send(err);
        });
    },
    getShips: (req, res) => {
        console.log('Hit getShips Ctrl.')
        const db = req.app.get('db');
        console.log('Passed DB.')
        db.Get_Ships().then(data => {
            console.log('data', data);
            res.status(200).send(data);
        }).catch(err => {
            console.eog('err', err);
            res.status(500).send(err);
        });
    },
    getShip: (req, res) => {
        console.log('Hit getShip Back.')
        const db = req.app.get('db');
        console.log('Passed DB.')
        db.Get_Ship(req.params.ship_id).then(data => {
            console.log('data', data);
            res.status(200).send(data);
        }).catch(err => {
            console.log('err', err);
            res.status(500).send(err);
        });
    },
}