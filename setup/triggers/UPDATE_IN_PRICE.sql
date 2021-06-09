DELIMITER $$

CREATE TRIGGER UPDATE_IN_PRICE
AFTER INSERT
ON cap_index FOR EACH ROW
BEGIN
    DECLARE rowcount INT;
   
   	SELECT COUNT(*) 
   	INTO rowcount
   	FROM in_prices
   	WHERE ind_id = NEW.ind_id;
   
    IF rowcount = 1 THEN
        UPDATE `in_prices` SET 
        	`open` = NEW.open,
        	`high` = NEW.high,
        	`low` = NEW.low,
        	`lastprice` = NEW.lastprice,
        	`prevclose` = NEW.prevclose,
        	`change` = NEW.change,
        	`percentchange` = NEW.percentchange
        WHERE ind_id = NEW.ind_id;
       
    END IF;

END $$

DELIMITER ;