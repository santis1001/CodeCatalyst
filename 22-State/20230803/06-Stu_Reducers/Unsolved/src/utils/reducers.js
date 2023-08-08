import createId from './createId'

export default function reducer(state, action) {
  switch (action.type) {
    case 'ADD_STUDENT': {
      const newID = createId(state.students);
      const newstudent = { ...action.payload, id: newID };
      return {
        ...state,
        students: [...state.students, newstudent],
      };
    }
    case 'REMOVE_STUDENT': {
        return {
          ...state,
          students: state.students.filter((student) => student.id !== action.payload),
        };
      }
    default:
      return state;
  }
}
