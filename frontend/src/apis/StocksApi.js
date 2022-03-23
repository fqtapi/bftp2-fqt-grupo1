class StocksApi {
    STOCKS_API_URL = "/api/stocks";

    getStocks(category) {
        if (category) {
            return fetch(`${this.STOCKS_API_URL}?category=${category}`)
                .then(r => r.json());
        }
        return fetch(this.STOCKS_API_URL)
            .then(r => r.json());
    }

    addStock(stock) {
        return fetch(this.STOCKS_API_URL,
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(stock)
            }
        )
    }

    deleteStock(id) {
        return fetch(`http://localhost:8081/api/stocks/delete/${id}`,
            {
                method: 'DELETE'
            }
            )
    }


}

export default StocksApi;