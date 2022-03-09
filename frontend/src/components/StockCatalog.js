import React from "react";

export function StockCatalog({stock}) {



    return (
        <>

            <section className='stockCatalog'>

                <h1 className="catalog-title">Categorías</h1>

                div className="container-card">
                {stock.map((stock) => {
                    return <StockCard key={stock.id} stock={stock}/>;


                })}


            </section>
        </>
    );
}
