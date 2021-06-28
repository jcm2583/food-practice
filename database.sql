CREATE TABLE newtable (
	id SERIAL PRIMARY KEY,
	food_name VARCHAR (255),
	rank INT 
);

INSERT INTO foods ("food_name", "rank")
VALUES ('watermelon', 1);

INSERT INTO foods ("food_name", "rank")
VALUES ('steak', 2), ('ice cream', 3), ('chips', 4), ('rice pilaf', 5);