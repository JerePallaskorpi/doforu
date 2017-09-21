SELECT title, description, rating, service_review.created_at AS review_date, first_name, last_name
FROM service_review
JOIN user ON service_review.user_id = user.id
WHERE service_id = ?;
