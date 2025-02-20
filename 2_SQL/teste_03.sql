-- 2.3 Atualizar Dados Condicionalmente

-- Dada a tabela employees com as colunas:

-- id (INT)
-- name (VARCHAR)
-- salary (DECIMAL)
-- Escreva uma query para aumentar o salário em 10% para os empregados que ganham menos de 5000, mas não altere os outros.


UPDATE employees
SET salary = salary * 1.10
WHERE salary < 5000;