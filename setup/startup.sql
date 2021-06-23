USE db_25dmpd;

CREATE TABLE IF NOT EXISTS cp_price_feeds(
	`id` INT NOT NULL AUTO_INCREMENT,
	`disp_id` VARCHAR(25) NOT NULL,
	`se_type` VARCHAR(3) NOT NULL,
	`sc_subsec` VARCHAR(25) NOT NULL,
	`sc_fullnm` VARCHAR(50) NOT NULL,
	`symbol` VARCHAR(20) NOT NULL,
	`nse_id` VARCHAR(20) NOT NULL,
	`company` VARCHAR(20) NOT NULL,
	`opn`DECIMAL(10, 2) default 0.0,
	`hp` DECIMAL(10, 2) default 0.0,
	`lp` DECIMAL(10, 2) default 0.0,
	`pricecurrent` DECIMAL(10, 2) default 0.0,
	`priceprevclose` DECIMAL(10, 2) default 0.0,
	`pricechange` DECIMAL(10, 2) default 0.0,
	`pricepercentchange`  DECIMAL(10, 2) default 0.0,
	`vol` int default 0,
	`tot_buy_qty` int default 0,
	`tot_sell_qty` int default 0,
	`pe` DECIMAL(10, 2) default 0.0,
	`created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` DATETIME on UPDATE CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY(id)
)

CREATE TABLE IF NOT EXISTS cp_company(
	`disp_id` VARCHAR(25) NOT NULL,
	`is_active` INT(1) DEFAULT 0,
	`created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` DATETIME on UPDATE CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY(disp_id)
)

CREATE TABLE IF NOT EXISTS com_details(
	`id` INT NOT NULL AUTO_INCREMENT,
	`disp_id` VARCHAR(25) NOT NULL,
	`sc_subsec` VARCHAR(25) DEFAULT NULL,
	`sc_fullnm` VARCHAR(50) DEFAULT NULL,
	`symbol` VARCHAR(20) DEFAULT NULL,
	`nse_id` VARCHAR(20) DEFAULT NULL,
	`company` VARCHAR(20) DEFAULT NULL,
	`created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` DATETIME on UPDATE CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY(id),
	FOREIGN KEY (disp_id) REFERENCES cp_company(disp_id)
)


CREATE TABLE IF NOT EXISTS com_price_feeds(
	`id` INT NOT NULL AUTO_INCREMENT,
	`disp_id` VARCHAR(25) NOT NULL,
	`se_type` VARCHAR(3) NOT NULL,
	`spying` INT(1) DEFAULT(0),
	`opn`DECIMAL(10, 2) default 0.0,
	`hp` DECIMAL(10, 2) default 0.0,
	`lp` DECIMAL(10, 2) default 0.0,
	`pricecurrent` DECIMAL(10, 2) default 0.0,
	`priceprevclose` DECIMAL(10, 2) default 0.0,
	`pricechange` DECIMAL(10, 2) default 0.0,
	`pricepercentchange`  DECIMAL(10, 2) default 0.0,
	`vol` int default 0,
	`tot_buy_qty` int default 0,
	`tot_sell_qty` int default 0,
	`pe` DECIMAL(10, 2) default 0.0,
	`created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` DATETIME on UPDATE CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY(id),
	FOREIGN KEY (disp_id) REFERENCES cp_company(disp_id)
)

