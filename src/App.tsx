import { Container } from './componets/Container';
import { Logo } from './componets/Logo';
import { Menu } from './componets/Menu';

import './styles/theme.css';
import './styles/global.css';

//import { Container } from'./componets/Container.tsx'

function App() {
    console.log('Ok, the app is running!');
    return (
        <div>
            <Container>
                <Logo />
            </Container>
            <Container>
                <Menu />
            </Container>
        </div>
    )
}

export { App };