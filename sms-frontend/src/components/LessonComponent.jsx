
import ButtonLink from "./ButtonLink";
import useLessonComponentHook from "../hooks/useLessonComponentHook";

const LessonComponent = () => {
  const {
    lessonName,
    setLessonName,
    lessonDescription,
    setLessonDescription,
    title,
    saveOrUpdateLesson,
  } = useLessonComponentHook();

  return (
    <div className="container mt-5">
      <ButtonLink text="Go Back" toAction="/lessons" />
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          <h2 className="text-center">{title}</h2>
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">Lesson Name: </label>
                <input
                  type="text"
                  name="lessonName"
                  placeholder="Enter Lesson Name"
                  className="form-control"
                  value={lessonName}
                  onChange={(e) => setLessonName(e.target.value)}
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Lesson Description: </label>
                <input
                  type="text"
                  name="lessonDescription"
                  placeholder="Enter Lesson Description"
                  className="form-control"
                  value={lessonDescription}
                  onChange={(e) => setLessonDescription(e.target.value)}
                />
              </div>
              <button
                className="btn btn-outline-success"
                onClick={saveOrUpdateLesson}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonComponent;
