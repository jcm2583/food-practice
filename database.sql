CREATE TABLE newtable (
	id SERIAL PRIMARY KEY,
	food_name VARCHAR (255),
	rank INT 
);

INSERT INTO foods ("food_name", "rank")
VALUES ('watermelon', 1);

INSERT INTO foods ("food_name", "rank")
VALUES ('steak', 2), ('ice cream', 3), ('chips', 4), ('rice pilaf', 5);


-- These are some of the sql commands that I was playing around with to try and get the auto update to work on the rank column
SELECT * FROM foods
ORDER BY "rank";

UPDATE foods SET "rank" = rank + 1
WHERE id = 2;


UPDATE foods SET "rank" = rank - 1 
WHERE id = 5;

SET rank = 0
UPDATE foods
SET "rank" = rank = "rank" + 1
WHERE id = 4;

UPDATE foods SET "rank" = rank + 1 WHERE "rank" = 3
UPDATE foods SET "rank" = rank - 1 WHERE "id" = 4;

SELECT * FROM foods
ORDER BY rank;

UPDATE foods SET "rank" = rank + 1 WHERE "id" = 3;

DECLARE @foods int
SET @foods = 0
UPDATE foods
SET @foods = rank = @foods + 1;


SELECT *, ROW_NUMBER() OVER(ORDER BY rank ASC) AS updated_rank
FROM foods;
WHERE id = 3;

SELECT MAX(rank) -1 FROM "counter"
WHERE id = 3;