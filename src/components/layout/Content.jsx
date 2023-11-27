import Dashboard from './Dashboard';
import Products from '../Products';
import Customers from '../Customers';
import './styles/Content.css';

function Content({ content }) {
    return(
        <article>
            {content == 'Dashboard' ? <Dashboard /> : null}
            {content == 'Products' ? <Products /> : null}
            {content == 'Customers' ? <Customers /> : null}
        </article>
    );
}

export default Content;