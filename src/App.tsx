import styles from './App.module.css';
import {Logo} from './components/Logo';
import {Footer} from './components/Footer';
import {Main} from './components/Main/Main';

function App() {
    return (
        <div className={styles.app}>
            <Logo/>
            <div className={styles.content}>
                <Main/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
