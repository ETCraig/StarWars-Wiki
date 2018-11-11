CREATE TABLE SW_Users(
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    faction VARCHAR(50),
    image TEXT,
    password VARCHAR(54)
);

CREATE TABLE SW_Characters(
    char_id SERIAL PRIMARY KEY,
    name VARCHAR(80),
    faction VARCHAR(50),
    fac_image TEXT,
    side VARCHAR(50),
    rank VARCHAR(20),
    image TEXT,
    weapon VARCHAR(50),
    w_image TEXT,
    bio TEXT,
    power VARCHAR(100),
    period VARCHAR(50),
    per_image TEXT,
    apperances TEXT
);

CREATE TABLE SW_Ships(
    ship_id SERIAL PRIMARY KEY,
    name VARCHAR(80),
    faction VARCHAR(50),
    fac_image TEXT,
    pilot VARCHAR(80),
    rank VARCHAR(20),
    image TEXT,
    bio TEXT
);

CREATE TABLE SW_Planets(
    plan_id SERIAL PRIMARY KEY,
    name VARCHAR(80),
    faction VARCHAR(50),
    fac_image TEXT,
    naitives VARCHAR(50),
    location VARCHAR(80),
    image TEXT,
    bio TEXT
);

CREATE TABLE SW_Factions(
    fac_id SERIAL PRIMARY KEY,
    name VARCHAR(80),
    faction VARCHAR(50),
    fac_image TEXT,
    founder VARCHAR(80),
    rank VARCHAR(20),
    image TEXT,
    bio TEXT
);

CREATE TABLE SW_FavoriteChar(
    fav_id SERIAL PRIMARY KEY,
    account INT,
    char INT,
    foreign key (account) references SW_Users (user_id),
    foreign key (char) references SW_Characters (char_id)
);

CREATE TABLE SW_FavoriteFac(
    fav_id SERIAL PRIMARY KEY,
    account INT,
    fac INT,
    foreign key (account) references SW_Users (user_id),
    foreign key (fac) references SW_Factions (fac_id)
);

CREATE TABLE SW_FavoritePlan(
    fav_id SERIAL PRIMARY KEY,
    account INT,
    plan INT,
    foreign key (account) references SW_Users (user_id),
    foreign key (plan) references SW_Planets (plan_id)
);

CREATE TABLE SW_FavoriteShip(
    fav_id SERIAL PRIMARY KEY,
    account INT,
    ship INT,
    foreign key (account) references SW_Users (user_id),
    foreign key (ship) references SW_Ships (ship_id)
);