export class User1 {
    username: string;
    usercity: string;
   // id?: number = 0;
    password:string;
    useremail:string;

    copy(): User1 {
        let obj = new User1();
       // obj.id = this.id;
        obj.username = this.username;
        obj.password = this.password;
        obj.usercity = this.usercity;
        obj.useremail = this.useremail;
        return obj;
    }

    clear() {
        this.username = "";
        this.password = "";
        this.usercity = "";
        this.useremail = "";
        //this.id = 0;
    }
}



