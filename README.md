# CLI app

**Получаем и выводим весь список контактов в виде таблицы (console.table)**

node index.js --action list

[link](https://i.ibb.co/MZq304L/list-table.png)

**Получаем контакт по id**

node index.js --action get --id 5

[link](https://i.ibb.co/PrC3rxW/get.png)

**Добавляем контакт**

node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22

[link](https://i.ibb.co/Jk4m01Z/add.png)

**Удаляем контакт по id**

node index.js --action remove --id=3

[link](https://i.ibb.co/7Y7PrLW/remove.png)

[link 'table-after-remove'](https://i.ibb.co/DGkWh9f/table-after-remove.png)

**Обновляем контакт по id**

node index.js --action update --id=4 --name QQQQ --email qqqq@qqqq.qq --phone 111-11-11

[link](https://i.ibb.co/P1nLy5f/2022-01-19-181425.png)
