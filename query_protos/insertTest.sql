 -- User Table 
INSERT INTO user(email, password, first_name, last_name, phone_number, provider, admin)
VALUES ("matti.koivunen@putkiyritys.fi", "passw05rd", "matti", "koivunen", "022-4445672", true, false);

-- Provider detail
INSERT INTO provider_detail (user_id, name, business_id, reliable)
VALUES (5, "Putki Yritys Oy", "76553-77", true);

-- Service
INSERT INTO service(name, description, price, provider_id)
VALUES("Katonpesu", "Laitamme kattosi kiiltämään", 630, 5);

-- Tag
INSERT INTO tag(name)
VALUES("katto"), ("ikkuna"), ("putki"), ("ilmanvaihto"), ("lattia"); 

-- Service tags
INSERT INTO service_tag(tag_id, service_id)
VALUES(1,3);

-- Review
INSERT INTO service_review(service_id, user_id, rating, title, description)
VALUES(2, 1, 5, "Loistavaa", "Loistavaa palvelua"), (2, 3, 4, "Ihan ok", "Ihan ok palvelua");

-- Address
INSERT INTO address(user_id, address, zip, city)
VALUES(5, "Yrityskatu 3", 24100, "Salo");
