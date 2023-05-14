class system {
    constructor(status, onTime, user){
        this.status = status
        this.onTime = onTime
        this._user = user
    }
    get user() {
        return this._user.toUpperCase()
    }
    getStatus() {
        console.log("Status:",this.status)
        console.log("Run Time:",this.onTime,"Minutes")
        console.log("User:",this.user)
    }
}
sys1 = new system("online", 352, "Admin")
sys1.getStatus()
