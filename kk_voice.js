/*
KK键盘变声解锁 JS
*/
let body = $response.body;
if (body) {
    try {
        let obj = JSON.parse(body);
        if (obj.data) {
            if (obj.data.totalCount !== undefined) obj.data.totalCount = 999;
            if (obj.data.currCount !== undefined) obj.data.currCount = 999;
            if (obj.data.freeCount !== undefined) obj.data.freeCount = 999;
        }
        body = JSON.stringify(obj);
    } catch (e) {
        console.log("KK Voice Decrypt Error: " + e);
    }
}
$done({ body });