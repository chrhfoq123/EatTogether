import { useState } from 'react';

function Main()
{
    const[isClicked1, setIsClicked1] = useState(0);
    const[isClicked2, setIsClicked2] = useState(0);
    const[isClicked3, setIsClicked3] = useState(0);
    const[isClicked4, setIsClicked4] = useState(0);
    const[isClicked5, setIsClicked5] = useState(0);
    const[isClicked6, setIsClicked6] = useState(0);
    const[memberNum, setMemberNum] = useState(0);

    return(
        <div className="main-content">
            <div className="main-header">
                지역을 입력해 주세요!
                <input placeholder='ex) 부산광역시, 구미시'></input>
            </div>
            <div className="select-menu">
                <div>어떤 음식을 먹고 싶은가요?</div>
                <div className={isClicked1 ? "select-menu1 on" : "select-menu1"} onClick={() => {setIsClicked1(isClicked1 ? 0 : 1)}}>
                    <img src=""></img>
                    <p className="context">일식</p>
                </div>
                <div className={isClicked2 ? "select-menu2 on" : "select-menu2"} onClick={() => {setIsClicked2(isClicked2 ? 0 : 1)}}>
                    <img src=""></img>
                    <p className="context">중식</p>
                </div>
                <div className={isClicked3 ? "select-menu3 on" : "select-menu3"} onClick={() => {setIsClicked3(isClicked3 ? 0 : 1)}}>
                    <img src=""></img>
                    <p className="context">한식</p>
                </div>
                <div className={isClicked4 ? "select-menu4 on" : "select-menu4"} onClick={() => {setIsClicked4(isClicked4 ? 0 : 1)}}>
                    <img src=""></img>
                    <p className="context">양식</p>
                </div>
                <div className={isClicked5 ? "select-menu5 on" : "select-menu5"} onClick={() => {setIsClicked5(isClicked5 ? 0 : 1)}}>
                    <img src=""></img>
                    <p className="context">치킨</p>
                </div>
                <div className={isClicked6 ? "select-menu6 on" : "select-menu6"} onClick={() => {setIsClicked6(isClicked6 ? 0 : 1)}}>
                    <img src=""></img>
                    <p className="context">고기</p>
                </div>
            </div>
            <p>몇명과 같이 먹고 싶나요?</p>
            <div className="peopleNum-select">
                <div className="peopleNum">인원수 : {memberNum} 명</div>
                <div className="peopleNum-btn">
                    <div className="peopleNum-upbtn">
                        <button className="up-btn" onClick={() => {setMemberNum(memberNum+1)}}>▲</button>
                    </div>
                    <div className="peopleNum-downbtn">
                        <button className="down-btn" onClick={() => {setMemberNum(memberNum-1)}}>▼</button>
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