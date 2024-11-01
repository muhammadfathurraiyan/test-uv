-- 2. Query Test 

-- Terdapat tabel sebagai berikut:

-- id	  name	  parent_id
-- 1	  Zaki	  2
-- 2	  Ilham	  NULL
-- 3	  Irwan	  2
-- 4	  Arka	  3

-- Buatlah query SQL yang menghasilkan data sebagai berikut:

-- id	  name	  parent_name
-- 1	  Zaki	  Ilham
-- 2	  Ilham	  NULL
-- 3	  Irwan	  Ilham
-- 4	  Arka	  Irwan


SELECT 
  child.id, 
  child.name, 
  parent.name AS parent_name
FROM 
  table1 AS child
LEFT JOIN 
  table2 AS parent 
ON 
  child.parent_id = parent.id;