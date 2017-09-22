SELECT service.id AS service_id, service.name AS service_name, provider_detail.name AS provider_name, price, service.description AS service_description, city, ROUND(avg(rating), 1) as rating, count(rating) as rating_amount
FROM service 
JOIN address ON service.provider_id = address.user_id
LEFT JOIN provider_detail ON service.provider_id = provider_detail.user_id
LEFT JOIN service_review ON service.id = service_review.service_id
LEFT JOIN service_tag ON service.id = service_tag.service_id 
LEFT JOIN tag ON service_tag.tag_id = tag.id 
WHERE service.id = ?
GROUP BY service.name
ORDER BY service.created_at DESC;
