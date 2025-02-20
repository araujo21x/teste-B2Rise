-- 2.5 Consulta com JOIN e Filtragem

-- Dadas as tabelas:

-- products

-- id (INT)
-- name (VARCHAR)
-- category_id (INT)
-- categories

-- id (INT)
-- name (VARCHAR)
-- sales

-- id (INT)
-- product_id (INT)
-- quantity (INT)
-- Escreva uma query para listar o nome da categoria, o nome do produto e a quantidade total vendida de cada produto. Filtre apenas as categorias que possuem mais de 100 unidades vendidas no total.

SELECT c.name AS category_name, p.name AS product_name, SUM(s.quantity) AS total_quantity_sold
FROM products p
JOIN categories c ON p.category_id = c.id
JOIN sales s ON p.id = s.product_id
GROUP BY c.name, p.name
HAVING SUM(s.quantity) > 100;