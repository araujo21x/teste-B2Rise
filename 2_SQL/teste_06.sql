-- 2.6 Criação e Consulta de uma VIEW

-- Dada a tabela:

-- transactions

-- id (INT)
-- account_id (INT)
-- transaction_date (DATE)
-- amount (DECIMAL)
-- Crie uma view chamada monthly_summary que mostre o account_id, o mês (extraído de transaction_date), e o valor total das transações (soma de amount) agrupado por account_id e mês. Em seguida, escreva uma query para listar os resumos mensais apenas para contas que tiveram transações superiores a 10.000 em pelo menos um mês.

-- View
CREATE VIEW monthly_summary AS
SELECT 
    account_id,
    EXTRACT(MONTH FROM transaction_date) AS month,
    SUM(amount) AS total_amount
FROM transactions
GROUP BY account_id, month;

-- Listar os resumos mensais
SELECT account_id, month, total_amount
FROM monthly_summary
WHERE total_amount > 10000;