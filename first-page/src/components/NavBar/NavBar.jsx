import ButtonMain from "../Button/ButtonMain";
import Icons from "../Icons/Icons";
import "./NavBar.css";
import CarIcon from "../Icons/car-icon.png";
import ShopIcon from "../Icons/shop-icon.png";


export default function NavBar(){
    return(
        <>
            <div className="NavContainer">
                <Icons NewWay={CarIcon} />
                <ButtonMain className="NavBar_ButtonMain" text={'Nuevos'} />
                <ButtonMain className="NavBar_ButtonMain" text={'Usados'} />
                <ButtonMain className="NavBar_ButtonMain" text={'Respuestos'} />
                <Icons NewWay={ShopIcon}/>
            </div>
        </>
    );
}