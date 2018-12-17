const data = {
    projects: [
        {
            id: 1,
            title: "Help me find peach",
            content: 'BLAH BLAH BLAH'
        }, {
            id: 2,
            title: "GO PLAY FOOTBALL",
            content: 'BLAH BLAH BLAH'
        }, {
            id: 3,
            title: "Get me a content writer",
            content: 'BLAH BLAH BLAH'
        }, {
            id: 4,
            title: "Need work with something",
            content: 'BLAH BLAH BLAH'
        }
    ]
}

const projectReducer = (state = data, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('create project', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log("create project error ", action.payload);
            return state;
        default:
            return state;
    }
}

export default projectReducer;