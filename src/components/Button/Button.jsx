
import "./Button.scss";


export default function Button(props) {

     return <>
          <div style={{ textAlign: 'center' }}>
               <button className="btn-max" type="button" >{props?.text || "No Text Set"}</button>
          </div>
     </>
}
