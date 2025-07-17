import { Container } from './componets/Container';
import { Heading } from './componets/Heading'
import { Logo } from './componets/Logo';

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
                <Heading> 
                    MENU
                </Heading>
            </Container>
            <Container>
                <Heading> 
                    FOOTER
                </Heading>
            </Container>
        </div>
    )
}

export { App };