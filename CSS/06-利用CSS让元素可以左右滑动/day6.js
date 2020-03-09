function clickedScroll() {
    let getEle = document.getElementById('d');
    if (getEle) {
        let navigation = document.getElementById('navigation');
        if (navigation) {
            let wid = navigation.clientWidth / 2.0 - getEle.clientWidth / 2.0 - 15;
            navigation.scrollTo(wid, 0);
        }
    }
}