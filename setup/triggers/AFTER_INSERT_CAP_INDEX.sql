DELIMITER $$

CREATE TRIGGER AFTER_INSERT_CAP_INDEX
AFTER INSERT
ON sm_index FOR EACH ROW
BEGIN
    DECLARE rowcount INT;
   
   	SELECT COUNT(*) 
   	INTO rowcount
   	FROM in_prices
   	WHERE ind_id = NEW.ind_id;
    
    IF rowcount = 0 THEN
        INSERT INTO in_prices (`ind_id`) 
       	VALUES (NEW.ind_id);
    END IF;

END $$

DELIMITER ;