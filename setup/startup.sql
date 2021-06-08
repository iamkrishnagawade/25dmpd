CREATE DATABASE db_25dmpd;

USE db_25dmpd;

DROP TABLE IF EXISTS cap_price_feeds;

/*
 * Price Feed
 */

CREATE TABLE IF NOT EXISTS cap_price_feeds(
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


CREATE TABLE IF NOT EXISTS sm_companies(
	`disp_id` VARCHAR(25) NOT NULL,
	`sc_subsec` VARCHAR(25) DEFAULT NULL,
	`sc_fullnm` VARCHAR(50) DEFAULT NULL,
	`symbol` VARCHAR(20) DEFAULT NULL,
	`nse_id` VARCHAR(20) DEFAULT NULL,
	`company` VARCHAR(20) DEFAULT NULL,
	`created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` DATETIME on UPDATE CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY(disp_id)
)


CREATE TABLE IF NOT EXISTS cm_prices(
	`id` INT NOT NULL AUTO_INCREMENT,
	`disp_id` VARCHAR(25) not null,
	`se_type` VARCHAR(3) not null,
	`opn`DECIMAL(10, 2) default 0.0,
	`hp` DECIMAL(10, 2) default 0.0,
	`lp` DECIMAL(10, 2) default 0.0,
	`pricecurrent` DECIMAL(10, 2) default 0.0,
	`priceprevclose` DECIMAL(10, 2) default 0.0,
	`pricechange` DECIMAL(10, 2) default 0.0,
	`pricepercentchange`  DECIMAL(10, 2) default 0.0,
	`created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` DATETIME on UPDATE CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY(id),
	FOREIGN KEY (disp_id) REFERENCES sm_companies(disp_id)
)


CREATE TABLE IF NOT EXISTS cm_vol(
	`id` INT NOT NULL AUTO_INCREMENT,
	`disp_id` VARCHAR(25) NOT NULL,
	`se_type` VARCHAR(3) not null,
	`vol` int default 0,
	`created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` DATETIME on UPDATE CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY(id),
	FOREIGN KEY (disp_id) REFERENCES sm_companies(disp_id)
)


CREATE TABLE IF NOT EXISTS cm_qty(
	`id` INT NOT NULL AUTO_INCREMENT,
	`disp_id` VARCHAR(25) NOT NULL,
	`se_type` VARCHAR(3) not null,
	`tot_buy_qty` int default 0,
	`tot_sell_qty` int default 0,
	`created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` DATETIME on UPDATE CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY(id),
	FOREIGN KEY (disp_id) REFERENCES sm_companies(disp_id)
)

CREATE TABLE IF NOT EXISTS cm_pe(
	`id` INT NOT NULL AUTO_INCREMENT,
	`disp_id` VARCHAR(25) NOT NULL,
	`se_type` VARCHAR(3) not null,
	`pe` DECIMAL(10, 2) default 0.0,
	`created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` DATETIME on UPDATE CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY(id),
	FOREIGN KEY (disp_id) REFERENCES sm_companies(disp_id)
)


/*
 * Index
 * 
 */

CREATE TABLE IF NOT EXISTS cap_index(
	`id` INT NOT NULL AUTO_INCREMENT,
	`ind_id` INT NOT NULL,
	`stkexchg` VARCHAR(25) NOT NULL,
	`exchange` VARCHAR(25) NOT NULL,
	`region` VARCHAR(50) NOT NULL,
	`bridgesymbol` VARCHAR(20) NOT NULL,
	`open`DECIMAL(10, 2) default 0.0,
	`high` DECIMAL(10, 2) default 0.0,
	`low` DECIMAL(10, 2) default 0.0,
	`lastprice` DECIMAL(10, 2) default 0.0,
	`prevclose` DECIMAL(10, 2) default 0.0,
	`change` DECIMAL(10, 2) default 0.0,
	`percentchange`  DECIMAL(10, 2) default 0.0,
	`created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` DATETIME on UPDATE CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY(id)
)


CREATE TABLE IF NOT EXISTS sm_index(
	`ind_id` INT NOT NULL,
	`stkexchg` VARCHAR(25) NOT NULL,
	`exchange` VARCHAR(25) NOT NULL,
	`region` VARCHAR(50) NOT NULL,
	`bridgesymbol` VARCHAR(20) NOT NULL,
	`created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` DATETIME on UPDATE CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY(ind_id)
)


CREATE TABLE IF NOT EXISTS in_prices(
	`id` INT NOT NULL AUTO_INCREMENT,
	`ind_id` INT NOT NULL,
	`open`DECIMAL(10, 2) default 0.0,
	`high` DECIMAL(10, 2) default 0.0,
	`low` DECIMAL(10, 2) default 0.0,
	`lastprice` DECIMAL(10, 2) default 0.0,
	`prevclose` DECIMAL(10, 2) default 0.0,
	`change` DECIMAL(10, 2) default 0.0,
	`percentchange`  DECIMAL(10, 2) default 0.0,
	`created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` DATETIME on UPDATE CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY(id),
	FOREIGN KEY (ind_id) REFERENCES sm_index(ind_id)
)


