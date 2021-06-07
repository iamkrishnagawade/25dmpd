DELIMITER $$

CREATE TRIGGER UPDATE_CM_VOL
AFTER INSERT
ON cap_price_feeds FOR EACH ROW
BEGIN
    DECLARE rowcount INT;
   
   	SELECT COUNT(*) 
   	INTO rowcount
   	FROM cm_vol
   	WHERE disp_id = NEW.disp_id
   		AND se_type = NEW.se_type;
   
    IF rowcount = 1 THEN
        UPDATE `cm_vol` SET 
        	`vol` = NEW.vol
        WHERE disp_id = NEW.disp_id
   			AND se_type = NEW.se_type;
    END IF;

END $$

DELIMITER ;