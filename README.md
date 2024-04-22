# Show me my money!

Web app creada para gestionar inversiones.

Es posible:
- Ver la cantidad de AR$ en la caja de ahorros
- Ver la cantidad de acciones y bonos en las cuales invertimos
- Ver las acciones o bonos en las cuales podemos invertir
- Vender nuestras acciones o bonos
- Comprar nuevas acciones o bonos

## Endpoints

Nombre | Metodo HTTP | Endpoint | Descripcion |
| ------ | ------ | ------ | ------ |
|getSavings | GET | http://localhost:5000/savingsAccount/ | Obtiene nuestros ahorros con su respectiva moneda.
| getShares | GET | http://localhost:5000/savingsAccount/shares | Obtiene todas las acciones y bonos, tanto las propias como las cuales en las que podemos invertir.
| getShare | GET | http://localhost:5000/savingsAccount/shares/:shareName | Obtiene una acción o bono en particular.
| buyShares | POST | http://localhost:5000/savingsAccount/shares/:shareName/buy | Nos permite comprar una acción o bono.
| sellShares | POST | http://localhost:5000/savingsAccount/shares/:shareName/sell | Nos permite vender una acción o bono.
| updateQuotation | POST | http://localhost:5000/savingsAccount/shares | Nos permite actualizar la cotización de las acciones o bonos.


> Ejemplo de colección:


 ```
 {
	"info": {
		"_postman_id": "85d7fb70-17ff-4771-be09-72a40eddc383",
		"name": "Money App",
		"schema": "https://schema.getpostman.com/json/collection/v2.0.0/collection.json",
		"_exporter_id": "5449164"
	},
	"item": [
		{
			"name": "getSavings",
			"request": {
				"method": "GET",
				"header": [],
				"url": "http://localhost:5000/savingsAccount/"
			},
			"response": []
		},
		{
			"name": "getShares",
			"request": {
				"method": "GET",
				"header": [],
				"url": "http://localhost:5000/savingsAccount/shares"
			},
			"response": []
		},
		{
			"name": "getShare",
			"request": {
				"method": "GET",
				"header": [],
				"url": "http://localhost:5000/savingsAccount/shares/Apple"
			},
			"response": []
		},
		{
			"name": "updateQuotation",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\"quotations\": [\n    {\"shareName\": \"Acciones Coca-Cola\",\n    \"price\": 1100},\n    {\"shareName\": \"Acciones Apple\",\n    \"price\": 500}\n]}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": "http://localhost:5000/savingsAccount/shares/"
			},
			"response": []
		}
	]
}
```

## Instalación
Esta app utiliza *nodemon* y *Remix* con lo cual podemos realizar cambios y se verán reflejados automáticamente.

Para levantar el servidor correr en una pestaña de la terminal:
```sh
cd money-app-server
```
```sh
npm i
```
```sh
npx nodemon index.ts
```

Para levantar el cliente correr en otra pestaña de la terminal:
```sh
cd money-app
```
```sh
npm i
```
```sh
npm run dev
```