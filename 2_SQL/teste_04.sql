-- 2.4 Consulta com JOIN Simples

-- Dadas as tabelas: orders

-- id (INT)
-- customer_id (INT)
-- total (DECIMAL)
-- customers

-- id (INT)
-- name (VARCHAR)
-- country (VARCHAR)
-- Escreva uma query para listar o nome dos clientes e o total de compras realizadas, ordenando pelo total de compras em ordem decrescente. Inclua apenas os clientes que realizaram compras.

SELECT c.name, SUM(o.total) AS total_gasto
FROM customers c
JOIN orders o ON c.id = o.customer_id
GROUP BY c.id
ORDER BY total_gasto DESC;
