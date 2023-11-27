import Navbar from './Navbar';
import Content from './Content';

function Body(props) {
    return (
        <section>
            <Navbar content={ props.content } setContent={ props.setContent } />
            <Content content={ props.content } />
        </section>
    );
}

export default Body;