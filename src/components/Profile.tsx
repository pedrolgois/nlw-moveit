import styles from '../styles/components/profile.module.css'

export function Profile(){
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/diego3g.png" alt="Pedro Gois" />
            <div>
                <strong>Pedro Gois</strong>
                <p>
                    <img src="icons/level.svg" />
                    Level 1</p>
            </div>
        </div>
    );
}