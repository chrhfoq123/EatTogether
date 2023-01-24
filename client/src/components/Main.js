function Main()
{
    return(
        <div className="main-content">
            <div className="main-header">
                <p className="select-location">지역 설정 ▼</p>
            </div>
            <div className="select-menu">
                <div className="menu1">
                    <img src=""></img>
                    <p className="context">일식</p>
                </div>
                <div className="menu2">
                    <img src=""></img>
                    <p className="context">중식</p>
                </div>
                <div className="menu3">
                    <img src=""></img>
                    <p className="context">한식</p>
                </div>
                <div className="menu4">
                    <img src=""></img>
                    <p className="context">양식</p>
                </div>
                <div className="menu5">
                    <img src=""></img>
                    <p className="context">치킨</p>
                </div>
                <div className="menu6">
                    <img src=""></img>
                    <p className="context">고기</p>
                </div>
            </div>
            <div className="peopleNum-select">
                <div className="peopleNum">인원수 : ? 명</div>
                <div className="peopleNum-btn">
                    <div className="peopleNum-upbtn">
                        <button className="up-btn">▲</button>
                    </div>
                    <div className="peopleNum-downbtn">
                        <button className="down-btn">▼</button>
                    </div>
                </div>
            </div>
            <button className="match-button">
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