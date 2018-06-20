import { combineEpics } from 'redux-observable';


const epics = [];

const rootEpic = combineEpics(...epics);


export default rootEpic;
