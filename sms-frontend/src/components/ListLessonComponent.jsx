import ButtonLink from "./ButtonLink";
import useListLessonComponentHook from "../hooks/useListLessonComponentHook";

const ListLessonComponent = () => {
  const { lessons, updateLesson, removeLesson } =
    useListLessonComponentHook();

  return (
    <div className="container">
      <h2 className="text-center py-3">List of Lessons</h2>
      <ButtonLink text="Add Lesson" toAction="/add-lesson" />
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Lesson Name</th>
            <th scope="col">Lesson Description</th>
            <th scope="col">Action #1</th>
            <th scope="col">Action #2</th>
          </tr>
        </thead>
        <tbody>
          {lessons.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.lessonName}</td>
                <td>{item.lessonDescription}</td>
                <td>
                  <button
                    className="btn btn-outline-info me-2"
                    onClick={() => updateLesson(item.id)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => removeLesson(item.id)}
                  >
                    Delete
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

export default ListLessonComponent;
