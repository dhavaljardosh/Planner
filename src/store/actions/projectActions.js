export const createProject = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore
            .collections('projects')
            .add({
                ...project,
                authorFirstName: 'Dhaval',
                authorLastName: 'Jardosh',
                authorId: 4,
                createdAt: new Date()
            })
            .then(() => {
                dispatch({type: 'CREATE_PROJECT', project: project});
            })
            .catch((err) => {
                dispatch({type: 'CREATE_PROJECT_ERROR', error: err})
            })
    }
}