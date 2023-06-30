function getThatCookie(cookieName) {
    const array =  cookieName.split("; ")
    const array2D = array.map(cookie => cookie.split("="))
    const arrayObject = array2D.reduce((acc, [key, value]) =>{
     acc[key] = value
     return acc
    }, {})
    return arrayObject
 }

 console.log(getThatCookie("theme=wizard; name=robin"))
