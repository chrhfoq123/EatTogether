function Main()
{
    return(
        <div className="main-content">
            <div className="main-header">
                <div className="select-location">
                    지역 선택 ▼
                </div>
                <div className="myinfo">
                    <img src={'./public/img/person.png'}></img>
                </div>
            </div>
            <div className="select-menu">
                <div className="menu1">
                    일식그림
                </div>
                <div className="menu2">
                    중식그림
                </div>
                <div className="menu3">
                    양식그림
                </div>
                <div className="menu4">
                    한식그림
                </div>
                <div className="menu5">
                    고기그림
                </div>
                <div className="menu6">
                    치킨그림
                </div>
            </div>
            <div className="peopleNum-select">
                <div className="peopleNum-context">
                    인원수 : ? 명
                </div>
            </div>
        </div>
    )
}

export default Main;