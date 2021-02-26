import Link from "next/link";
import {useRouter} from "next/router"

const Navbar = () => {
    const activeRouter = useRouter()
    
    const isActive = (router) => {
        if(router == activeRouter.pathname){
            return "active"
        }
        else ""
    }

    return (
        <nav>
            <div className="nav-wrapper #1976d2 blue darken-2">
                <Link href="/"><a className="brand-logo left">Logo</a></Link>

                <ul id="nav-mobile" className="right">
                    <li className={isActive("/login")}><Link href="/login"><a>Login</a></Link></li>
                    <li className={isActive("/signup")}><Link href="/signup"><a>Sign Up</a></Link></li>
                    <li className={isActive("/create")}><Link href="/create"><a>create</a></Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;