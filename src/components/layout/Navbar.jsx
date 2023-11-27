import './styles/Navbar.css';

function Navbar(props) {
    
    const updateContent = (e) => { 
        switch(e.target.id) {
            case 'dashboard':
                props.setContent('Dashboard');
                break;
            case 'products':
                props.setContent('Products');
                break;
            case 'customers':
                props.setContent('Customers');
                break;
        }
    };

    return(
        <nav>
            <li id="dashboard" onClick={ updateContent }>
                Dashboard
            </li>
            <li id="products" onClick={ updateContent } >
                Products
            </li>
            <li id="customers" onClick={ updateContent }>
                Customers
            </li>
        </nav>
    );
}

export default Navbar;