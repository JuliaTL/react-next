import Link from "next/link";

const Navbar = () => (
    <div>
        <ul>
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/login"><a>Login</a></Link></li>
        </ul>

        <style jsx>{`
        ul {
        background: black;
        color: white;
        list-style: none;
        display: flex;
        }
        ul li {
        font-size: 20 px;
        margin-right: 20px;
        }
        ul li a {
        color: white;
        text-decoration: none;
        }
        `}</style>
    </div>
);

export default Navbar;