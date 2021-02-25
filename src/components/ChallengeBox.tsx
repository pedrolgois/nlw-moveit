import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox(){
    const hasActiveChallenge = true;

    return(
        <div className={styles.ChallengeBoxContainer}>
            { hasActiveChallenge ? (
                <div className={styles.ChallengeActive}>
                    <header>Ganhe 400xp</header>

                    <main>
                        <img src="icons/bodt.svg" />
                        <strong>Novo desafio</strong>
                        <p>Levante e faça 20 agachamentos</p>
                    </main>

                    <footer>
                        <button type="button" className={styles.ChallengeFailedButton}>
                            Falhei
                        </button>
                        <button type="button" className={styles.ChallengeSuccededButton}>
                            Completei
                        </button>
                    </footer>
                </div>
            ) : (
                <div className={styles.ChallengeNotActive}>
                <strong>Finalize um ciclo para receber um desafio</strong>
                <p>
                    <img src="icons/level-up.svg" alt="level up" />
                    Avance de level completando desafios
                </p>
            </div>
            )}
        </div>
    );
}