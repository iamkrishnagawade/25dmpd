DELIMITER $$

CREATE TRIGGER BEFORE_INSERT_CAP_INDEX
BEFORE INSERT
ON cap_index FOR EACH ROW
BEGIN
    DECLARE rowcount INT;
   
   	SELECT COUNT(*) 
   	INTO rowcount
   	FROM sm_index
   	WHERE ind_id = NEW.ind_id;
    
    IF rowcount = 0 THEN
        INSERT INTO sm_index (`ind_id`, `stkexchg`, `exchange`, `region`, `bridgesymbol`) 
       	VALUES (NEW.ind_id, NEW.stkexchg, NEW.exchange, NEW.region, NEW.bridgesymbol);
    END IF; 

END $$

DELIMITER ;