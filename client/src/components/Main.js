import { useState } from 'react';

function Main()
{
    const[memberNum, setMemberNum] = useState(2); // 인원수
    const[checkedInput, setCheckedInput] = useState();
    const menus = [
        {
            name : "일식"
        },
        {
            name : "중식"
        },
        {
            name : "한식"
        },
        {
            name : "양식"
        },
        {
            name : "치킨"
        },
        {
            name : "고기"
        }
    ]

    const selectMenu = (index) => {
        setCheckedInput(index);
    }

    const setMember = (option) => {
        if(option == 1){
            if(memberNum<6)
                setMemberNum(memberNum+1);
        }else{
            if(memberNum>2)
                setMemberNum(memberNum-1);
        }
    }

    return(
        <div className="main-content">
            <div className="main-header">
                지역을 입력해 주세요!                
                <input placeholder='ex) 부산광역시, 구미시'></input>
            </div>
            <p className="message">어떤 음식을 먹고 싶나요?</p>
            <div className="select-menu">
                { menus.map((obj,index) => {
                    return <MenuItem 
                                name={obj.name} 
                                clieckEvent={selectMenu}
                                index={index}
                                isSelect={index == checkedInput ? true : false}
                            />
                }) }                
            </div>
            <p className="message">몇 명과 함께 먹고 싶나요?</p>
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

function MenuItem(props) {    
    const cname = props.isSelect ? "select-menu-item on" : "select-menu-item";
    return(
        <div className={cname} onClick={()=>{props.clieckEvent(props.index)}}>
            <p className="context">{props.name}</p>
        </div>
    )
}

export default Main;