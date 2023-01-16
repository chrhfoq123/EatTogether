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
            <div className="option-content">
                <div className="select-menu1">
                    일식그림
                </div>
                <div className="select-menu2">
                    중식그림
                </div>
                <div className="select-menu3">
                    양식그림
                </div>
                <div className="select-menu4">
                    한식그림
                </div>
                <div className="select-menu5">
                    고기그림
                </div>
                <div className="select-menu6">
                    치킨그림
                </div>
            </div>
        </div>
    )
}

export default Main;