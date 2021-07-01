import Button from "../../components/Button/Button";
import Logo from "../../components/Logo/Logo";
import style from "./PassReset.module.scss";

export default function PassReset() {

     return <div className={style.passreset}>
         
          <div className={style.passreset__main}>
               <Logo width={30} height={30} />
               <h1>Forgot your password?</h1>


               <label for="email">Enter your email address or Phone number</label>
               <input type="text" name="email" id="email" />
               
               <h4>__OR__</h4>

               <label htmlFor="password">Enter your username</label>
               <div className={style.usernameContainer}>
                <div><h3>@</h3></div>
               <input type="password" className={style.username} name="password" id="password" datatype="password" />
               </div>

               <button className={style.button}>Submit</button>

          </div>
     </div>
}
