function Find()
{
    return(
        <div className="find-content">
            <div className="find-message">
                같은 상대를 찾는중 ...
            </div>
            <div className="pass-minute">
                ~분 경과
            </div>
            <button className="cancel-btn" onClick={() => {window.location.href='/'}}>
                매칭 취소
            </button>
        </div>
    )
}

export default Find;