import { useState, useEffect } from "react";

function Customer({ info }) {
    return (
        <tr>
            <td>{ info.id }</td>
            <td>{ info.name }</td>
        </tr>
    );
}

function Customers() {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/customers")
        .then(response => response.json())
        .then(setCustomers);
    }, []);

    if (customers) {
        let result = customers.map(c => {
            return <Customer key={c.id} info={c} />
        });

        return (
            <table border="1" width="100%">
                <thead>
                    <tr>
                        <th style={{background: "Wheat"}} align="left">ID</th>
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

export default Customers;