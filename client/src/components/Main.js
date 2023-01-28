import { useState } from 'react';

function Main()
{
    const[isClicked1, setIsClicked1] = useState(0);
    const[isClicked2, setIsClicked2] = useState(0);
    const[isClicked3, setIsClicked3] = useState(0);
    const[isClicked4, setIsClicked4] = useState(0);
    const[isClicked5, setIsClicked5] = useState(0);
    const[isClicked6, setIsClicked6] = useState(0);
    const[memberNum, setMemberNum] = useState(2);
    const[checkedInput, setCheckedInput] = useState("");

    const setMember = (option) => {
        if(option == 1){
            if(memberNum<6)
                setMemberNum(memberNum+1);
        }else{
            if(memberNum>2)
                setMemberNum(memberNum-1);
        }
    }

    const handleClickMenu = (e) => {
        console.log(e.target.value);
        setCheckedInput(e.target.value);
    }

    return(
        <div className="main-content">
            <div className="main-header">
                지역을 입력해 주세요!
                <input placeholder='ex) 부산광역시, 구미시'></input>
            </div>
            <div className="select-menu">
                <div className="select-menu1">
                    <label key="menu1">
                        <input type="radio" className="input-hidden" value="menu1" checked={checkedInput === "menu1"} onChange={handleClickMenu}/>
                        <img src=""></img>
                    </label>
                    <p className="context">일식</p>
                </div>
                <div className="select-menu2">
                    <label key="menu2">
                        <input type="radio" className="input-hidden" value="menu2" checked={checkedInput === "menu2"} onChange={handleClickMenu}/>
                        <img src=""></img>
                    </label>
                    <p className="context">중식</p>
                </div>
                <div className="select-menu3">
                    <label key="menu3">
                        <input type="radio" className="input-hidden" value="menu3" checked={checkedInput === "menu3"} onChange={handleClickMenu}/>
                        <img src=""></img>
                    </label>
                    <p className="context">한식</p>
                </div>
                <div className="select-menu4">
                    <label key="menu4">
                        <input type="radio" className="input-hidden" value="menu4" checked={checkedInput === "menu4"} onChange={handleClickMenu}/>
                        <img src=""></img>
                    </label>
                    <p className="context">양식</p>
                </div>
                <div className="select-menu5">
                    <label key="menu5">
                        <input type="radio" className="input-hidden" value="menu5" checked={checkedInput === "menu5"} onChange={handleClickMenu}/>
                        <img src=""></img>
                    </label>
                    <p className="context">치킨</p>
                </div>
                <div className="select-menu6">
                    <label key="menu6">
                        <input type="radio" className="input-hidden" value="menu6" checked={checkedInput === "menu6"} onChange={handleClickMenu}/>
                        <img src=""></img>
                    </label>
                    <p className="context">고기</p>
                </div>
            </div>
            <p>몇명과 같이 먹고 싶나요?</p>
            <div className="peopleNum-select">
                <div className="peopleNum">인원수 : {memberNum} 명</div>
                <div className="peopleNum-btn">
                    <div className="peopleNum-upbtn">
                        <button className="up-btn" onClick={() => {setMember(1)}}>▲</button>
                    </div>
                    <div className="peopleNum-downbtn">
                        <button className="down-btn" onClick={() => {setMember(0)}}>▼</button>
                    </div>
                </div>
            </div>
            <button className="match-button" onClick={() => {window.location.href='/Find'}}>
                매칭하기
            </button>
            {/* 추후 업데이트(하단 nav바)
            <div className="bottom-nav">
                <div className="main-tab">
                    메인으로
                </div>
                <div className="chat-tab">
                    채팅으로
                </div>
                <div className="myinfo-tab">
                    내정보로
                </div>
            </div>*/}
        </div>
    )
}

export default Main;