import { Injectable } from "@angular/core";

export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    //date: Date;
    phone: string;
    //address: string;
}


@Injectable()
export class UserService {

    currentUser: User = UserService.dummyUserList[0];
   /*  commentUser: User | undefined; */

    static dummyUserList: Array<User> = [
        {
            id: 1,
            name: "Guest",
            email: "gues@mail.com",
            password: "guest123",
            //date: new Date("2020-12-30 12:09"),
            phone: "0600000000",
            //address: "guest 1"
        },
        
        {
            id: 2,
            name: "Adam Zlatkovic",
            email: "qwe@qwe.com",
            password: "qweqwe",
            phone: "0603333333"
            /*date: new Date("1999-5-1 12:09"),
            ,
            address: "Koledarska 1"*/
        },

        {
            id: 3,
            name: "Jovan Jacov",
            email: "ne@mail.com",
            password: "sifra123",
            phone: "0603555333"
            /*date: new Date("1999-9-20 12:00"),
            ,
            address: "Ravan 53"*/
        },

        {
            id: 4,
            name: "John Johnson",
            email: "johny@mail.com",
            password: "password123",
            phone: "0603321333"
            /*date: new Date("1985-9-20 12:00"),
            ,
            address: "Cold Street 67"*/
        },

        {
            id: 5,
            name: "John Snow",
            email: "winteriscoming@mail.com",
            password: "muhqueen",
            phone: "0604455333"
            /*date: new Date("1992-9-20 12:00"),
            ,
            address: "Castle Black 1"*/
        },

        {
            id: 6,
            name: "Walter White",
            email: "heisenberg@mail.com",
            password: "babyblue",
            phone: "0604455123"
            /*date: new Date("1970-9-20 12:00"),
            ,
            address: "308 Negra Arroyo Lane"*/
        },

        {
            id: 7,
            name: "John Wick",
            email: "john.wick@mail.com",
            password: "babayaga",
            phone: "0604453923"
            /*date: new Date("1983-9-20 12:00"),
            ,
            address: "12 St. John"*/
        },
        
        {
            id: 8,
            name: "Jules Winnfield",
            email: "jules32@mail.com",
            password: "ezekiel2517",
            phone: "0614455123"
            /*date: new Date("1977-9-20 12:00"),
            ,
            address: "296 Berrow Road"*/
        }

    ];

    isPasswordCorrect(userEmail: string, password: string) : boolean {
        return UserService.dummyUserList.find(userToFind => 
            (userToFind.email == userEmail && userToFind.password == password)) != undefined;
    }

    getUser(userEmail: string) : User {
        this.currentUser = UserService.dummyUserList.find(userToFind => userToFind.email == userEmail)!;
        return this.currentUser;
    }

    registerUser(name: string, email: string, password: string, phone: string) : User {
        var maxId: number = 0;
        UserService.dummyUserList.forEach(user => {
            if(maxId < user.id) {
                maxId = user.id;
            }
        });

        var id = ++maxId;

        var user: User = {id, name, email, password, phone};

        UserService.dummyUserList.push(user);

        this.currentUser = user;

        console.log(user);
        return user;
        

    }
}