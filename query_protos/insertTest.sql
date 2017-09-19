 -- User Table 
INSERT INTO user(email, password, first_name, last_name, phone_number, provider, admin)
VALUES ("matti.koivunen@putkiyritys.fi", "passw05rd", "matti", "koivunen", "022-4445672", true, false);

-- Provider detail
INSERT INTO provider_detail (user_id, name, business_id, reliable)
VALUES (5, "Putki Yritys Oy", "76553-77", true);

-- Service
INSERT INTO service(name, description, price, provider_id)
VALUES("Keittiöputkien korjaus", "Keittön putket uuteen kuntoon.", 250, 5);
