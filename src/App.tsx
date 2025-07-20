import { Container } from './componets/Container';
import { Logo } from './componets/Logo';
import { Menu } from './componets/Menu';
import { CountDown } from './componets/CountDown';
import { DefaultInput } from './componets/DefaultInput';

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
            <Container>
                <CountDown />
            </Container>
            <Container>
                <form className='form' action=''>
                    <div className="formRow"> 
                    <DefaultInput id="meuinput" type='number'/>
                    </div>
                    <div className='formRow'>
                        <p>
                            Lorem ipsum dolor sit amet.
                        </p>
                    </div>
                    <div className='formRow'>
                        <p>
                            Ciclos
                        </p>
                        <p>
                            0 0 0 0 0 
                        </p>
                    </div>
                    <div className='formRow'>
                        <button>Iniciar</button>
                    </div>
                </form>
            </Container>
        </div>
    )
}

export { App };