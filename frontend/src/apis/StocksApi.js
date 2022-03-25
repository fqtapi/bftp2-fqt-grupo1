class StocksApi {
    STOCKS_API_URL = "/api/stocks";

    dameMiPincheToken() {
        let userData = JSON.parse(localStorage.getItem("user"));
        let token = userData && userData.accessToken;
        return "Bearer " + token;
    }

    getStocks(category) {


        if (category) {
            return fetch(`${this.STOCKS_API_URL}?category=${category}`, {
                headers: {
                    "Authorization": this.dameMiPincheToken()
                }
            })
                .then(r => r.json());
        }
        return fetch(this.STOCKS_API_URL, {
            headers: {
                "Authorization": this.dameMiPincheToken()
            }
        })
            .then(r => r.json());
    }

    addStock(stock) {
        return fetch(this.STOCKS_API_URL,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": this.dameMiPincheToken()
                },
                body: JSON.stringify(stock)
            }
        )
    }

    deleteStock(id) {
        return fetch(`${this.STOCKS_API_URL}/delete/${id}`,
            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    "Authorization": this.dameMiPincheToken()
                }
            }
        )
    }


}

export default StocksApi;