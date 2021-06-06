DELIMITER $$

CREATE TRIGGER BEFORE_INSERT_CAP_PRICE_FEEDS
BEFORE INSERT
ON cap_price_feeds FOR EACH ROW
BEGIN
    DECLARE rowcount INT;
   
   	SELECT COUNT(*) 
   	INTO rowcount
   	FROM sm_companies
   	WHERE disp_id = NEW.disp_id;
    
    IF rowcount = 0 THEN
        INSERT INTO sm_companies (`disp_id`, `sc_subsec`, `sc_fullnm`, `symbol`, `nse_id`, `company`) 
       	VALUES (NEW.disp_id, NEW.sc_subsec, NEW.sc_fullnm, NEW.symbol, NEW.nse_id, NEW.company);
    END IF; 

END $$

DELIMITER ;