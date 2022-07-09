class UsersState {

    users=[{
        id: 1,
        name: 'Valerya Zamai',
        img: '../img/user_photo/girl.jpg'
    },{
        id: 2,
        name: 'Ilya Ivanov',
        img: '../img/user_photo/men_one.jpg'
    }, {
        id: 3,
        name: 'Vanya Dmitruk',
        img: '../img/user_photo/men_two.jpg'
    }, {
        id: 4,
        name: 'Kanye West',
        img: ''
    },{
        id: 5,
        name: 'Sveta Buk',
        img: ''
    }];
    /*constructor() {
        makeAutoObservable(this)
    }*/
}

export default new UsersState()