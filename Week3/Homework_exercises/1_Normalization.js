/*
Exercise 1 : Normalization

The manager of the dinner club would like to manage the information system that assists him to keep track of who attends the dinners. Because the manager is not an expert of Information Systems, (s)he uses the following table to store the information. Please help the manger by using the knowledge of database normal forms. Show step by step

How can you convert the table into 1NF ?

        For this table to be in 1NF, it should have single(atomic) valued attributes and all the values stored in its columns should be of the same domain. In order to convert the table to 1NF I would split the values in food_code and food_description into separate rows, but to avoid repeating information I would make a separate table for food and handle it as an entity and not as an instance. 

        I would also change the dinner_id, venue_code, and food_code columns to take data type INTEGER only. The reason besides keeping the attributes the same domain, is that we can use the AUTO_INCREMENT feature every time we insert a new row to automatic generate an id or code.

What are the super, candidate, primary keys in the table created in step (1)?
        Super key: the columns that can uniquely identify the row are 
            member_id
            member_name
            dinner_id
            food_code

        Candidate: the set of minimum columns require to identify the row uniquely are
            member_id + dinner_id
            member_id + food_code

        Primary key: My choice of key to be used as primary is member_id.
            The restaurant manager wants to keep track of WHO attends the dinners, so the attribute that relates better to other attributes in the table, and in other tables is member_id.
            member_id, unlike member_name, is an attribute that cannot be change or duplicated. For this reason is my chosen primary key.

How can you develop the set of 2NF tables? (Think of relationships between different tables).
        I would first make the adjustments to make the table into 1NF
        I would defined the most important attributes in the table and how do they interact to accomplish the manager task (keep track of who attends to the dinners):
            Table Who: member_id(PK), member_name, member_address
            Table When: dinner_id(PK), dinner_date
            Table Where: venue_code(PK), venue_description
            Table What: food_code(PK), food_description
        It is necessary to have more than one table because in order for the tables to be 2NF, all attributes within the entity should depend solely on the unique identifier of the entity. 

    ***Comment: Ok that's good, you also need to link them all together then.***
    *** Relation between tables ****
            Who - when  > member-dinner: member_id(FK) - dinner_id(FK)
            When- where > dinner-venue: dinner_id(FK) - venue_code(FK)
            Who - what  > member-food: member_id(FK) - food_code(FK)
    
How can you develop the set of 3NF tables?
    After the tables are considered already in 1NF and 2NF. We must make sure that the values in each table depends on the primary key for their respective table only. 

    If there is a value that depends on a column other than the key for the table, then this value should be move outside into a new table.
*/
