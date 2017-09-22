Query for finding all services with name AND with tag name

1.
  User search for "ilmanvaihto"

2.
  Save "ilmanvaihto" and timestamp to "search -table"
  Save "ilmanvaihto" to "search_tag -table" ( if search.name does not exist, create new, if search exists THEN ++amount )

3.
  Query for "Service -table", where nimi like %ilmanvaihto%
	JOIN "Service_tag -table" where service.id = service_tag.service_id ( get tag_id )
	JOIN "tag -table" where tag.id = service_tag.tag_id ( tag.name LIKE %ilmanvaihto% )

4.
  Query returns all found service.id
