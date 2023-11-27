import { useState, useEffect } from "react";

function Product({ info }) {
    return (
        <tr>
            <td>{ info.id }</td>
            <td>{ info.code }</td>
            <td>{ info.name }</td>
        </tr>
    );

}

function Products(props) {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/products")
            .then(response => response.json())
            .then(data => setProducts(data));
    }, []);

    if (products) {
        let result = products.map((p) => {
            return <Product key={p.id} info={p} />
        });

        return (
            <table width="100%" border="1">
                <thead>
                    <tr>
                        <th style={{background: "Wheat"}} align="left">ID</th>
                        <th style={{background: "Wheat"}} align="left">Code</th>
                        <th style={{background: "Wheat"}} align="left">Name</th>
                    </tr>
                </thead>

                <tbody>
                    {result}
                </tbody>
            </table>
        );
    }
}

export default Products;