const initialState = {
    users: JSON.parse(localStorage.getItem('users')) || []
};

const CrudReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'Add':
            const AddedUsers = [...state.users, action.payload];
            localStorage.setItem('users', JSON.stringify(AddedUsers));
            return {
                ...state,
                users: AddedUsers
            };

        case 'Delete':
            const filteredUsers = state.users.filter((val) => val.id !== action.payload);
            localStorage.setItem('users', JSON.stringify(filteredUsers));
            alert("Deleted successfully...");
            return {
                ...state,
                users: filteredUsers
            };

        case 'Edit':
           let EditId=state.users.map((val)=>{
            if(val.id == action.payload.id){
                val.title=action.payload.title;
                val.note=action.payload.note;
            }
            return val;
           })
           localStorage.setItem('users',JSON.stringify(EditId));

           return{
            ...state,
            users:EditId
           }

        default:
            return state;
    }
};

export default CrudReducers;
