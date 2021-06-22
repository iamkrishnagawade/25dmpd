DELIMITER $$

CREATE TRIGGER BEFORE_INSERT_CP_PRICE_FEEDS
BEFORE INSERT
ON cp_price_feeds FOR EACH ROW
BEGIN
    DECLARE rowcount INT;
   
   	SELECT COUNT(*) 
   	INTO rowcount
   	FROM cp_company
   	WHERE disp_id = NEW.disp_id;
    
    IF rowcount = 0 THEN
    	/* insert company id */
        INSERT INTO cp_company (`disp_id`) VALUES (NEW.disp_id);
       	
       	/* insert company details */
       	INSERT INTO com_details (`disp_id`, `sc_subsec`, `sc_fullnm`, `symbol`, `nse_id`, `company`) 
       	VALUES (NEW.disp_id, NEW.sc_subsec, NEW.sc_fullnm, NEW.symbol, NEW.nse_id, NEW.company);
       
       /* insert default price feeds data */
        INSERT INTO com_price_feeds (`disp_id`, `se_type`) VALUES (NEW.disp_id, 'BSE');
       	INSERT INTO com_price_feeds (`disp_id`, `se_type`) VALUES (NEW.disp_id, 'NSE');
       
    END IF; 

END $$

DELIMITER ;