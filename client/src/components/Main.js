function Main()
{
    return(
        <div className="main-content">
            <div className="main-header">
                <p className="select-location">지역 설정 ▼</p>
                <img className="myinfo" src="img/person.png"></img>
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
                    <div className="up-btn">▲</div>
                    <div className="down-btn">▼</div>
                </div>
            </div>
            <div className="match-button">
                매칭하기
            </div>
        </div>
    )
}

export default Main;