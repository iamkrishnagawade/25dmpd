DELIMITER $$

CREATE TRIGGER AFTER_INSERT_SM_COMPANIES
AFTER INSERT
ON sm_companies FOR EACH ROW
BEGIN
    DECLARE price_count, qty_count, vol_count, pe_count INT;
   
   	SELECT COUNT(*) 
   	INTO price_count
   	FROM cm_prices
   	WHERE disp_id = NEW.disp_id;
   
   	SELECT COUNT(*) 
   	INTO qty_count
   	FROM cm_qty
   	WHERE disp_id = NEW.disp_id;
   
   	SELECT COUNT(*) 
   	INTO vol_count
   	FROM cm_vol
   	WHERE disp_id = NEW.disp_id;
   
   	SELECT COUNT(*) 
   	INTO pe_count
   	FROM cm_pe
   	WHERE disp_id = NEW.disp_id;
    
    IF price_count = 0 THEN
        INSERT INTO cm_prices (`disp_id`, `se_type`) 
       	VALUES (NEW.disp_id, 'BSE'),
       		(NEW.disp_id, 'NSE');
    END IF;
   
   IF qty_count = 0 THEN
        INSERT INTO cm_qty (`disp_id`, `se_type`) 
       	VALUES (NEW.disp_id, 'BSE'),
       		(NEW.disp_id, 'NSE');
    END IF;
   
   IF vol_count = 0 THEN
        INSERT INTO cm_vol (`disp_id`, `se_type`) 
       	VALUES (NEW.disp_id, 'BSE'),
       		(NEW.disp_id, 'NSE');
    END IF;
   
   IF pe_count = 0 THEN
        INSERT INTO cm_pe (`disp_id`, `se_type`) 
       	VALUES (NEW.disp_id, 'BSE'),
       		(NEW.disp_id, 'NSE');
    END IF;

END $$

DELIMITER ;