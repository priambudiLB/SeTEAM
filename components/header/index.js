import Link from "next/link";
import Styles from "../../styles/Header.module.css";
function Header() {
    return (
        <>
            <header className={Styles.container}>
                <ul className={Styles.list}>
                    <li className={Styles.item}><Link href="/"><a>Home</a></Link></li>
                    <li className={Styles.item}><Link href="/dashboard"><a>Dashboard</a></Link></li>
                    <li className={Styles.item}><Link href=""><a>Choose Course</a></Link></li>
                    <li className={Styles.item}><Link href=""><a>Profile</a></Link></li>
                </ul>
            </header>
        </>

    )
}

export default Header;