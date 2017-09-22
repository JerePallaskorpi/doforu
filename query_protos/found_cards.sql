Query to get all data to the service cards ( use found service.id )

1.
  SELECT name, description, price, provider_id FROM service WHERE id = [3, 4, 5]
	JOIN address ON provider_id = address.user_id ( SELECT location )
	JOIN provider_detail ON provider_id = provider_detail.user_id ( SELECT name, logo, reliable )



--- Search with service name AND tag name
SELECT *
FROM service
LEFT JOIN service_tag ON service.id = service_tag.service_id
LEFT JOIN tag ON service_tag.tag_id = tag.id
WHERE service.name LIKE '%putki%' || tag.name LIKE '%putki%';
