const Cookies = {
    getCookies(name){
        var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
        arr = document.cookie.match(reg);
        if(arr)
            return unescape(arr[2]);
        else
            return null;
    }
};
export {Cookies};