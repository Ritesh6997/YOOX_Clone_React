export const EmailBox = () => {
        const useremail = JSON.parse(localStorage.getItem("userEmailyoox"));
    return (
        <div className="email-box">
                    <div style={{display:"flex"}}>
                    <img style={{width:"25px", height:"25px", marginRight:"15px"}} src="https://www.linkpicture.com/q/checkicon.png" alt="" />
                    <div  className="checkoutHeading">E-mail</div>
                    </div>
                    <div style={{fontSize:"13px", color:"333333"}}>
                    You are ordering as 
                <b > { useremail}</b>
                    </div>
        </div>
    )
}