import "./Icons.css";

export default function Icons({NewWay}){

    const IconStyle={
        width: 45,
        height: 45
    }

    return(
        <>
            <img style={IconStyle} src={NewWay} alt="Car icon for my page" className="IconsMain"/>
        </>
    );

}