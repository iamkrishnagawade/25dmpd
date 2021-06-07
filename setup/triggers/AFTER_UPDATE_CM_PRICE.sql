DELIMITER $$

CREATE TRIGGER UPDATE_CM_PRICE
AFTER INSERT
ON cap_price_feeds FOR EACH ROW
BEGIN
    DECLARE rowcount INT;
   
   	SELECT COUNT(*) 
   	INTO rowcount
   	FROM cm_prices
   	WHERE disp_id = NEW.disp_id
   		AND se_type = NEW.se_type;
   
    IF rowcount = 1 THEN
        UPDATE `cm_prices` SET 
        	`opn` = NEW.opn,
        	`hp` = NEW.hp,
        	`lp` = NEW.lp,
        	`pricecurrent` = NEW.pricecurrent,
        	`priceprevclose` = NEW.priceprevclose,
        	`pricechange` = NEW.pricechange,
        	`pricepercentchange` = NEW.pricepercentchange
        WHERE disp_id = NEW.disp_id
   			AND se_type = NEW.se_type;
    END IF;

END $$

DELIMITER ;