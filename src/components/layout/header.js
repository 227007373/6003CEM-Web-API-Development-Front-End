import styles from './header.module.scss';
import Link from 'next/link';
import { useState, useEffect, useContext } from 'react';
import { UserContext } from '@/contexts/user.context';
const MyHeader = () => {
    const { user, setUser } = useContext(UserContext);
    const [loggedin, setLoggedin] = useState(null);
    return (
        <header>
            <div className={`${styles.wrapper} container`}>
                <div className={styles.logo}>
                    <div
                        style={{ backgroundImage: 'url("/images/logo.svg")' }}
                        className={styles.image}
                    ></div>
                </div>
                <nav className={styles.nav}>
                    <div className={styles.btn}>
                        <Link href={'/'}>My Favourite</Link>
                    </div>
                    <div className={styles.btn}>
                        <Link href={'/'}>Contact Us</Link>
                    </div>
                    <div className={styles.btn}>
                        <Link href={'/cats'}>Cats</Link>
                    </div>
                    {user?.token.length == 0 ? (
                        <>
                            <div className={styles.btn}>
                                <Link href={'/login'}>Login</Link>
                            </div>
                            <div className={styles.btn}>
                                <Link href={'/register'}>Register</Link>
                            </div>
                        </>
                    ) : (
                        <div className={styles.btn}>
                            <Link href={'/logout'}>Logout</Link>
                        </div>
                    )}
                </nav>
            </div>
        </header>
    );
};
export default MyHeader;
