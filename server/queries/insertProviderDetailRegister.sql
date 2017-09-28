INSERT INTO provider_detail (user_id, name, business_id)
SELECT id, ?, ?
FROM user
WHERE email = ?;
