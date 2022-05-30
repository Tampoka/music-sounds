import styles from './App.module.css';
import {Logo} from './components/Logo';
import {Footer} from './components/Footer';

function App() {
    return (
        <div className={styles.app}>
            <Logo/>
            <div className={styles.content}>
                hhhhh
            </div>
            <Footer/>
        </div>
    );
}

export default App;
