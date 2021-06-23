DELIMITER $$

CREATE TRIGGER UPDATE_COM_PRICE_FEEDS
AFTER INSERT
ON cp_price_feeds FOR EACH ROW
BEGIN
    DECLARE rowcount INT;
   
   	SELECT COUNT(*) 
   	INTO rowcount
   	FROM com_price_feeds
   	WHERE disp_id = NEW.disp_id
   		AND se_type = NEW.se_type;
   
    IF rowcount = 1 THEN
        UPDATE `com_price_feeds` SET 
        	`opn` = NEW.opn,
        	`hp` = NEW.hp,
        	`lp` = NEW.lp,
        	`pricecurrent` = NEW.pricecurrent,
        	`priceprevclose` = NEW.priceprevclose,
        	`pricechange` = NEW.pricechange,
        	`pricepercentchange` = NEW.pricepercentchange,
        	`tot_buy_qty` = NEW.tot_buy_qty,
        	`tot_sell_qty` = NEW.tot_sell_qty,
        	`vol` = NEW.vol,
        	`pe` = NEW.pe,
			`spying` = 1
        WHERE disp_id = NEW.disp_id
   			AND se_type = NEW.se_type;
    END IF;

END $$

DELIMITER ;