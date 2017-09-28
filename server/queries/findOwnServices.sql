SELECT service.name AS serviceName, service.description AS serviceDescription, provider_detail.name AS companyName
FROM service
LEFT JOIN provider_detail ON service.provider_id = provider_detail.user_id
WHERE provider_id = ?
