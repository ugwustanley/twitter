import PassReset from '../PassReset/PassReset'
import Button from "../../components/Button/Button";
import Logo from "../../components/Logo/Logo";
import style from "./Login.module.scss";

export default function Login() {

     return <div className="container">
          <div className="">

          </div>
          <div className="" style={{ padding: '20px 10px' }}>
               <Logo width={30} height={30} />
               <h1>Login Into Twitter</h1>


               <label htmlFor="username">Username</label>
               <input type="text" name="username" id="username" datatype="username" />

               <label htmlFor="password">Password</label>
               <input type="password" name="password" id="password" datatype="password" />

               <Button text="Login" />

               <div className={style.lastSection}>
                    <a className={style.link} href="#">Forgot Password?</a>
                    <span>.</span>
                    <a className={style.link} href="#">Sign up for Twitter</a>
               </div>

          </div>
          <div className="">

          </div>
     </div>
}
