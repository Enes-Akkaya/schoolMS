import ButtonLink from "./ButtonLink";
import useListTeacherComponentHook from "../hooks/useListTeacherComponentHook";

const ListTeacherComponent = () => {
  const { teachers, getLessonName, updateTeacher, deleteTeacherById } =
    useListTeacherComponentHook();

  return (
    <div className="container">
      <h2 className="text-center my-3">List of Teachers</h2>
      <ButtonLink text="Add Teacher" toAction="/add-teacher" />
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Teacher First Name</th>
            <th scope="col">Teacher Last Name</th>
            <th scope="col">Teacher Email</th>
            <th scope="col">Lesson</th>
            <th scope="col">Action #1</th>
            <th scope="col">Action #2</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.email}</td>
                <td>{getLessonName(item.lessonId)}</td>
                <td>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => deleteTeacherById(item.id)}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-outline-info"
                    onClick={() => updateTeacher(item.id)}
                  >
                    Update
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListTeacherComponent;
