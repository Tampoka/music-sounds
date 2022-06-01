import styles from './App.module.css';
import {Logo} from './components/Logo';
import {Footer} from './components/Footer';
import {Main} from './components/Main/Main';

function App() {
    return (
        <div className={styles.app}>
            <Logo/>
            <main className={styles.content}>
                <Main/>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
