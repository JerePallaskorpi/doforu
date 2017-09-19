CREATE TABLE `user` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`email` varchar(255) NOT NULL UNIQUE,
	`password` varchar(16) NOT NULL,
	`first_name` varchar(255) NOT NULL,
	`last_name` varchar(255) NOT NULL,
	`phone_number` varchar(255),
	`provider` BOOLEAN NOT NULL DEFAULT 0,
	`admin` BOOLEAN DEFAULT 0,
	`created_at` DATETIME NOT NULL DEFAULT NOW(),
	`last_online_at` DATETIME NOT NULL DEFAULT NOW(),
	PRIMARY KEY (`id`)
);

CREATE TABLE `service` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`name` varchar(255) NOT NULL,
	`description` varchar(255) NOT NULL,
	`price` INT NOT NULL,
	`price_detail` varchar(255) NOT NULL,
	`active` BOOLEAN NOT NULL DEFAULT 1,
	`available_always` BOOLEAN DEFAULT 0,
	`visited_amount` INT NOT NULL DEFAULT 0,
	`created_at` DATETIME NOT NULL DEFAULT NOW(),
	`provider_id` INT NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `service_review` (
	`service_id` INT NOT NULL,
	`user_id` INT NOT NULL,
	`created_at` DATETIME NOT NULL DEFAULT NOW(),
	`rating` INT NOT NULL,
	`title` varchar(255),
	`description` varchar(255),
	PRIMARY KEY (`service_id`,`user_id`)
);

CREATE TABLE `order` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`status` varchar(255) NOT NULL,
	`created_at` DATETIME NOT NULL,
	`last_action_at` DATETIME NOT NULL DEFAULT NOW(),
	`offer_at` DATETIME,
	`work_at` DATETIME,
	`end_at` DATETIME,
	`service_id` INT NOT NULL,
	`user_id` INT NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `user_place` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`address` varchar(255) NOT NULL,
	`title` varchar(255) NOT NULL,
	`zip` varchar(255) NOT NULL,
	`country` varchar(255) NOT NULL,
	`area` INT NOT NULL,
	`user_id` INT NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `service_image` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`image_url` varchar(255) NOT NULL,
	`created_at` TIMESTAMP NOT NULL DEFAULT NOW(),
	`service_id` INT NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `tag` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`name` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `service_tag` (
	`tag_id` INT NOT NULL,
	`service_id` INT NOT NULL,
	PRIMARY KEY (`tag_id`,`service_id`)
);

CREATE TABLE `search_tag` (
	`name` varchar(255) NOT NULL,
	`amount` INT NOT NULL,
	PRIMARY KEY (`name`)
);

CREATE TABLE `provider_detail` (
	`user_id` INT NOT NULL,
	`name` varchar(255) NOT NULL,
	`business_id` varchar(255) NOT NULL,
	`logo_url` varchar(255) NOT NULL,
	`reliable` BOOLEAN NOT NULL DEFAULT 0,
	`media_website` varchar(255) NOT NULL,
	`media_facebook` varchar(255) NOT NULL,
	`media_twitter` varchar(255) NOT NULL,
	PRIMARY KEY (`user_id`)
);

CREATE TABLE `address` (
	`user_id` INT NOT NULL,
	`address` varchar(255) NOT NULL,
	`zip` INT NOT NULL,
	`city` varchar(255) NOT NULL,
	`country` varchar(255) NOT NULL DEFAULT 'Finland',
	PRIMARY KEY (`user_id`)
);

CREATE TABLE `order_message` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`title` varchar(255) NOT NULL,
	`message` varchar(255) NOT NULL,
	`created_at` DATE NOT NULL DEFAULT NOW(),
	`user_id` INT NOT NULL,
	`order_id` INT NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `search` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`name` varchar(255) NOT NULL,
	`search_at` DATETIME NOT NULL DEFAULT NOW(),
	PRIMARY KEY (`id`)
);

CREATE TABLE `service_visit` (
	`user_id` INT NOT NULL,
	`service_id` INT NOT NULL,
	PRIMARY KEY (`user_id`,`service_id`)
);

CREATE TABLE `user_detail` (
	`user_id` INT NOT NULL,
	`image_url` varchar(255) NOT NULL,
	`language` varchar(255) NOT NULL,
	`contact_by_email` BOOLEAN NOT NULL DEFAULT 1,
	`contact_by_phone` BOOLEAN NOT NULL DEFAULT 1,
	PRIMARY KEY (`user_id`)
);

ALTER TABLE `service` ADD CONSTRAINT `service_fk0` FOREIGN KEY (`provider_id`) REFERENCES `user`(`id`);

ALTER TABLE `service_review` ADD CONSTRAINT `service_review_fk0` FOREIGN KEY (`service_id`) REFERENCES `service`(`id`);

ALTER TABLE `service_review` ADD CONSTRAINT `service_review_fk1` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`);

ALTER TABLE `order` ADD CONSTRAINT `order_fk0` FOREIGN KEY (`service_id`) REFERENCES `service`(`id`);

ALTER TABLE `order` ADD CONSTRAINT `order_fk1` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`);

ALTER TABLE `user_place` ADD CONSTRAINT `user_place_fk0` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`);

ALTER TABLE `service_image` ADD CONSTRAINT `service_image_fk0` FOREIGN KEY (`service_id`) REFERENCES `service`(`id`);

ALTER TABLE `service_tag` ADD CONSTRAINT `service_tag_fk0` FOREIGN KEY (`tag_id`) REFERENCES `tag`(`id`);

ALTER TABLE `service_tag` ADD CONSTRAINT `service_tag_fk1` FOREIGN KEY (`service_id`) REFERENCES `service`(`id`);

ALTER TABLE `provider_detail` ADD CONSTRAINT `provider_detail_fk0` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`);

ALTER TABLE `address` ADD CONSTRAINT `address_fk0` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`);

ALTER TABLE `order_message` ADD CONSTRAINT `order_message_fk0` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`);

ALTER TABLE `order_message` ADD CONSTRAINT `order_message_fk1` FOREIGN KEY (`order_id`) REFERENCES `order`(`id`);

ALTER TABLE `service_visit` ADD CONSTRAINT `service_visit_fk0` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`);

ALTER TABLE `service_visit` ADD CONSTRAINT `service_visit_fk1` FOREIGN KEY (`service_id`) REFERENCES `service`(`id`);

ALTER TABLE `user_detail` ADD CONSTRAINT `user_detail_fk0` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`);
