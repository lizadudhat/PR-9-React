export const Add_USER = (data) => {
    return {
        type: 'Add',
        payload: data
    };
};

export const Delete_USER = (id) => {
    return {
        type: 'Delete',
        payload: id
    };
};

export const Edit_USER = (data) => {
    return {
        type: 'Edit',
        payload: data
    };
};
