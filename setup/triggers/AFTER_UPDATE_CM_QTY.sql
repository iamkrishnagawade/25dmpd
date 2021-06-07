DELIMITER $$

CREATE TRIGGER UPDATE_CM_QTY
AFTER INSERT
ON cap_price_feeds FOR EACH ROW
BEGIN
    DECLARE rowcount INT;
   
   	SELECT COUNT(*) 
   	INTO rowcount
   	FROM cm_qty
   	WHERE disp_id = NEW.disp_id
   		AND se_type = NEW.se_type;
   
    IF rowcount = 1 THEN
        UPDATE `cm_qty` SET 
        	`tot_buy_qty` = NEW.tot_buy_qty,
        	`tot_sell_qty` = NEW.tot_sell_qty
        WHERE disp_id = NEW.disp_id
   			AND se_type = NEW.se_type;
    END IF;

END $$

DELIMITER ;